import Image from "next/image";

export default function Navbar() {
  return (
    <header className="nav">
      <a href="/">
        <Image
          src="/images/ibarra-logo.png"
          alt="Ibarra Custom Rods"
          width={250}
          height={90}
          priority
        />
      </a>

      <nav>
        <a href="/">Home</a>

        <a href="/#rods">Rods</a>

        <a href="/#process">Build Process</a>

        <a href="/#gallery">Gallery</a>

        <a href="/about">About</a>

        <a href="/#contact">Contact</a>
      </nav>

      <a href="/#contact" className="outlineBtn">
        Build Your Rod
      </a>
    </header>
  );
}
