import about from "../data/about";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      
          <p className={styles.hero__index}>01 / INTRODUCTION</p>

      <div className={styles.hero__content}>
        <p className={styles.hero__role}>{about.role}</p>

        <h1>{about.headline}</h1>

        <p className={styles.hero__intro}>{about.introduction}</p>

        {about.location && (
          <p className={styles.hero__location}>
            <span aria-hidden="true">↗</span> {about.location}
          </p>
        )}

        <a className={styles.hero__link} href="#contact">
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </a>
      </div>

    </section>
  );
}