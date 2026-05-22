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
          <article
            key={item.title}
            className="rodCategory"
          >
            <div
              className="rodCategoryImage"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
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
      </section>

      <section className="rodsBottomPanels">

  <div>

    <div className="rodsOptionsPanel" />

    <div className="panelText">
      <h2>Customize Every Detail</h2>

      <p>
        Rod Type • Length • Power • Action • Grip Style •
        Thread Colors • Personalization • Target Species
      </p>
    </div>

  </div>

  <div>

    <div className="rodsCtaPanel" />

    <div className="panelText">
      <h2>Ready To Build Your Rod?</h2>

      <p>Start Your Build →</p>
    </div>

  </div>

</section>

    </main>
  );
}
