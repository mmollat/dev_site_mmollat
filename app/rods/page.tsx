/* RODS PAGE */

.rodsPage {
  background: #050505;
}

.rodsHero {
  padding-top: 105px;
  background: #050505;
}

.rodsHeroBanner {
  display: block;
  width: 100%;
  height: auto;
}

.rodsCategories {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  background: #0b0b0b;
}

.rodCategory {
  border-right: 1px solid rgba(255,255,255,.12);
}

.rodCategory:last-child {
  border-right: none;
}

.rodCategoryImage {
  min-height: 300px;
  background-size: cover;
  background-position: center;
}

.rodCategoryContent {
  padding: 36px;
}

.rodCategoryContent h2 {
  margin: 0 0 14px;
  font-family: Oswald;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.rodCategoryContent p {
  color: rgba(255,255,255,.68);
  line-height: 1.6;
}

.rodsWhy {
  padding: 90px 70px;
  background: #070707;
  text-align: center;
}

.rodsWhy h2 {
  font-family: Oswald;
  font-size: 54px;
  margin-bottom: 48px;
  text-transform: uppercase;
}

.whyGrid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 18px;
}

.whyCard {
  padding: 36px 24px;
  border: 1px solid rgba(201,151,67,.35);
  color: #c99743;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .14em;
}

.rodsOptionsPanel {
  min-height: 520px;
  background-image: url("/images/rods-options.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.rodsCtaPanel {
  min-height: 420px;
  background-image: url("/images/rods-cta.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width:900px) {
  .rodsHero {
    padding-top: 0;
  }

  .rodsCategories,
  .whyGrid {
    grid-template-columns: 1fr;
  }

  .rodCategory {
    border-right: none;
  }

  .rodsWhy {
    padding: 60px 24px;
  }

  .rodsWhy h2 {
    font-size: 38px;
  }

  .rodsOptionsPanel {
    min-height: 360px;
    background-size: cover;
  }

  .rodsCtaPanel {
    min-height: 300px;
    background-size: cover;
  }
}
