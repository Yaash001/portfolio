
import about from "../data/about";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <p className={styles.eyebrow}>02 / ABOUT ME</p>

      <div className={styles.content}>
        <h2>
          A curious mind,
          <br />
          an engineer&apos;s approach.
        </h2>

        <p className={styles.description}>{about.introduction}</p>

        <p className={styles.detail}>
          I enjoy exploring the space where thoughtful design, useful software,
          and real-world technology meet.
        </p>
      </div>
    </section>
  );
}
