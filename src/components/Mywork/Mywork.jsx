// Mywork.jsx
import React from 'react';
import './Mywork.css';
import myworkData from '../../assets/myworkData'; // Ensure the path is correct

export const Mywork = () => {
  return (
    <div  id='work'className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        {/* If you have a specific image for the title, add its src here */}
        <img src="" alt="" />
      </div>
      <div className="mywork-container">
        {myworkData.map((work, index) => {
          return (
            <div key={index} className="work-item">
              <img src={work.icon} alt={work.title} />
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          );
        })}
      </div>
      <div className='mywork-showmore'>
        <p>Show More</p>
        <img src="/img/show.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Mywork; 
