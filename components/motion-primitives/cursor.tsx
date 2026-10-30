
"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  type SpringOptions,
  useMotionValue,
  useSpring,
  AnimatePresence,
  type Transition,
  type Variant,
} from "motion/react";
import { cn } from "@/lib/utils";

export type CursorProps = {
  children: React.ReactNode;
  className?: string;
  springConfig?: SpringOptions;
  attachToParent?: boolean;
  transition?: Transition;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
  onPositionChange?: (x: number, y: number) => void;
};

export function Cursor({
  children,
  className,
  springConfig,
  attachToParent,
  variants,
  transition,
  onPositionChange,
}: CursorProps) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const anchorRef = useRef<HTMLSpanElement>(null);

  const [isVisible, setIsVisible] = useState(!attachToParent);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    cursorX.set(window.innerWidth / 2);
    cursorY.set(window.innerHeight / 2);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      onPositionChange?.(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, [cursorX, cursorY, onPositionChange]);

  useEffect(() => {
    if (!attachToParent) {
      document.body.style.cursor = "none";

      return () => {
        document.body.style.cursor = "";
      };
    }

    const parent = anchorRef.current?.parentElement;

    if (!parent) return;

    const handleMouseEnter = () => {
      parent.style.cursor = "none";
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      parent.style.cursor = "auto";
      setIsVisible(false);
    };

    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      parent.style.cursor = "";
    };
  }, [attachToParent]);

  const cursorXSpring = useSpring(
    cursorX,
    springConfig || { duration: 0 }
  );

  const cursorYSpring = useSpring(
    cursorY,
    springConfig || { duration: 0 }
  );

  return (
    <>
      {attachToParent && (
        <span
          ref={anchorRef}
          aria-hidden="true"
          style={{ display: "none" }}
        />
      )}

      {mounted &&
        createPortal(
          <motion.div
            className={cn(
              "pointer-events-none fixed left-0 top-0 z-50",
              className
            )}
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={transition}
                >
                  {children}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>,
          document.body
        )}
    </>
  );
}
