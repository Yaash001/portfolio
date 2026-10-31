
"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  Children,
  cloneElement,
  useId,
  useState,
} from "react";
import type { ReactElement, ReactNode } from "react";
import styles from "./animated-background.module.scss";

type AnimatedBackgroundChildProps = {
  "data-id": string;
  "data-checked"?: string;
  children?: ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
};

export type AnimatedBackgroundProps = {
  children:
    | ReactElement<AnimatedBackgroundChildProps>[]
    | ReactElement<AnimatedBackgroundChildProps>;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: import("motion/react").Transition;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const uniqueId = useId();

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);
    onValueChange?.(id);
  };

  return Children.map(children, (child, index) => {
    const id = child.props["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      child,
      {
        key: index,
        className: [styles.item, child.props.className]
          .filter(Boolean)
          .join(" "),
        "data-checked": activeId === id ? "true" : "false",
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          <motion.div
            layoutId={`background-${uniqueId}`}
            className={[styles.highlight, className]
              .filter(Boolean)
              .join(" ")}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 32,
              ...transition,
            }}
            initial={false}
            animate={{
              opacity: activeId === id ? 1 : 0,
            }}
          />
        </AnimatePresence>

        <span className={styles.content}>
          {child.props.children}
        </span>
      </>,
    );
  });
}
