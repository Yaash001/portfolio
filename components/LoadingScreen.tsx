
"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.scss";

const bootMessages: string[] = [
  "ESTABLISHING SECURE CONNECTION...",
  "S.H.I.E.L.D. NETWORK DETECTED",
  "STARK INDUSTRIES PROTOCOL: VERIFIED",
  "J.A.R.V.I.S. INTERFACE: INITIALIZED",
  "IDENTITY CONFIRMED",
  "ACCESS GRANTED.",
];

type BootStage = "terminal" | "loader" | "welcome";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [stage, setStage] = useState<BootStage>("terminal");
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const wait = (ms: number): Promise<void> =>
      new Promise((resolve) => setTimeout(resolve, ms));

    async function boot() {
      if (sessionStorage.getItem("yash-os-booted")) {
        return;
      }

      setVisible(true);

      // TERMINAL BOOT SEQUENCE
      for (const message of bootMessages) {
        if (cancelled) return;

        let typed = "";

        for (const character of message) {
          if (cancelled) return;

          typed += character;
          setCurrentLine(typed);

          await wait(22);
        }

        if (cancelled) return;

        setLines((previous) => [...previous, message]);
        setCurrentLine("");

        await wait(280);
      }

      if (cancelled) return;

      await wait(500);

      // CIRCULAR YASH OS LOADER
      setStage("loader");

      for (let value = 0; value <= 100; value++) {
        if (cancelled) return;

        setProgress(value);

        await wait(22);
      }

      if (cancelled) return;

      // CINEMATIC WELCOME SCREEN
      await wait(500);

      setStage("welcome");

      await wait(1400);

      if (cancelled) return;

      // FADE OUT
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
      aria-live="polite"
    >
      {stage === "terminal" && (
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <span>YASH OS // SECURE TERMINAL</span>
            <span className={styles.online}>
              SYS.ONLINE
            </span>
          </div>

          <div className={styles.terminalBody}>
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
            CLASSIFIED // ESTABLISHING PERSONAL ENVIRONMENT
          </p>
        </div>
      )}

      {stage === "loader" && (
        <div className={styles.loader}>
          <div className={styles.ring}>
            <svg
              viewBox="0 0 240 240"
              className={styles.ringSvg}
              aria-hidden="true"
            >
              {/* Outer circular track */}
              <circle
                className={styles.outerTrack}
                cx="120"
                cy="120"
                r="108"
              />

              {/* Rotating HUD markings and indicator */}
              <g className={styles.rotatingTicks}>
                {Array.from({ length: 36 }, (_, index) => (
                  <line
                    key={index}
                    className={
                      index % 3 === 0
                        ? styles.majorTick
                        : styles.minorTick
                    }
                    x1="120"
                    y1="5"
                    x2="120"
                    y2={index % 3 === 0 ? "14" : "10"}
                    transform={`rotate(${index * 10} 120 120)`}
                  />
                ))}

                <circle
                  className={styles.orbitDot}
                  cx="120"
                  cy="5"
                  r="3"
                />
              </g>

              {/* Main progress track */}
              <circle
                className={styles.track}
                cx="120"
                cy="120"
                r="88"
              />

              {/* Progress ring */}
              <circle
                className={styles.progressRing}
                cx="120"
                cy="120"
                r="88"
                pathLength="100"
                style={{
                  strokeDasharray: `${progress} 100`,
                }}
              />

              {/* Inner decorative ring */}
              <circle
                className={styles.innerTrack}
                cx="120"
                cy="120"
                r="74"
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

      {stage === "welcome" && (
        <div className={styles.welcome}>
          <p className={styles.welcomeEyebrow}>
            YASH OS // SYSTEM ONLINE
          </p>

          <h1>WELCOME..</h1>

          <div className={styles.welcomeLine} />

          <p className={styles.welcomeSubtext}>
            ALL SYSTEMS OPERATIONAL
          </p>

          <p className={styles.welcomeAccess}>
            PORTFOLIO ACCESS GRANTED
          </p>
        </div>
      )}

      <div className={styles.scanlines} />
    </div>
  );
}
