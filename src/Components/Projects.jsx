import data from "../data/portfolioData";

function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="cards">
        {data.projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <a
              className="project-btn"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;