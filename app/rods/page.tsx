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

const reasons = [
  "Blank Selection",
  "Guide Layout",
  "Thread & Finish",
  "Built To Fish",
];

const options = [
  "Rod Type",
  "Length",
  "Power",
  "Action",
  "Grip Style",
  "Thread Colors",
  "Personalization",
  "Target Species",
];

export default function RodsPage() {
  return (
    <main className="rodsPage">
      <section className="rodsHero" />

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

        <div className="whyGrid">
          {reasons.map((item) => (
            <div key={item} className="whyCard">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="buildOptions">
        <div>
          <span>Build Choices</span>
          <h2>Customize Every Detail</h2>
        </div>

        <div className="optionsGrid">
          {options.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="rodsCTA">
        <h2>
          Ready To Build
          <br />
          Your Rod?
        </h2>

        <a href="/#contact">Start Your Build</a>
      </section>
    </main>
  );
}
