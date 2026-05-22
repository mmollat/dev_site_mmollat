import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Consultation",
    text:
      "Every build starts with understanding how and where the rod will be used. Target species, technique, action, balance, and overall feel guide the entire process.",
    image: "/images/angler-lifestyle.png",
  },

  {
    number: "02",
    title: "Blank & Component Selection",
    text:
      "The blank, guides, reel seat, grips, and hardware are selected to match performance goals and long-term durability.",
    image: "/images/rod-closeup-01.png",
  },

  {
    number: "03",
    title: "Thread Work & Details",
    text:
      "Thread wraps are applied by hand with careful attention to symmetry, spacing, color, and finish. Every detail contributes to both performance and presentation.",
    image: "/images/thread.png",
  },

  {
    number: "04",
    title: "Finish & Final Inspection",
    text:
      "The final finish is applied and cured properly before alignment, balance, and overall craftsmanship are inspected.",
    image: "/images/butt-cap-detail.png",
  },
];

export default function BuildProcessPage() {
  return (
    <main className="buildPage">
      <section className="buildHero">
        <div className="buildHeroOverlay" />

        <div className="buildHeroContent">
          <p className="buildEyebrow">
            Handcrafted Process
          </p>

          <h1>
            Every detail matters.
            <br />
            Every build tells a story.
          </h1>

          <p>
            From blank selection to final finish, each rod is built by hand
            with a focus on performance, durability, and craftsmanship.
          </p>
        </div>
      </section>

      <section className="buildSteps">
        {steps.map((step, index) => (
          <section
            key={step.number}
            className={`buildRow ${
              index % 2 === 1 ? "reverse" : ""
            }`}
          >
            <div className="buildText">
              <span>{step.number}</span>

              <h2>{step.title}</h2>

              <p>{step.text}</p>
            </div>

            <div className="buildImage">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="buildImg"
              />
            </div>
          </section>
        ))}
      </section>

      <section className="buildCTA">
        <h2>Ready to build your rod?</h2>

        <p>
          Designed around how you fish.
          Built to perform where it matters.
        </p>

        <a href="/#contact">
          Start Your Build
        </a>
      </section>
    </main>
  );
}
