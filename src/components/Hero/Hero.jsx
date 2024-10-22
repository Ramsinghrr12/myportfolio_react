import React from 'react'
import "./Hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';


export const Hero = () => {
  return (
    <div  id='home' className='hero'>
        <img src="/img/ram.JPG " alt="profile" />
<h1> <span>I'm Ramsingh</span> Fullstack Developer</h1>
         <p> Currently Pursuing B.Tech in Rgukt Basar</p>
         <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
         </div>
    </div>
  )
}
