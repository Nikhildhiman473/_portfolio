import data from "../data/portfolioData";

function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact Me</h2>

      <p className="about-text">
        I'm open to internships, freelance work and full-time opportunities.
        Feel free to connect with me.
      </p>

      <div className="contact-box">
        <a href="mailto:channanikhil1@gmail.com" className="contact-btn">
          Gmail
        </a>

        <a
          href={data.linkedin}
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          LinkedIn
        </a>

        <a
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;