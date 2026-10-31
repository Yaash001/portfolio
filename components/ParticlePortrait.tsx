"use client";

import { useEffect, useRef } from "react";
import styles from "./ParticlePortrait.module.scss";

type Particle = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  scatterX: number;
  scatterY: number;
  color: string;
};

export default function ParticlePortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const image = new Image();
    let particles: Particle[] = [];
    let animationFrame = 0;
    let isRunning = false;
    let isInView = false;

    let width = 0;
    let height = 0;
    let isForming = false;
    let pointer = { x: -1000, y: -1000 };

    const startAnimation = () => {
      if (
        isRunning ||
        !isInView ||
        document.visibilityState !== "visible"
      ) {
        return;
      }

      isRunning = true;
      animationFrame = requestAnimationFrame(draw);
    };

    const stopAnimation = () => {
      isRunning = false;
      cancelAnimationFrame(animationFrame);
    };

    const createParticles = () => {
      const rect = canvas.getBoundingClientRect();

      if (!rect.width || !rect.height || !image.naturalWidth) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");

      if (!offCtx) return;

      const scale = Math.min(
        (width * 0.9) / image.naturalWidth,
        (height * 0.9) / image.naturalHeight
      );

      const imageWidth = Math.round(image.naturalWidth * scale);
      const imageHeight = Math.round(image.naturalHeight * scale);

      offscreen.width = imageWidth;
      offscreen.height = imageHeight;

      offCtx.drawImage(image, 0, 0, imageWidth, imageHeight);

      const pixels = offCtx.getImageData(
        0,
        0,
        imageWidth,
        imageHeight
      ).data;

      const offsetX = (width - imageWidth) / 2;
      const offsetY = (height - imageHeight) / 2;

      const nextParticles: Particle[] = [];
      const spacing = 3;

      for (let y = 0; y < imageHeight; y += spacing) {
        for (let x = 0; x < imageWidth; x += spacing) {
          const index = (y * imageWidth + x) * 4;
          const alpha = pixels[index + 3];

          if (alpha < 80) continue;

          nextParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            targetX: offsetX + x,
            targetY: offsetY + y,
            scatterX: Math.random() * width,
            scatterY: Math.random() * height,
            color: `rgba(${pixels[index]}, ${pixels[index + 1]}, ${pixels[index + 2]}, ${alpha / 255})`,
          });
        }
      }

      particles = nextParticles;
      console.log("Particles created:", particles.length);
console.log("Canvas size:", width, height);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        let destinationX = isForming
          ? particle.targetX
          : particle.scatterX;

        let destinationY = isForming
          ? particle.targetY
          : particle.scatterY;

        if (isForming) {
          const dx = particle.targetX - pointer.x;
          const dy = particle.targetY - pointer.y;
          const distance = Math.hypot(dx, dy);
          const influence = Math.max(0, 1 - distance / 90);

          if (influence > 0) {
            const angle = Math.atan2(dy, dx);
            destinationX += Math.cos(angle) * influence * 14;
            destinationY += Math.sin(angle) * influence * 14;
          }
        }

        particle.x += (destinationX - particle.x) * 0.09;
        particle.y += (destinationY - particle.y) * 0.09;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.4, 0, Math.PI * 2);

        ctx.fillStyle = isForming
          ? particle.color
          : "rgba(249, 235, 215, 0.9)";

        ctx.fill();
      }

      if (isRunning) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      pointer = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const handlePointerEnter = () => {
      isForming = true;
    };

    const handlePointerLeave = () => {
      isForming = false;
      pointer = { x: -1000, y: -1000 };
    };

    image.onload = () => {
      createParticles();
      startAnimation();
    };
image.onerror = () => {
  console.error("Portrait image failed:", image.src);
};

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;

        if (isInView) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { rootMargin: "100px" }
    );

    intersectionObserver.observe(canvas);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    image.src ="/potraits/YAASH.png";

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerenter", handlePointerEnter);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    const resizeObserver = new ResizeObserver(() => {
      if (image.complete && image.naturalWidth) {
        createParticles();
      }
    });

    resizeObserver.observe(canvas);

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerenter", handlePointerEnter);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className={styles.portrait}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-label="Interactive particle portrait"
      />
    </div>
  );
}