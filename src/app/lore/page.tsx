"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import Navigation from "@/src/components/navigation/Navigation";
import { lore } from "@/src/data/lore";

export default function LorePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".lore-header", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".lore-card", {
        opacity: 0,
        y: 45,
        duration: 1,
        stagger: 0.12,
        delay: 0.25,
        ease: "power3.out",
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={pageRef} className="content-page">
      <Navigation />

      <section className="lore-container">
        <header className="lore-header">
          <p className="japanese">物語</p>

          <h1>LORE</h1>

          <span>
            PEOPLE • PLACES • ORGANIZATIONS
          </span>
        </header>

        <div className="lore-grid">
          {lore.map((entry) => (
            <article
              key={entry.name}
              className="lore-card"
            >
              <span>{entry.category}</span>

              <p className="japanese">
                {entry.japanese}
              </p>

              <h2>{entry.name}</h2>

              <p>{entry.description}</p>

              <div className="lore-line" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}