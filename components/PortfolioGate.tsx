"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import LoadingScreen from "./LoadingScreen";

export default function PortfolioGate({
  children,
}: {
  children: ReactNode;
}) {
  const [booted, setBooted] = useState<boolean | null>(null);

  useEffect(() => {
    const alreadyBooted =
      sessionStorage.getItem("yash-os-booted") === "true";

    setBooted(alreadyBooted);
  }, []);

  const handleComplete = useCallback(() => {
    setBooted(true);
  }, []);

  // Prevent portfolio flash before checking session storage
  if (booted === null) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999999,
          background: "#020403",
        }}
      />
    );
  }

  // Show terminal and circular loader
  if (!booted) {
    return <LoadingScreen onComplete={handleComplete} />;
  }

  // Render portfolio only after boot completion
  return <>{children}</>;
}
