import React from 'react';
import facebookIcon from '../images/facebook-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import emailicon from '../images/email-icon.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-buttons">

        <div className="social-media-icons">
          <a href="https://www.facebook.com/addison.butler.14/about" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/solomon-butler-63aa20210/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/mister_butler_/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="mailto:solomonbutler13sb@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={emailicon} alt="email" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;