"use client";

import { useEffect, useRef } from "react";

export default function EmberCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const current = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const move = (event: PointerEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener(
      "pointermove",
      move,
      { passive: true }
    );

    let frame = 0;

    const animate = () => {
      current.current.x +=
        (mouse.current.x -
          current.current.x) *
        0.18;

      current.current.y +=
        (mouse.current.y -
          current.current.y) *
        0.18;

      cursor.style.transform =
        `translate3d(
          ${current.current.x}px,
          ${current.current.y}px,
          0
        )`;

      frame =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener(
        "pointermove",
        move
      );

      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="ember-cursor"
      aria-hidden="true"
    >
      <span />
    </div>
  );
}