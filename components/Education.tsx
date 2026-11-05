import education from "../data/education";
import certificates from "../data/certificates";
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

      <details className={styles.certifications}>
        <summary className={styles.certificateButton}>
          View Certifications
          <span aria-hidden="true">+</span>
        </summary>

        <div className={styles.certificateGrid}>
          {certificates.length ? (
            certificates.map((certificate) => (
              <article
                className={styles.certificate}
                key={certificate.title}
              >
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  loading="lazy"
                />

                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
                <p className={styles.certificateDescription}>
  {certificate.description}
</p>

                {certificate.link && (
  <a
    href={certificate.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    View Certificate ↗
  </a>
)}
              </article>
            ))
          ) : (
            <p className={styles.empty}>
              Certifications will be added soon.
            </p>
          )}
        </div>
      </details>
    </section>
  );
}