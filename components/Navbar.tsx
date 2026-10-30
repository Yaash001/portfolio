
"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a
        className={styles.brand}
        href="#home"
        aria-label="Yash Lahane, home"
        onClick={() => setMenuOpen(false)}
      >
        YL<span></span>
      </a>

      <nav
      id="mobile-navigation"
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        aria-label="Main navigation"
      >
        <AnimatedBackground
          enableHover
          className={styles.navLinks}
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
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </AnimatedBackground>
      </nav>

      <button
        type="button"
        className={`${styles.menuToggle} ${
          menuOpen ? styles.menuToggleOpen : ""
        }`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
