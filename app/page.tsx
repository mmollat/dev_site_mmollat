import Image from "next/image";

const features = [
  [
    "/images/premium-components.png",
    "Premium Components",
    "We use only top quality blanks and components from trusted brands.",
  ],
  [
    "/images/expert-craftsmanship.png",
    "Expert Craftsmanship",
    "Every rod is meticulously built by hand with attention to every detail.",
  ],
  [
    "/images/built-for-performance.png",
    "Built For Performance",
    "Designed to handle the toughest conditions and the biggest fish.",
  ],
  [
    "/images/built-in-usa.png",
    "Built In The USA",
    "Proudly built in the USA for anglers who demand the best.",
  ],
];

const cards = [
  [
    "Custom Rods",
    "Explore our lineup of custom rods built for any species and technique.",
    "View Rods",
    "/images/rod-closeup-02.png",
    "#",
  ],
  [
    "The Build Process",
    "Every detail matters. See how your custom rod comes to life.",
    "Learn More",
    "/images/build-process-01.png",
    "#",
  ],
  [
    "Gallery",
    "See our rods in action and the craftsmanship behind every build.",
    "View Gallery",
    "/images/angler-lifestyle.png",
    "#",
  ],
  [
    "About Ibarra",
    "Built on passion, precision, and a love for fishing. Learn our story.",
    "Our Story",
    "/images/butt-cap-detail.png",
    "/about",
  ],
];

export default function Home() {
  return (
    <main className="site">
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
          <a className="active" href="/">
            Home
          </a>

          <a href="#rods">Rods</a>

          <a href="#process">Build Process</a>

          <a href="#gallery">Gallery</a>

          <a href="/about">About</a>

          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="outlineBtn">
          Build Your Rod
        </a>
      </header>

      <section className="hero">
        <div className="heroOverlay" />

        <div className="heroContent">
          <h1>
            Built by hand.
            <br />
            Fished with passion.
          </h1>

          <div className="goldLine" />

          <p>
            Custom fishing rods built for performance, crafted to last a
            lifetime.
          </p>

          <a href="#contact" className="goldBtn">
            Build Your Rod
          </a>
        </div>
      </section>

      <section className="features">
        {features.map(([icon, title, text]) => (
          <div className="feature" key={title}>
            <Image
              src={icon}
              alt={title}
              width={52}
              height={52}
              className="featureIcon"
            />

            <h3>{title}</h3>

            <p>{text}</p>
          </div>
        ))}
      </section>

      <section className="cards" id="rods">
        {cards.map(([title, text, button, image, link]) => (
          <article
            className="card"
            key={title}
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="cardOverlay" />

            <div className="cardContent">
              <h2>{title}</h2>

              <p>{text}</p>

              <a href={link}>{button}</a>
            </div>
          </article>
        ))}
      </section>

      <section className="quote">
        <span>“</span>

        <p>
          I don’t just build rods, I build tools you can rely on when it
          matters most. My goal is simple — build the best possible rod for
          serious anglers.
        </p>

        <strong>— Ibarra Custom Rods</strong>
      </section>
    </main>
  );
}
