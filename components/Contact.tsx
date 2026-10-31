import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.content}>
        <h2>
          <span>Let&apos;s talk.</span>
        </h2>

        <p className={styles.description}>
          I&apos;m always open to discussing new projects, creative ideas,
          and opportunities to collaborate.
        </p>

        <a
          className={styles.emailButton}
          href="mailto:yash.lahane0109@gmail.com?subject=Portfolio%20Inquiry"
          target="_blank"
          rel="noreferrer"
        >
          Say Hello <span aria-hidden="true">↗</span>
        </a>

        <div className={styles.socialLinks}>
          <a href="https://github.com/Yaash001" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/yash-lahane-theyaash201" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="https://www.instagram.com/yaash401" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}