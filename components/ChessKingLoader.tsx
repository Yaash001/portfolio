
"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ChessKing = dynamic(() => import("./ChessKing"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "420px" }} />,
});

export default function ChessKingLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "420px" }}
    >
      {shouldLoad && <ChessKing />}
    </div>
  );
}
