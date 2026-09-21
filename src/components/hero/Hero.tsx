"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import Sharingan from "./Sharingan";
import Navigation from "../navigation/Navigation";
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline.from(".hero-japanese", {
        opacity: 0,
        y: 25,
        duration: 1.2,
      });

      timeline.from(
        ".hero-title",
        {
          opacity: 0,
          y: 35,
          duration: 1.5,
        },
        "-=0.7"
      );

      timeline.from(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 20,
          duration: 1,
        },
        "-=0.8"
      );

      timeline.from(
        ".hero-eye",
        {
          opacity: 0,
          scale: 0.8,
          duration: 1.2,
        },
        "-=0.8"
      );

      timeline.from(
        ".hero-enter",
        {
          opacity: 0,
          y: 15,
          duration: 0.8,
        },
        "-=0.5"
      );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={heroRef} className="hero-page">
      <Navigation />

      <div className="hero-noise" />

      <div className="hero-vignette" />

      <section className="hero-content">
        <p className="hero-japanese japanese">
          うちは イタチ
        </p>

        <h1 className="hero-title">
          ITACHI
        </h1>

        <p className="hero-subtitle">
          UCHIHA
        </p>

        <div className="hero-eye">
          <Sharingan />
        </div>

        <p className="hero-enter">
          CLICK THE EYE TO ENTER
        </p>
      </section>

      <div className="hero-bottom">
        <span>月読</span>
        <span>01 / 05</span>
      </div>
    </main>
  );
}