import data from "../data/portfolioData";

function Hero() {
  return (
    <section className="hero" id="home">
      <p>{data.role}</p>

      <h1>{data.name}</h1>

      <p>{data.bio}</p>
    </section>
  );
}

export default Hero;