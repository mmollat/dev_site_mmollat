"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <Link href="/">
        <Image
          src="/images/ibarra-logo.png"
          alt="Ibarra Custom Rods"
          width={250}
          height={90}
          priority
        />
      </Link>

      <nav>
        <Link
          href="/"
          className={pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          href="/rods"
          className={pathname === "/rods" ? "active" : ""}
        >
          Rods
        </Link>

        <Link
          href="/build-process"
          className={pathname === "/build-process" ? "active" : ""}
        >
          Build Process
        </Link>

        <Link
          href="/gallery"
          className={pathname === "/gallery" ? "active" : ""}
        >
          Gallery
        </Link>

        <Link
          href="/about"
          className={pathname === "/about" ? "active" : ""}
        >
          About
        </Link>

        <Link href="/#contact">
          Contact
        </Link>
      </nav>

      <Link
        href="/#contact"
        className="outlineBtn"
      >
        Build Your Rod
      </Link>
    </header>
  );
}
