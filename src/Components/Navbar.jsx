import data from "../data/portfolioData";

function Navbar() {
  return (
    <nav className="nav">
      <h2>{data.name}</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        
      </div>
    </nav>
  );
}

export default Navbar;