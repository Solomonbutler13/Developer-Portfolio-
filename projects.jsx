import React from 'react';
import Footer from '../components/Footer';
import CalculatorPic from '../images/calculator-screenshot.png'
import MemoryPic from '../images/memory-screenshot.png'
import InteractiveArt from '../images/interactive-art.png'
// import "../projects.css"
function Projects() {
  return (
    <div className="projects">
      <div className="content">
        <h2>Projects</h2>
        <div className="project-container">
          <div className="project">
            <h3>Calculator Project</h3>
            <a href="https://solomonbutler13.github.io/Nebula-Calc-Project/" target="_blank" rel="noopener noreferrer">
              <img src={CalculatorPic} className='calculator' alt="Calculator Project" />

            </a>
            <p>Description: This is a simple calculator project built using HTML, CSS, and JavaScript.</p>
            <p>Click the image to try it out!</p>
          </div>
          <div className="project">
            <h3>Memory Project Game Project</h3>
            <a href="https://solomonbutler13.github.io/solomons-MacBook-Pro-Nebula-Game-Project/" target="_blank" rel="noopener noreferrer">
              <img src={MemoryPic} className='Memory' alt="Memory Game Project" />
            </a>
            <p>Description: This is a classic Memory card game built using HTML, CSS, and JavaScript.</p>
            <p>Click the image to play!</p>
          </div>

          <div className="project">
            <h3>Interactive Art Practice Project</h3>
            <a href="http://127.0.0.1:5501/index.html" target="_blank" rel="noopener noreferrer">
              <img src={InteractiveArt} className='InteractiveArt' alt="Interactive Art Project" />
            </a>
            <p>Description: This is a exercise project utilizing the functions of canvas as well as HTML, CSS, and JavaScript.</p>
            <p>Click the image to play!</p>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;