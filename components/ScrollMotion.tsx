
"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollMotion({
  children,
}: {
  children: ReactNode;
}) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const main = mainRef.current;
    if (!main) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
      () => {
        const sections = gsap.utils.toArray<HTMLElement>(
          "section[id]",
          main
        );

        sections.forEach((section, index) => {
          const elements = section.querySelectorAll<HTMLElement>(
            "h1, h2, h3, p"
          );

          if (!elements.length) return;

          // Hero gets a one-time cinematic entrance.
          if (index === 0) {
            gsap.from(elements, {
              y: 35,
              z: -50,
              rotateX: 5,
              opacity: 0,
              duration: 1.3,
              stagger: 0.12,
              ease: "power3.out",
              delay: 0.2,
            });
            return;
          }

          // Scroll-linked 3D text reveal.
          gsap.fromTo(
            elements,
            {
              y: 55,
              z: -90,
              rotateX: 9,
              opacity: 0,
              scale: 0.97,
              transformPerspective: 1000,
              transformOrigin: "50% 100%",
            },
            {
              y: 0,
              z: 0,
              rotateX: 0,
              opacity: 1,
              scale: 1,
              stagger: 0.06,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                end: "top 25%",
                scrub: 0.8,
              },
            }
          );
        });
      }
    );

    // Lighter movement on mobile.
    mm.add(
      "(max-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const sections = gsap.utils.toArray<HTMLElement>(
          "section[id]",
          main
        );

        sections.slice(1).forEach((section) => {
          const elements = section.querySelectorAll<HTMLElement>(
            "h2, h3, p"
          );

          gsap.fromTo(
            elements,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.04,
              ease: "power1.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                end: "top 45%",
                scrub: 0.6,
              },
            }
          );
        });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      style={{ perspective: "1400px" }}
    >
      {children}
    </main>
  );
}
