
"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.scss";

const bootMessages = [
  "ESTABLISHING SECURE CONNECTION...",
  "S.H.I.E.L.D. NETWORK DETECTED",
  "STARK INDUSTRIES PROTOCOL: VERIFIED",
  "AVENGERS INITIATIVE: AUTHORIZED",
  "IDENTITY CONFIRMED",
  "ACCESS GRANTED.",
   "WELCOME SIR.."
];

export default function LoadingScreen() {
const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [stage, setStage] = useState("terminal");
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const wait = (ms) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    async function boot() {
      if (sessionStorage.getItem("yash-os-booted")) {
        return;
      }
      setVisible(true);

      for (const message of bootMessages) {
        if (cancelled) return;

        let typed = "";

        for (const character of message) {
          if (cancelled) return;

          typed += character;
          setCurrentLine(typed);
          await wait(22);
        }

        setLines((previous) => [...previous, message]);
        setCurrentLine("");
        await wait(280);
      }

      if (cancelled) return;

      await wait(500);
      setStage("loader");

      for (let value = 0; value <= 100; value++) {
        if (cancelled) return;

        setProgress(value);
        await wait(22);
      }

      if (cancelled) return;

      await wait(400);
      setExiting(true);

      await wait(800);

      if (!cancelled) {
        sessionStorage.setItem("yash-os-booted", "true");
        setVisible(false);
      }
    }

    boot();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`${styles.screen} ${exiting ? styles.exit : ""}`}
      aria-label="YASH OS loading screen"
    >
      {stage === "terminal" ? (
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <span>YASH OS // SECURE TERMINAL</span>
            <span>SYS.ONLINE</span>
          </div>

          <div className={styles.terminalBody} aria-live="polite">
            <p className={styles.system}>
              &gt; INITIALIZING YASH OS...
            </p>

            {lines.map((line, index) => (
              <p className={styles.line} key={index}>
                &gt; {line}
              </p>
            ))}

            {currentLine && (
              <p className={styles.currentLine}>
                &gt; {currentLine}
                <span className={styles.cursor}>_</span>
              </p>
            )}
          </div>

          <p className={styles.terminalFooter}>
            ESTABLISHING PERSONAL ENVIRONMENT
          </p>
        </div>
      ) : (
        <div className={styles.loader}>
          <div className={styles.ring}>
            <svg viewBox="0 0 240 240">
              <circle
                className={styles.track}
                cx="120"
                cy="120"
                r="96"
              />

              <circle
                className={styles.progressRing}
                cx="120"
                cy="120"
                r="96"
                pathLength="100"
                style={{
                  strokeDasharray: `${progress} 100`,
                }}
              />
            </svg>

            <div className={styles.center}>
              <h1>YASH OS</h1>
              <p>SYSTEM INITIALIZATION</p>
              <strong>{progress}%</strong>
            </div>
          </div>

          <p className={styles.loaderStatus}>
            {progress === 100
              ? "SYSTEM READY"
              : "LOADING PORTFOLIO ENVIRONMENT..."}
          </p>
        </div>
      )}

      <div className={styles.scanlines} />
    </div>
  );
}
