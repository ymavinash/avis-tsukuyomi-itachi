"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

export default function Sharingan() {
  const router = useRouter();

  const eyeRef = useRef<HTMLDivElement>(null);
  const tomoeRef = useRef<SVGGElement>(null);
  const mangekyoRef = useRef<SVGGElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const soundRef = useRef<HTMLAudioElement | null>(null);

  const [locked, setLocked] = useState(false);

  const enterExperience = () => {
    if (locked) return;

    const eye = eyeRef.current;
    const tomoe = tomoeRef.current;
    const mangekyo = mangekyoRef.current;
    const glow = glowRef.current;

    if (!eye || !tomoe || !mangekyo || !glow) return;

    setLocked(true);

    /*
     * MANGEKYO SOUND
     *
     * Put your sound file here:
     *
     * public/audio/mangekyo.mp3
     */
    const sound = new Audio("/audio/mangekyo.mp3");

    sound.volume = 0.75;
    sound.currentTime = 0;

    sound.play().catch(() => {
      // Browser may block autoplay/audio in some situations.
      // The click itself normally allows playback.
    });

    soundRef.current = sound;

    /*
     * MANGEKYO TRANSFORMATION
     */
    const tl = gsap.timeline({
      defaults: {
        overwrite: "auto",
      },
    });

    // 1. Small anticipation
    tl.to(eye, {
      scale: 1.025,
      duration: 0.16,
      ease: "power2.out",
    });

    // 2. Sharingan rotates
    tl.to(
      tomoe,
      {
        rotation: 360,
        duration: 0.62,
        ease: "power3.inOut",
        svgOrigin: "100 100",
      },
      "-=0.04"
    );

    // 3. Tomoe disappear
    tl.to(
      tomoe,
      {
        scale: 0.35,
        opacity: 0,
        duration: 0.24,
        ease: "power2.in",
        svgOrigin: "100 100",
      },
      "-=0.14"
    );

    // 4. Mangekyo appears
    tl.fromTo(
      mangekyo,
      {
        opacity: 0,
        scale: 0.72,
        rotation: -8,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.42,
        ease: "power3.out",
        svgOrigin: "110 115",
      },
      "-=0.10"
    );

    // 5. Tiny settling movement
    tl.to(mangekyo, {
      scale: 1.035,
      duration: 0.16,
      ease: "power2.out",
      svgOrigin: "100 100",
    });

    tl.to(mangekyo, {
      scale: 1,
      duration: 0.22,
      ease: "power2.inOut",
      svgOrigin: "100 100",
    });

    // 6. Red energy glow
    tl.to(
      glow,
      {
        opacity: 1,
        scale: 1.15,
        duration: 0.42,
        ease: "power2.out",
      },
      "-=0.25"
    );

    // 7. Eye expands
    tl.to(
      eye,
      {
        scale: 1.65,
        duration: 0.58,
        ease: "power3.in",
      },
      "-=0.15"
    );

    // 8. Navigate at transition peak
    tl.call(() => {
      router.push("/experience");
    });
  };

  return (
    <button
      type="button"
      onClick={enterExperience}
      disabled={locked}
      aria-label="Enter the experience"
      className="sharingan-button"
    >
      <div ref={eyeRef} className="sharingan-eye">
        {/* Red energy glow */}
        <div
          ref={glowRef}
          className="sharingan-mangekyo-glow"
        />

        <svg
          className="sharingan-iris"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          {/* =========================
              SHARINGAN TOMOE
             ========================= */}

          <g
            ref={tomoeRef}
            className="sharingan-tomoe-group"
          >
            {/* Top tomoe */}
            <path
              className="tomoe-shape"
              d="
                M100 32
                C88 38 82 48 84 58
                C86 67 96 70 103 65
                C110 60 108 48 100 32
                Z
              "
            />

            {/* Right tomoe */}
            <path
              className="tomoe-shape"
              d="
                M100 32
                C88 38 82 48 84 58
                C86 67 96 70 103 65
                C110 60 108 48 100 32
                Z
              "
              transform="rotate(120 100 100)"
            />

            {/* Left tomoe */}
            <path
              className="tomoe-shape"
              d="
                M100 32
                C88 38 82 48 84 58
                C86 67 96 70 103 65
                C110 60 108 48 100 32
                Z
              "
              transform="rotate(240 100 100)"
            />
          </g>

          {/* =========================
              MANGEKYO SHARINGAN
             ========================= */}

          <g
            ref={mangekyoRef}
            className="sharingan-mangekyo"
          >
            {/* Blade 1 */}
            <path
              className="mangekyo-blade"
              d="
                M100 100
                C96 78 91 55 100 22
                C109 48 120 65 139 76
                C123 80 111 89 100 100
                Z
              "
            />

            {/* Blade 2 */}
            <path
              className="mangekyo-blade"
              d="
                M100 100
                C96 78 91 55 100 22
                C109 48 120 65 139 76
                C123 80 111 89 100 100
                Z
              "
              transform="rotate(120 100 100)"
            />

            {/* Blade 3 */}
            <path
              className="mangekyo-blade"
              d="
                M100 100
                C96 78 91 55 100 22
                C109 48 120 65 139 76
                C123 80 111 89 100 100
                Z
              "
              transform="rotate(240 100 100)"
            />
          </g>

          {/* =========================
              CENTER PUPIL
             ========================= */}

          <circle
            cx="100"
            cy="100"
            r="18"
            className="sharingan-center"
          />
        </svg>
      </div>
    </button>
  );
}