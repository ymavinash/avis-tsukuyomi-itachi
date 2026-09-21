"use client";

import { useEffect, useState } from "react";

export default function SharinganTransition() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const activate = () => {
      setActive(true);
    };

    window.addEventListener("sharingan-activate", activate);

    return () => {
      window.removeEventListener(
        "sharingan-activate",
        activate
      );
    };
  }, []);

  if (!active) return null;

  return (
    <div className="sharingan-transition">
      <div className="transition-flash" />
    </div>
  );
}