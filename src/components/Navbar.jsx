import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Navbar = () => {

  const[menu,setMenu]=useState("home")
  return (
    <div id='services' className='navbar'>
        <img src="/img/myport.jpg" alt="logo" />
        <img src="/img/  " alt="" />
        <ul className='nav-menu'>
            <li> <AnchorLink className='anchor-link' offset={50} href='#home '> <p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==='home'?<img src='/img/underline.png '/>:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==='about'?<img src='/img/underline.png '/>:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==='services'?<img src='/img/underline.png '/>:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==='portfolio'?<img src='/img/underline.png '/>:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==='contact'?<img src='/img/underline.png '/>:<></>}</li>

        </ul>
        <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink> </div>



    </div>
  )
}
export default Navbar;
