"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function BackgroundMusic() {
  const pathname = usePathname();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    // First page should have NO background music.
    if (pathname === "/") {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      startedRef.current = false;
      return;
    }

    // Create the audio only once.
    if (!audioRef.current) {
      const audio = new Audio("/audio/experience.mp3");

      audio.loop = true;
      audio.volume = 0.35;
      audio.preload = "auto";

      audioRef.current = audio;
    }

    const audio = audioRef.current;

    const startMusic = () => {
      if (pathname === "/") return;

      audio.play().then(() => {
        startedRef.current = true;
      }).catch(() => {
        // Browser may block playback until another user interaction.
      });
    };

    // Start when entering the first internal page.
    startMusic();

    // Fallback for browser autoplay restrictions.
    window.addEventListener("click", startMusic, {
      once: true,
    });

    window.addEventListener("keydown", startMusic, {
      once: true,
    });

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("keydown", startMusic);
    };
  }, [pathname]);

  // Cleanup when the component itself unmounts.
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return null;
}