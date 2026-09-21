"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const crows = [
  {
    top: "17%",
    delay: 0,
    duration: 8,
    scale: 0.55,
  },
  {
    top: "29%",
    delay: 2.4,
    duration: 9,
    scale: 0.42,
  },
  {
    top: "11%",
    delay: 4.8,
    duration: 7,
    scale: 0.7,
  },
  {
    top: "41%",
    delay: 1.3,
    duration: 10,
    scale: 0.48,
  },
];

export default function ExperienceAtmosphere() {
  const rootRef = useRef<HTMLDivElement>(null);

  const leftIrisRef = useRef<HTMLDivElement>(null);
  const rightIrisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    const leftIris = leftIrisRef.current;
    const rightIris = rightIrisRef.current;

    if (!root || !leftIris || !rightIris) {
      return;
    }

    /*
     * =====================================================
     * ITACHI SHADOW INTRO
     * =====================================================
     */

    gsap.fromTo(
      ".itachi-shadow",
      {
        opacity: 0,
        scale: 0.94,
        y: 20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2,
        delay: 0.45,
        ease: "power3.out",
      }
    );

    /*
     * =====================================================
     * SHARINGAN EYE INTRO
     * =====================================================
     */

    gsap.fromTo(
      ".itachi-eye-socket",
      {
        opacity: 0,
        scale: 0.65,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: 1.35,
        stagger: 0.06,
        ease: "power3.out",
      }
    );

    /*
     * =====================================================
     * SUBTLE SHARINGAN PULSE
     * =====================================================
     */

    gsap.to(".itachi-eye-iris", {
      boxShadow:
        "0 0 5px rgba(255,0,0,.8), 0 0 14px rgba(180,0,0,.5)",
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /*
     * =====================================================
     * CURSOR → SHARINGAN
     *
     * The white eye stays fixed.
     *
     * Only the Sharingan iris/pupil moves.
     * =====================================================
     */

    const handleMouseMove = (event: MouseEvent) => {
      const eyes = root.querySelector(
        ".itachi-eyes"
      ) as HTMLElement | null;

      if (!eyes) return;

      const rect = eyes.getBoundingClientRect();

      const centerX =
        rect.left + rect.width / 2;

      const centerY =
        rect.top + rect.height / 2;

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      const distance = Math.sqrt(
        dx * dx + dy * dy
      );

      const normalizedDistance = Math.min(
        distance / 500,
        1
      );

      const angle = Math.atan2(dy, dx);

      /*
       * Tiny movement.
       *
       * This keeps the Sharingan looking natural
       * instead of making the eyes look cartoonish.
       */

      const maxX = 4;
      const maxY = 2.5;

      const x =
        Math.cos(angle) *
        maxX *
        normalizedDistance;

      const y =
        Math.sin(angle) *
        maxY *
        normalizedDistance;

      gsap.to(
        [leftIris, rightIris],
        {
          x,
          y,
          duration: 0.32,
          ease: "power3.out",
          overwrite: true,
        }
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    /*
     * =====================================================
     * BLINK
     * =====================================================
     */

    const blink = gsap.timeline({
      repeat: -1,
      repeatDelay: 4.5,
    });

    blink
      .to(".itachi-eyelid", {
        scaleY: 1,
        duration: 0.09,
        ease: "power2.in",
      })
      .to(".itachi-eyelid", {
        scaleY: 0,
        duration: 0.14,
        ease: "power2.out",
      })
      .to(".itachi-eyelid", {
        scaleY: 1,
        duration: 0.07,
        ease: "power2.in",
      })
      .to(".itachi-eyelid", {
        scaleY: 0,
        duration: 0.13,
        ease: "power2.out",
      });

    /*
     * =====================================================
     * CROWS
     * =====================================================
     */

    const crowElements =
      root.querySelectorAll<HTMLElement>(
        ".atmosphere-crow"
      );

    crowElements.forEach((crow, index) => {
      const data = crows[index];

      gsap.set(crow, {
        x: "-15vw",
        opacity: 0,
        scale: data.scale,
      });

      gsap.to(crow, {
        x: "120vw",
        opacity: 0.82,
        duration: data.duration,
        delay: data.delay,
        repeat: -1,
        repeatDelay: 2,
        ease: "none",
      });

      /*
       * Body movement.
       */

      gsap.to(crow, {
        y: index % 2 === 0 ? -15 : 15,
        duration: 0.75 + index * 0.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
       * Wing flap.
       */

      gsap.to(
        crow.querySelectorAll(".crow-wing"),
        {
          rotation: 25,
          duration: 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    });

    /*
     * =====================================================
     * CLEANUP
     * =====================================================
     */

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      blink.kill();

      gsap.killTweensOf([
        leftIris,
        rightIris,
      ]);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="experience-atmosphere"
      aria-hidden="true"
    >
      {/* =================================================
          ITACHI SILHOUETTE

          This sits directly over the existing red moon
          from ExperienceScene.
         ================================================= */}

      <div className="itachi-shadow-wrapper">
        <img
          src="/images/itachi-shadow-cutout.png"
          alt=""
          className="itachi-shadow"
        />

        {/* ===============================================
            ANIMATED SHARINGAN
           =============================================== */}

        <div className="itachi-eyes">
          {/* LEFT EYE */}

          <div className="itachi-eye-socket itachi-eye-left">
            <div className="itachi-eyelid" />

            <div
              ref={leftIrisRef}
              className="itachi-eye-iris"
            >
              <span className="itachi-eye-pupil" />

              <span className="itachi-tomoe itachi-tomoe-top" />

              <span className="itachi-tomoe itachi-tomoe-right" />

              <span className="itachi-tomoe itachi-tomoe-left" />
            </div>
          </div>

          {/* RIGHT EYE */}

          <div className="itachi-eye-socket itachi-eye-right">
            <div className="itachi-eyelid" />

            <div
              ref={rightIrisRef}
              className="itachi-eye-iris"
            >
              <span className="itachi-eye-pupil" />

              <span className="itachi-tomoe itachi-tomoe-top" />

              <span className="itachi-tomoe itachi-tomoe-right" />

              <span className="itachi-tomoe itachi-tomoe-left" />
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          CROWS
         ================================================= */}

      <div className="crow-layer">
        {crows.map((crow, index) => (
          <div
            key={index}
            className="atmosphere-crow"
            style={{
              top: crow.top,
            }}
          >
            <span className="crow-wing crow-wing-left" />

            <span className="crow-body" />

            <span className="crow-wing crow-wing-right" />
          </div>
        ))}
      </div>
    </div>
  );
}