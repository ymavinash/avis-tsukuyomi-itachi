"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import Navigation from "@/src/components/navigation/Navigation";
import ExperienceAtmosphere from "./ExperienceAtmosphere";
import ExperienceScene from "@/src/components/three/ExperienceScene";

export default function ExperiencePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".experience-copy", {
        opacity: 0,
        y: 40,
        duration: 1.5,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".experience-scroll", {
        opacity: 0,
        y: 15,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="experience-page"
    >
      <Navigation />

      {/* EXISTING THREE.JS SCENE + EXISTING RED MOON */}
      <ExperienceScene />

      {/* ITACHI SILHOUETTE + SHARINGAN + CROWS */}
      <ExperienceAtmosphere />

      <div className="experience-overlay" />

      <section className="experience-hero">
        <div className="experience-copy">
          <p className="japanese experience-kana">
            月読
          </p>

          <h1>TSUKUYOMI</h1>

          <p>ENTER THE NIGHT</p>
        </div>

        <div className="experience-scroll">
          <span className="scroll-line" />

          <span>
            SCROLL TO DESCEND
          </span>

          <span className="scroll-arrow">
            ↓
          </span>
        </div>
      </section>

      <section className="experience-section">
        <p className="japanese">
          第一章
        </p>

        <h2>
          BEFORE THE
          <br />
          NIGHT
        </h2>

        <p>
          Before the mask, before the crows,
          before the night that changed everything.
        </p>
      </section>

      <section className="experience-section">
        <p className="japanese">
          第二章
        </p>

        <h2>
          THE UCHIHA
        </h2>

        <p>
          A clan defined by power, emotion,
          loyalty and conflict.
        </p>
      </section>

      <section className="experience-section">
        <p className="japanese">
          第三章
        </p>

        <h2>
          THE TRUTH
        </h2>

        <p>
          Some truths are carried alone.
        </p>
      </section>
    </main>
  );
}