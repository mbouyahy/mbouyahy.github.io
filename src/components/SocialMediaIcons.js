import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/SocialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://github.com/mbouyahy" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <a href="https://twitter.com/mbouyahy" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/bouyahyaoui-mourad/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
