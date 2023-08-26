import React, { useEffect } from 'react';
import './TeamPage.css';
import img from '../images/mentor.png'
const universities = [
  'Cambridge University',
  'Harvard University',
  'University of California',
  'ETH Zurich',
  'Max Planck Institute',
  'University of Edinburgh',
  'Johns Hopkins University',
  'Yale University',
  'Columbia University',
];

const mentors = [
  { name: 'Mentor 1', university: 'Cambridge University' },
  { name: 'Mentor 2', university: 'Harvard University' },
  { name: 'Mentor 3', university: 'University of California' },
  { name: 'Mentor 4', university: 'Yale University' },
];

function TeamPage() {
  useEffect(() => {
    function createCircle() {
      let sizeW = Math.random() * 12;
      let duration = Math.random() * 3;
      let e = document.createElement('div');
      e.setAttribute('class', 'circle');
      document.body.appendChild(e);
      e.style.width = 2 + sizeW + 'px';
      e.style.left = Math.random() * window.innerWidth + 'px';
      e.style.animationDuration = 2 + duration + 's';

      setTimeout(function () {
        document.body.removeChild(e);
      }, 5000);
    }

    setInterval(function () {
      createCircle();
    }, 200);
  }, []);

  return (
    <div className="team-container">
      <div className="team-heading">
        <h1 style={{ color: 'blue' }}>Our Team</h1>
        <h3 style={{ color: 'whitesmoke' }}>
          Learn from scientists and research scholars from top institutes in the world.
        </h3>
      </div>
      <div className="universities">
        {universities.map((university, index) => (
          <div key={index} className="university-card">
            <p style={{ color: 'orange' }}>{university}</p>
          </div>
        ))}
      </div>
      <div className="mentors">
        <h1 style={{ color: 'orange' }}>Meet Our Mentors</h1>
        <div className="mentor-list">
          {mentors.map((mentor, index) => (
            <div key={index} className="mentor-profile">
              <div className="mentor-image"></div>
              <h4 style={{ color: 'white' }}>{mentor.name}</h4>
              <p style={{ color: 'pink' }}>{mentor.university}</p>
            </div>
          ))}
        </div>  
      </div>
      <div className="mentor-box" >
        <div className="mentor-image rounded-circle" style={{ width: "130px", height: "130px" }}><img src={img}></img></div>
        <h3 style={{ color: 'Pink',marginLeft:"-320px",  }}>Mentor & Advisor</h3>
        <p style={{ color: 'white', marginLeft:"350px",marginTop:"-70px"}}>
          Principal Project Scientist at IITM
        </p>
      </div>
    </div>
  );
}

export default TeamPage;
