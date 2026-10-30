import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.content}>
        <h2>
          <span> Let&apos;s talk.</span>
        </h2>

        <p className={styles.description}>
          I&apos;m always open to discussing new projects, creative ideas,
          and opportunities to collaborate.
        </p>

        <a className={styles.emailButton} href="mailto:yash.lahane0109@gmail.com?subject=Portfolio%20Inquiry" target="blank">
          Say Hello <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}