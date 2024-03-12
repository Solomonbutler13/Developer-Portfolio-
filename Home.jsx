import React from 'react';
import Footer from '../components/Footer';
import profilePicture from '../images/mainpic.png';


function Home() {

  // Define your skills array
  const skills = [
    "JavaScript",
    "ReactJS",
    "HTML/CSS",
    // Add more skills as needed
  ];

  const activities = [
    "Software Engineer",
    "Disc Jockey",
    "Music Producer"
  ];

  return (
    <div className="home">
      <div className="container">
        <h2>Waaazzzzuuuppp</h2>
        <img src={profilePicture} className='profile-Picture' alt="Profile" />
        <p>its Solomon Butler your favorite .</p>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

        </div>
      </div>
      <Footer />
    </div> // Corrected closing parenthesis position
  );
}

export default Home;
