import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-top">
    <div className="footer-top-left">
        <img src="/img/footer.png" alt="" />
        <p>"I specialize in both frontend and backend development, ready to take on projects that require building user-friendly interfaces or creating robust backend systems. If you need help or have any questions, feel free to reach out. I'm always excited to collaborate and bring ideas to life!"

        </p>
        <div className="footer-top-right">
          <div className="footer-email-input">
             <img src="/img/user.png" alt="" />
             <input type="email" name="" id="" placeholder='Enter Your Email'/>
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>
    <hr />
    <div className="footer-bottom">
    <div className="footer-bottom-left">
       @2024 Ramsingh .  All Rights Reserved 
    </div>
    <div className="footer-bottom-right">
      <p>Term Of Services</p>
      <p>Privacy Policy</p>
        <p>Connect With Me  </p>
      
    </div>
    </div>

</div>

 
    </div>
  )
}
export default Footer;