const categories = [
  {
    title: "Bay & Inshore",
    text: "Balanced builds designed for versatility, sensitivity, and everyday use.",
    image: "/images/bay-shore.jpg",
  },
  {
    title: "Offshore",
    text: "Built for power, durability, and confidence under heavy load.",
    image: "/images/offshore.PNG",
  },
  {
    title: "Technique Specific",
    text: "Dialed around specialized methods and personal fishing style.",
    image: "/images/technique-specific.png",
  },
  {
    title: "Fully Custom",
    text: "Your vision brought to life with complete customization.",
    image: "/images/fully-custom.png",
  },
];

const whyCards = [
  {
    title: "Blank Selection",
    image: "/images/bay-shore.jpg",
  },
  {
    title: "Guide Layout",
    image: "/images/rod-closeup-01.png",
  },
  {
    title: "Thread & Finish",
    image: "/images/thread-detail.png",
  },
  {
    title: "Built To Fish",
    image: "/images/ready-to-build.png",
  },
];

export default function RodsPage() {
  return (
    <main className="rodsPage">
      <section className="rodsHero">
        <img
          src="/images/rods-hero-banner.png"
          alt="Custom rods built around how you fish"
          className="rodsHeroBanner"
        />
      </section>

      <section className="rodsCategories">
        {categories.map((item) => (
          <article key={item.title} className="rodCategory">
            <div
              className="rodCategoryImage"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            <div className="rodCategoryContent">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="rodsWhy">
  <h2>What Makes An Ibarra Rod Different</h2>

  <div className="whyGrid whyImages">

    <div
      className="whyImageCard"
      style={{
        backgroundImage:
          "url('/images/premium-component.png')",
      }}
    >
      <span>Blank Selection</span>
    </div>

    <div
      className="whyImageCard"
      style={{
        backgroundImage:
          "url('/images/expert-craftsmanship.png')",
      }}
    >
      <span>Guide Layout</span>
    </div>

    <div
      className="whyImageCard"
      style={{
        backgroundImage:
          "url('/images/thread.png')",
      }}
    >
      <span>Thread & Finish</span>
    </div>

    <div
      className="whyImageCard"
      style={{
        backgroundImage:
          "url('/images/built-for-performance.png')",
      }}
    >
      <span>Built To Fish</span>
    </div>

  </div>
</section>

      <section className="rodsOptionsPanel" />

      <section className="rodsCtaPanel" />
    </main>
  );
}
