import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1>Lipiga V A</h1>
      <img src="./lipiga.jpg" alt="Profile" className="profile-image" />
      <p className="bold-text">Pre-Final Year</p>
      <div className="links-container">
        <a href="https://github.com/LipigaArunachalam" target="_blank" rel="noopener noreferrer" className="link-item">
          <img src="./github-dark.svg" alt="GitHub" className="social-icon" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/lipiga-v-a-b05566259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="link-item">
          <img src="./linkedin-dark.svg" alt="LinkedIn" className="social-icon" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Home;
