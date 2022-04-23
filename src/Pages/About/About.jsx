import React from 'react'
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaDocker } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Porfolio1 from "../../images/memory-game.png";
import Porfolio2 from "../../images/movie_app.png";
import Porfolio3 from "../../images/portfolioRS.png";
import "./about.scss"

export default function Aabout() {
  return (
   <section className='about'>
     <div className="container">
       <div className="about__intro">
          <h1>Hi i'm Max!</h1>
          <p>I am a beginner front-end developer. I work well in the company. I study new technologies with great interest. Always open to new things.
          </p>
       </div>
       <div className="about__skills">
           <h3>
              My Skills
           </h3>
          <ul>
            <li>
              <FaHtml5 />
              HTML
          </li>
             
            <li>
              <FaCss3Alt />
              CSS
            </li>
            <li>
              <SiJavascript />
              JavaScript
            </li>
            <li>
              <FaSass />
              Sass
            </li>
            <li>
              <FaReact />
              React
            </li>
            <li>
              <FaDocker />
              Docker
            </li>
          </ul>
        </div>
        <div className="about__portfolio">
          <h3>Latest Works</h3>
          <ul>
            <li>
              <img src={Porfolio1} alt="" />
              <h4>memory-game</h4>
            </li>
            <li>
              <img src={Porfolio2} alt="" />
              <h4>movie_app</h4>
            </li>
            <li>
              <img src={Porfolio3} alt="" />
              <h4>portfolio</h4>
            </li>
          </ul>
        </div>
       
     </div>
        
   </section>
  )
}

