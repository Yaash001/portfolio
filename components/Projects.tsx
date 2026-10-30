
"use client";

import { useEffect, useState } from "react";
import projects from "../data/projects";
import { AnimatedBackground } from "./motion-primitives/animated-background";
import styles from "./Projects.module.scss";
import { Cursor } from "./motion-primitives/cursor";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");

    const updateDevice = () => {
      setIsMobile(mediaQuery.matches);
      setOpenProjectIndex(null);
    };

    updateDevice();
    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <p className={styles.eyebrow}>03 / SELECTED WORK</p>
        <h2>
          Things I&apos;ve <span>built.</span>
        </h2>
        <p className={styles.intro}>
          A few projects exploring web development and connected technology.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => {
          const isOpen = openProjectIndex === index;
          const previewId = `project-preview-${index}`;

          return (
            <article className={styles.card} key={project.title}>
              <div className={styles.cardMeta}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.category}</span>
              </div>

              <div className={styles.titleHover}>
                <h3>
                  <button
                    type="button"
                    className={styles.titleButton}
                    aria-expanded={isMobile && isOpen}
                    aria-controls={previewId}
                    onClick={() => {
                      if (isMobile) {
                        setOpenProjectIndex(isOpen ? null : index);
                      }
                    }}
                  >
                    {project.title}
                    {isMobile && project.image && (
                      <span className={styles.previewIndicator} aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    )}
                  </button>
                </h3>

                {!isMobile && project.image && (
                  <Cursor
                    attachToParent
                    variants={{
                      initial: { height: 0, opacity: 0, scale: 0.3 },
                      animate: { height: "auto", opacity: 1, scale: 1 },
                      exit: { height: 0, opacity: 0, scale: 0.3 },
                    }}
                    transition={{
                      type: "spring",
                      duration: 0.3,
                      bounce: 0.1,
                    }}
                    springConfig={{
                      bounce: 0.01,
                    }}
                    className={styles.projectCursor}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className={styles.cursorImage}
                    />
                  </Cursor>
                )}

                {isMobile && isOpen && project.image && (
                  <div
                    id={previewId}
                    className={styles.mobilePreview}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                    />
                  </div>
                )}
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.techSection}>
                <p className={styles.techLabel}>TECH STACK</p>

                <AnimatedBackground
                  enableHover
                  className={styles.techHighlight}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                >
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      data-id={technology}
                      className={styles.tech}
                    >
                      {technology}
                    </span>
                  ))}
                </AnimatedBackground>
              </div>

              {project.githubUrl && (
                <a
                  className={styles.projectLink}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  className={styles.projectLink}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}