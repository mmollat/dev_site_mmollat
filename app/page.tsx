import Image from "next/image";

const features = [
  {
    title: "Premium Components",
    text: "We use only top quality blanks and components from trusted brands.",
    icon: "◎",
  },
  {
    title: "Expert Craftsmanship",
    text: "Every rod is meticulously built by hand with attention to every detail.",
    icon: "⌕",
  },
  {
    title: "Built For Performance",
    text: "Designed to handle the toughest conditions and the biggest fish.",
    icon: "▸",
  },
  {
    title: "Built In The USA",
    text: "Proudly built in the USA for anglers who demand the best.",
    icon: "▦",
  },
];

const cards = [
  {
    title: "Custom Rods",
    text: "Explore our lineup of custom rods built for any species and technique.",
    button: "View Rods",
    image: "/images/rod-closeup-02.png",
  },
  {
    title: "The Build Process",
    text: "Every detail matters. See how your custom rod comes to life.",
    button: "Learn More",
    image: "/images/build-process-01.png",
  },
  {
    title: "Gallery",
    text: "See our rods in action and the craftsmanship behind every build.",
    button: "View Gallery",
    image: "/images/angler-lifestyle.png",
  },
  {
    title: "About Ibarra",
    text: "Built on passion, precision, and a love for fishing. Learn our story.",
    button: "Our Story",
    image: "/images/butt-cap-detail.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="absolute left-0 right-0 top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Image
            src="/images/ibarra-logo.png"
            alt="Ibarra Custom Rods"
            width={230}
            height={80}
            priority
            className="h-auto w-44 md:w-56"
          />

          <nav className="hidden items-center gap-9 text-xs font-bold uppercase tracking-[0.22em] text-white/80 lg:flex">
            <a className="text-[#c99743]" href="#">
              Home
            </a>
            <a href="#rods">Rods</a>
            <a href="#process">Build Process</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden border border-[#c99743] px-6 py-3 text-sm font-black uppercase tracking-[0.22em] text-[#c99743] transition hover:bg-[#c99743] hover:text-black md:inline-flex"
          >
            Build Your Rod
          </a>
        </div>
      </header>

      <section className="relative min-h-[640px] overflow-hidden pt-28">
        <Image
          src="/images/hero-banner.png"
          alt="Custom fishing rod on the ocean"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6">
          <div className="max-w-xl">
            <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-wide text-white md:text-7xl">
              Built by hand.
              <br />
              Fished with passion.
            </h1>

            <div className="mt-7 h-[2px] w-16 bg-[#c99743]" />

            <p className="mt-7 max-w-md text-xl leading-8 text-white/80">
              Custom fishing rods built for performance, crafted to last a
              lifetime.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex bg-[#c99743] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#d9ad5a]"
            >
              Build Your Rod
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="border-white/10 px-8 py-10 text-center md:border-r last:md:border-r-0"
            >
              <div className="mb-4 text-4xl text-[#c99743]">{item.icon}</div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em]">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="rods"
        className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-4"
      >
        {cards.map((card) => (
          <article
            key={card.title}
            className="relative min-h-[300px] overflow-hidden border-white/10 lg:border-r last:lg:border-r-0"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

            <div className="relative z-10 flex min-h-[300px] flex-col justify-center px-8 py-10">
              <h2 className="text-2xl font-black uppercase tracking-wide">
                {card.title}
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
                {card.text}
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex w-fit border border-[#c99743] px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#c99743] hover:text-black"
              >
                {card.button}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-[#070707] px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="text-7xl font-black leading-none text-[#c99743]">
            “
          </div>
          <p className="text-xl italic leading-8 text-white/75 md:text-2xl">
            I don’t just build rods, I build tools you can rely on when it
            matters most. My goal is simple — build the best possible rod for
            serious anglers.
          </p>
          <span className="whitespace-nowrap text-sm font-black uppercase tracking-[0.25em] text-[#c99743]">
            — Ibarra Custom Rods
          </span>
        </div>
      </section>
    </main>
  );
}
