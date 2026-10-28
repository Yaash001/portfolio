import experience from "../data/experience";
import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.header}>
        <p className={styles.eyebrow}>05 / EXPERIENCE</p>
        <h2>
          Where I&apos;ve <span>grown.</span>
        </h2>
      </div>

      <div className={styles.list}>
        {experience.map((item, index) => (
          <article className={styles.item} key={`${item.company}-${item.role}`}>
            <div className={styles.index}>
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className={styles.details}>
              <h3>{item.role}</h3>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.description}>{item.description}</p>
            </div>

            <p className={styles.duration}>{item.duration}</p>
          </article>
        ))}
      </div>
    </section>
  );
}