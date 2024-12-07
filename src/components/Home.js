import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };
  return (
    // <div class="wave-container">
    //   <div class="wave-text"><div class="bou">B</div>OUYAHYAOUI<div class="wave-fname">MOURAD </div></div>
    //   <p class="description">Passionate about technology, 
    //   <br/>I’m seeking an internship where I can contribute to innovative projects 
    //   <br/>while continuing to grow my skills in web development and AI</p>
    //   <div class="home-showProjects"><button class="showProjects-btn" onClick={handleClick}>Show Projects</button></div>
    // </div>
    <div class="wave-container">
      <div class="wave-text"><div class="bou">B</div>OUYAHYAOUI<div class="wave-fname">MOURAD </div></div>
      <p class="description">
        Passionate about technology, 
        <br />I’m seeking an internship where I can contribute to innovative projects 
        <br />while continuing to grow my skills in web development and AI
      </p>
      <div class="home-showProjects">
        <button class="showProjects-btn" onClick={handleClick}>Show Projects</button>
      </div>
    </div>

  );
}

export default Home;
