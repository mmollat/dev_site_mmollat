import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="aboutPage">
      <section className="aboutHero">
        <div className="aboutOverlay" />

        <div className="aboutContent">
          <p className="eyebrow">About Ibarra Custom Rods</p>

          <h1>Built with purpose. Finished with pride.</h1>

          <p>
            Ibarra Custom Rods builds handcrafted custom fishing rods designed
            for anglers who want performance, durability, and a personal touch
            in every build.
          </p>
        </div>
      </section>

      <section className="aboutBody">
        <div className="aboutText">
          <h2>Handcrafted for serious anglers.</h2>

          <p>
            Every rod is built with attention to detail, from blank selection
            and guide layout to wrapping, finish, and overall balance.
          </p>

          <p>
            Whether you are fishing the bay, trolling offshore, or building a
            setup for a specific technique, our goal is to create a rod that
            looks great and performs on the water.
          </p>

          <p>
            We take pride in quality craftsmanship, clean design, and building
            rods that are made to be fished hard.
          </p>
        </div>

        <div className="aboutImage">
          <Image
            src="/images/build-process-01.png"
            alt="Ibarra Custom Rods build process"
            fill
            className="aboutImg"
          />
        </div>
      </section>
    </main>
  );
}
