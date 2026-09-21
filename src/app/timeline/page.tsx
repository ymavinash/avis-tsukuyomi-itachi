"use client";

import Navigation from "@/src/components/navigation/Navigation";
import TimelineExperience from "@/src/components/sections/TimelineExperience";

export default function TimelinePage() {
  return (
    <main className="timeline-page">
      <Navigation />

      <TimelineExperience />
    </main>
  );
}