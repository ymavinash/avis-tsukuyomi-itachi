"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "BEGIN",
  },
  {
    href: "/experience",
    label: "EXPERIENCE",
  },
  {
    href: "/timeline",
    label: "TIMELINE",
  },
  {
    href: "/lore",
    label: "LORE",
  },
  {
    href: "/gallery",
    label: "GALLERY",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="site-navigation">
      <Link href="/" className="nav-mark">
        月読
      </Link>

      <div className="nav-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${
              pathname === link.href ? "active" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}