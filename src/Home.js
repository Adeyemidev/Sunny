
import dropDown from './images/icon-arrow-down.svg'
import { Link } from 'react-router-dom';
import { useState } from "react";
import bar from "./images/menu.png";
import { Card } from './components/Card';
import { Testimonials } from './components/Testimonials';
import { Brands } from './components/Brands';
import { Footer } from './components/Footer';
import { Gridimg } from './components/Gridimg';
import { Greatdesign } from './components/Greatdesign';
export const Home =()=>{

  const [showMenu, setShowMenu] = useState(false);

    return<>
    <section className="hero">
   <nav>
      <h2>SunnySide</h2>
          <ul>
          <Link><li>About</li></Link>
            <li>Services</li>
            <li>Projects</li>
            <button className="contact">Contact</button>
            
      <img className='img-moblie' alt='hamburger' onClick={() =>
       { setShowMenu(!showMenu);
   }} src={bar}/>
          </ul></nav>
   {showMenu && <Card />}



<section className='try'>
  
   <h1 className=" creatives-title">WE ARE  CREATIVES</h1>
  <img className='dropdown' src={dropDown} alt='dropdown'/></section>
   
</section>
 
<Brands />
<Greatdesign />
<Testimonials />
<Gridimg />
<Footer /> 
    </>
}