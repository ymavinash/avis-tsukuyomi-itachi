"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type EyeData = {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
};

const EYES: EyeData[] = [
  {
    x: 8,
    y: 24,
    scale: 0.72,
    rotation: -5,
    opacity: 0.45,
  },
  {
    x: 21,
    y: 58,
    scale: 0.5,
    rotation: 4,
    opacity: 0.3,
  },
  {
    x: 37,
    y: 17,
    scale: 0.46,
    rotation: -4,
    opacity: 0.25,
  },
  {
    x: 48,
    y: 40,
    scale: 0.8,
    rotation: 2,
    opacity: 0.5,
  },
  {
    x: 66,
    y: 19,
    scale: 0.55,
    rotation: -3,
    opacity: 0.3,
  },
  {
    x: 82,
    y: 32,
    scale: 0.72,
    rotation: 5,
    opacity: 0.42,
  },
  {
    x: 93,
    y: 17,
    scale: 0.45,
    rotation: -5,
    opacity: 0.25,
  },
  {
    x: 75,
    y: 68,
    scale: 0.52,
    rotation: 3,
    opacity: 0.3,
  },
  {
    x: 55,
    y: 79,
    scale: 0.45,
    rotation: -3,
    opacity: 0.2,
  },
  {
    x: 28,
    y: 82,
    scale: 0.62,
    rotation: 4,
    opacity: 0.35,
  },
  {
    x: 91,
    y: 82,
    scale: 0.58,
    rotation: -5,
    opacity: 0.3,
  },
];

export default function InteractiveAtmosphere() {
  const atmosphereRef =
    useRef<HTMLDivElement>(null);

  const cursorRef =
    useRef<HTMLDivElement>(null);

  const eyeRefs =
    useRef<(HTMLDivElement | null)[]>([]);

  const rippleRefs =
    useRef<(HTMLDivElement | null)[]>([]);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const smoothMouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const discovered = useRef<boolean[]>(
    EYES.map(() => false)
  );

  useEffect(() => {
    const atmosphere =
      atmosphereRef.current;

    const cursor =
      cursorRef.current;

    if (!atmosphere || !cursor) {
      return;
    }

    let frame = 0;

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    const animate = () => {
      /*
       * Smooth mouse interpolation.
       */

      smoothMouse.current.x +=
        (mouse.current.x -
          smoothMouse.current.x) *
        0.09;

      smoothMouse.current.y +=
        (mouse.current.y -
          smoothMouse.current.y) *
        0.09;

      const mouseX =
        smoothMouse.current.x;

      const mouseY =
        smoothMouse.current.y;

      const percentX =
        (mouseX / window.innerWidth) *
        100;

      const percentY =
        (mouseY / window.innerHeight) *
        100;

      /*
       * Update flashlight.
       */

      atmosphere.style.setProperty(
        "--mouse-x",
        `${percentX}%`
      );

      atmosphere.style.setProperty(
        "--mouse-y",
        `${percentY}%`
      );

      /*
       * Move cursor reticle.
       */

      cursor.style.transform =
        `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      /*
       * Process every eye.
       */

      eyeRefs.current.forEach(
        (eye, index) => {
          if (!eye) return;

          const data = EYES[index];

          const eyeX =
            (data.x / 100) *
            window.innerWidth;

          const eyeY =
            (data.y / 100) *
            window.innerHeight;

          const dx =
            mouseX - eyeX;

          const dy =
            mouseY - eyeY;

          const distance =
            Math.sqrt(
              dx * dx + dy * dy
            );

          /*
           * Radius at which the eye reacts.
           */

          const revealRadius =
            260;

          const reveal =
            Math.max(
              0,
              1 -
                distance /
                  revealRadius
            );

          /*
           * Eye follows cursor slightly.
           */

          const followX =
            Math.max(
              -10,
              Math.min(10, dx * 0.025)
            );

          const followY =
            Math.max(
              -7,
              Math.min(7, dy * 0.02)
            );

          eye.style.setProperty(
            "--reveal",
            reveal.toString()
          );

          eye.style.setProperty(
            "--follow-x",
            `${followX}px`
          );

          eye.style.setProperty(
            "--follow-y",
            `${followY}px`
          );

          /*
           * Eye has been discovered.
           */

          if (
            reveal > 0.72 &&
            !discovered.current[index]
          ) {
            discovered.current[index] =
              true;

            const ripple =
              rippleRefs.current[index];

            if (ripple) {
              gsap.killTweensOf(ripple);

              gsap.set(ripple, {
                opacity: 0.8,
                scale: 0.3,
              });

              gsap.to(ripple, {
                opacity: 0,
                scale: 2.2,
                duration: 0.8,
                ease: "power3.out",
              });
            }

            gsap.fromTo(
              eye,
              {
                filter:
                  "brightness(1) saturate(1)",
              },
              {
                filter:
                  "brightness(1.8) saturate(1.5)",
                duration: 0.18,
                yoyo: true,
                repeat: 1,
                ease: "power2.out",
              }
            );
          }

          /*
           * Reset discovery once cursor
           * moves away.
           */

          if (
            reveal < 0.35
          ) {
            discovered.current[index] =
              false;
          }
        }
      );

      frame =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={atmosphereRef}
      className="interactive-atmosphere"
      aria-hidden="true"
    >
      {/* =================================
          BACKGROUND EYES
      ================================= */}

      <div className="atmosphere-eyes">
        {EYES.map((eye, index) => (
          <div
            key={index}
            ref={(element) => {
              eyeRefs.current[index] =
                element;
            }}
            className="atmosphere-eye"
            style={
              {
                left: `${eye.x}%`,
                top: `${eye.y}%`,
                "--eye-scale":
                  eye.scale,
                "--eye-rotation":
                  `${eye.rotation}deg`,
                "--eye-opacity":
                  eye.opacity,
              } as React.CSSProperties
            }
          >
            <div className="eye-socket">
              <div className="mini-sharingan">
                <span className="mini-pupil" />

                <i className="mini-tomoe mini-tomoe-1" />
                <i className="mini-tomoe mini-tomoe-2" />
                <i className="mini-tomoe mini-tomoe-3" />
              </div>
            </div>

            <div
              ref={(element) => {
                rippleRefs.current[index] =
                  element;
              }}
              className="eye-ripple"
            />
          </div>
        ))}
      </div>

      {/* =================================
          DARKNESS
      ================================= */}

      <div className="atmosphere-darkness" />

      {/* =================================
          RED FLASHLIGHT
      ================================= */}

      <div className="atmosphere-light" />

      {/* =================================
          GRAIN
      ================================= */}

      <div className="atmosphere-grain" />

      {/* =================================
          VIGNETTE
      ================================= */}

      <div className="atmosphere-vignette" />

      {/* =================================
          CURSOR RETICLE
      ================================= */}

      <div
        ref={cursorRef}
        className="atmosphere-cursor"
      >
        <span />
      </div>
    </div>
  );
}