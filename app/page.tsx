import Image from "next/image";

const features = [
  ["◎", "Premium Components", "We use only top quality blanks and components from trusted brands."],
  ["⌕", "Expert Craftsmanship", "Every rod is meticulously built by hand with attention to every detail."],
  ["▸", "Built For Performance", "Designed to handle the toughest conditions and the biggest fish."],
  ["▦", "Built In The USA", "Proudly built in the USA for anglers who demand the best."],
];

const cards = [
  ["Custom Rods", "Explore our lineup of custom rods built for any species and technique.", "View Rods", "/images/rod-closeup-02.png"],
  ["The Build Process", "Every detail matters. See how your custom rod comes to life.", "Learn More", "/images/build-process-01.png"],
  ["Gallery", "See our rods in action and the craftsmanship behind every build.", "View Gallery", "/images/angler-lifestyle.png"],
  ["About Ibarra", "Built on passion, precision, and a love for fishing. Learn our story.", "Our Story", "/images/butt-cap-detail.png"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="absolute left-0 right-0 top-0 z-30 border-b border-white/10 bg-black/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Image src="/images/ibarra-logo.png" alt="Ibarra Custom Rods" width={240} height={90} priority />

          <nav className="hidden gap-9 text-xs font-bold uppercase tracking-[0.22em] text-white/80 lg:flex">
            <a className="border-b border-[#c99743] pb-2 text-[#c99743]" href="#">Home</a>
            <a href="#rods">Rods</a>
            <a href="#process">Build Process</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="hidden border border-[#c99743] px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-[#c99743] md:block" href="#contact">
            Build Your Rod
          </a>
        </div>
      </header>

      <section
        className="relative flex min-h-[620px] items-center bg-cover bg-center px-8 pt-24"
        style={{ backgroundImage: "url('/images/hero-banner.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <h1 className="max-w-2xl text-5xl font-black uppercase leading-[1.05] tracking-wide md:text-7xl">
            Built by hand.
            <br />
            Fished with passion.
          </h1>

          <div className="mt-7 h-[2px] w-16 bg-[#c99743]" />

          <p className="mt-7 max-w-md text-xl leading-8 text-white/80">
            Custom fishing rods built for performance, crafted to last a lifetime.
          </p>

          <a className="mt-8 inline-block bg-[#c99743] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black" href="#contact">
            Build Your Rod
          </a>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-4">
          {features.map(([icon, title, text]) => (
            <div key={title} className="border-white/10 px-8 py-8 text-center md:border-r last:md:border-r-0">
              <div className="mb-3 text-4xl text-[#c99743]">{icon}</div>
              <h3 className="text-sm font-black uppercase tracking-[0.16em]">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="rods" className="grid grid-cols-1 lg:grid-cols-4">
        {cards.map(([title, text, button, image]) => (
          <article
            key={title}
            className="relative flex min-h-[250px] items-center overflow-hidden border-b border-white/10 bg-cover bg-center px-8 py-10 lg:border-r"
            style={{ backgroundImage: `url('${image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
            <div className="relative z-10">
              <h2 className="text-2xl font-black uppercase tracking-wide">{title}</h2>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">{text}</p>
              <a className="mt-7 inline-block border border-[#c99743] px-6 py-3 text-xs font-black uppercase tracking-[0.18em]" href="#contact">
                {button}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-[#070707] px-8 py-10">
        <div className="mx-auto flex max-w-5xl items-center gap-6 text-center">
          <div className="text-7xl font-black text-[#c99743]">“</div>
          <p className="text-xl italic leading-8 text-white/70">
            I don’t just build rods, I build tools you can rely on when it matters most.
            My goal is simple — build the best possible rod for serious anglers.
          </p>
          <span className="hidden text-sm font-black uppercase tracking-[0.25em] text-[#c99743] md:block">
            — Ibarra Custom Rods
          </span>
        </div>
      </section>
    </main>
  );
}
