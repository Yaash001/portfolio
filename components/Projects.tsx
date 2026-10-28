import projects from "../data/projects";
import { AnimatedBackground } from "./motion-primitives/animated-background";
import styles from "./Projects.module.scss";

export default function Projects() {
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
        {projects.map((project, index) => (
          <article className={styles.card} key={project.title}>
            <div className={styles.cardMeta}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.category}</span>
            </div>

            {project.image && (
              <div className={styles.imageWrap}>
                <img src={project.image} alt={`${project.title} preview`} />
              </div>
            )}

            <h3>{project.title}</h3>
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
        ))}
      </div>
    </section>
  );
}