"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;

    if (!overlay) return;

    gsap.set(overlay, {
      scaleY: 0,
      transformOrigin: "bottom",
    });

    const timeline = gsap.timeline();

    timeline.to(overlay, {
      scaleY: 1,
      duration: 0.55,
      ease: "power4.inOut",
    });

    timeline.to(overlay, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.65,
      ease: "power4.inOut",
    });

    return () => {
      timeline.kill();
    };
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="page-transition"
      aria-hidden="true"
    />
  );
}