"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import Navigation from "@/src/components/navigation/Navigation";

const panels = [
  {
    number: "01",
    title: "THE EYE",
    japanese: "写輪眼",
  },
  {
    number: "02",
    title: "THE NIGHT",
    japanese: "夜",
  },
  {
    number: "03",
    title: "THE CROW",
    japanese: "烏",
  },
  {
    number: "04",
    title: "THE MOON",
    japanese: "月",
  },
  {
    number: "05",
    title: "THE TRUTH",
    japanese: "真実",
  },
];

export default function GalleryPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".gallery-title", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".gallery-panel", {
        opacity: 0,
        scale: 0.94,
        duration: 1,
        stagger: 0.12,
        delay: 0.25,
        ease: "power3.out",
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={pageRef} className="gallery-page">
      <Navigation />

      <header className="gallery-title">
        <p className="japanese">記憶</p>

        <h1>GALLERY</h1>

        <span>
          FRAGMENTS OF A LIFE
        </span>
      </header>

      <section className="gallery-track">
        {panels.map((panel) => (
          <article
            key={panel.number}
            className="gallery-panel"
          >
            <div className="gallery-panel-inner">
              <span className="gallery-number">
                {panel.number}
              </span>

              <p className="japanese">
                {panel.japanese}
              </p>

              <h2>{panel.title}</h2>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}