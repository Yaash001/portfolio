
import about from "../data/about";
import styles from "./Hero.module.scss";
import ChessKingLoader from "./ChessKingLoader";
export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <p className={styles.hero__index}>01 / INTRODUCTION</p>

      <div className={styles.hero__layout}>
        <div className={styles.hero__content}>
          <p className={styles.hero__name}>
            Yash Lahane
          </p>

          <p className={styles.hero__role}>
            {about.role}
          </p>

          <h1>{about.headline}</h1>

          <p className={styles.hero__intro}>{about.introduction}</p>

          {about.location && (
            <p className={styles.hero__location}>
              <span aria-hidden="true">↗</span> {about.location}
            </p>
          )}

          <a className={styles.hero__link} href="mailto:yash.lahane0109@gmail.com" target="_blank">
            Let&apos;s connect <span aria-hidden="true">↗</span>
          </a>
        </div>

<div className={styles.hero__visual}>
  <ChessKingLoader />

  <div className={styles.hero__resume}>
    <a
      href="/resume.pdf"  // TODO : MAKE A RESUME ADD HERE IN PUBLIC
      target="_blank"
      rel="noopener noreferrer"
      className={styles.hero__resumeView}
    >
      View Resume <span aria-hidden="true">↗</span>
    </a>

    <a
      href="/resume.pdf"       // TODO : MAKE A RESUME ADD HERE IN PUBLIC
      download="Yash-Lahane-Resume.pdf"
      className={styles.hero__resumeDownload}
    >
      Download Resume <span aria-hidden="true">↓</span>
    </a>
  </div>
</div>      </div>
    </section>
  );
}
