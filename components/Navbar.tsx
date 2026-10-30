import styles from "./Navbar.module.scss";
import { AnimatedBackground } from "./motion-primitives/animated-background";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#home" aria-label="Yash Lahane, home">
        YL<span></span>
      </a>

      <nav className={styles.nav} aria-label="Main navigation">
        <AnimatedBackground
          enableHover
          className=""
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-id={link.href}
            >
              {link.label}
            </a>
          ))}
        </AnimatedBackground>
      </nav>
    </header>
  );
}