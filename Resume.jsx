import React from 'react';
import Footer from '../components/Footer';
import resumePDF from '../pdfs/resume.pdf';

function ResumePage() {
    return (
        <div className="resume">
            <div className="content">
                <h2>Resume </h2>
                <h3>Education</h3>
                <ul>
                    <li>Nebula Academy Software Engineering program</li>
                    <li>City College of New York</li>
                    <li>Career Technology Education (CTE) Electrical Engineering</li>
                </ul>
                <h3>Coding Skills</h3>
                <ul>
                    <li>Programming: JavaScript, HTML, CSS</li>
                    <li> ReactJS</li>
                </ul>
                <div className="resume-actions">
                    <a href={resumePDF} className="view-resume" target="_blank" rel="noopener noreferrer">View </a>
                    <div> <a href={resumePDF} download="resume.pdf" className="download-resume">Download</a></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ResumePage;