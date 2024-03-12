import React from 'react';
import Footer from '../components/Footer';
import Laptop from '../images/laptop.png';

function About() {
    // Define your skills array
    const skills = [
        "JavaScript",
        "Cascading Style Sheets",
        "HyperText Markup Language",
        "React"
    ];

    return (
        <div className="about">
            <div className="content">
                <h2>About Me</h2>
                <div className="about-me-section">
                    <p>Greetings, I'm Solomon Butler. I'm versatile and have recently committed myself to mastering coding.
                        While I currently work as an electrician, I aspire to advance my career by transitioning into software engineering.
                        Beyond coding, I'm also passionate about music production and DJing.</p>
                    <p>Feel free to connect with me on social media and share your support.</p>
                </div>
                <div className="skills-section">
                    <h3>Skills</h3>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
