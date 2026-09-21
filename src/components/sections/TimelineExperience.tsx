"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import EmberCursor from "../effects/EmberCursor";

const events = [
  {
    year: "005",
    title: "THE PRODIGY",
    japanese: "天才",
    text:
      "A child who begins to understand the reality of the shinobi world long before most around him.",
  },
  {
    year: "007",
    title: "THE ACADEMY",
    japanese: "忍",
    text:
      "His abilities develop rapidly, but so does his awareness of the consequences of conflict.",
  },
  {
    year: "010",
    title: "ANBU",
    japanese: "暗部",
    text:
      "Duty places him inside the village's most secretive operations.",
  },
  {
    year: "—",
    title: "SHISUI",
    japanese: "友",
    text:
      "A friendship that profoundly shapes the way Itachi sees responsibility.",
  },
  {
    year: "—",
    title: "THE UCHIHA",
    japanese: "一族",
    text:
      "The conflict surrounding his clan becomes impossible to ignore.",
  },
  {
    year: "—",
    title: "AKATSUKI",
    japanese: "暁",
    text:
      "Itachi disappears into the shadows and becomes associated with the Akatsuki.",
  },
  {
    year: "—",
    title: "SASUKE",
    japanese: "弟",
    text:
      "Every decision ultimately leads back to his younger brother.",
  },
];

export default function TimelineExperience() {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".timeline-event", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="timeline-experience"
    >
      <EmberCursor />

      <div className="timeline-atmosphere" />

      <header className="timeline-intro">
        <p className="japanese">
          軌跡
        </p>

        <h1>
          THE
          <br />
          TIMELINE
        </h1>

        <span>
          A LIFE MEASURED IN CHOICES
        </span>
      </header>

      <div className="timeline-events">
        {events.map((event, index) => (
          <article
            key={event.title}
            className="timeline-event"
          >
            <div className="timeline-event-year">
              {event.year}
            </div>

            <div className="timeline-event-line">
              <span />
            </div>

            <div className="timeline-event-content">
              <p className="japanese">
                {event.japanese}
              </p>

              <h2>
                {event.title}
              </h2>

              <p>
                {event.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}