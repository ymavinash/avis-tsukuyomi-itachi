import type { Metadata } from "next";
import "./globals.css";

import BackgroundMusic from "../components/audio/BackgroundMusic";

export const metadata: Metadata = {
  title: "月読 — Tsukuyomi",
  description:
    "An interactive cinematic experience inspired by Uchiha Itachi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundMusic />

        {children}
      </body>
    </html>
  );
}