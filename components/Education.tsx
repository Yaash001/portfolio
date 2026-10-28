import education from "../data/education";
import styles from "./Education.module.scss";

export default function Education() {
  return (
    <section className={styles.education} id="education">
      <div className={styles.header}>
        <p className={styles.eyebrow}>06 / EDUCATION</p>
        <h2>
          Learning by <span>building.</span>
        </h2>
      </div>

      <div className={styles.list}>
        {education.map((item, index) => (
          <article
            className={styles.item}
            key={`${item.qualification}-${item.institution}`}
          >
            <span className={styles.index}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className={styles.details}>
              <h3>{item.qualification}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.description}>{item.description}</p>
            </div>

            <p className={styles.duration}>{item.duration}</p>
          </article>
        ))}
      </div>
    </section>
  );
}