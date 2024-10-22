import React from 'react'
import "./About.css";

export const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src="" alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src="/img/ram.JPG " alt="" />
            </div>
            <div className='about-right'>
              <div className="about-para">
              <p>I'm a web developer pursuing B.Tech at IIIT Basar with a passion for solving real-world problems through technology.</p>
              <p>As an aspiring full-stack developer, I am constantly learning and honing my skills in Java, PHP, and data structures. Beyond coding, I love contributing to tech communities through platforms like LeetCode and GeeksforGeeks, where I focus on improving problem-solving abilities.

</p>
                </div>  
                <div className='about-skills'>
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p> <hr style={{width:"50%"}}/></div>
    

                </div>

            </div>
        </div>
        <div className="about-achievements">
    <div className="about-achievement">
        <h1>3+</h1>
        <p>Internships Completed</p>
    </div>
    <hr />
    <div className="about-achievement">
        <h1>20+</h1>
        <p>Academic Projects</p>
    </div>
    <hr />
    <div className="about-achievement">
        <h1>5+</h1>
        <p>Coding Competitions Participated</p>
    </div>
    <hr />
    <div className="about-achievement">
        <h1>Class Representative</h1>
        <p>Leadership Roles</p>
    </div>
</div>

        
        
        
        

    </div>
  )
}
