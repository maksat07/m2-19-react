import React from 'react'
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaDocker } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Porfolio1 from "../../images/memory-game.png";
import Porfolio2 from "../../images/movie_app.png";
import Porfolio3 from "../../images/portfolioRS.png";
import "./about.scss"

export default function Aabout() {

  const h3Variants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    }

  }

  const workVariants = {
    visible: (idx) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: idx * 0.6,
      }
    }),
    hidden: {opacity: 0, x: 100,},
  }

  const works = [
    {
    id: 1,
    title: "Memory-game",
    href: 'https://rs-github-maksat07.netlify.app/',
    imgUrl: Porfolio1,
  },
    {
    id: 2,
    title: "Movie_app",
    href: 'https://maksat07-github.netlify.app/',
    imgUrl: Porfolio2,
  },
    {
    id: 3,
    title: "Portfolio",
    href: 'https://github-maksat07-rs.netlify.app/',
    imgUrl: Porfolio3,
  }
]

const skills = [
  {
    id: 1,
    svgPath: FaHtml5,
    title: "HTML",
  },
  {
    id: 2,
    svgPath: FaCss3Alt,
    title: "CSS",
  },
  {
    id: 3,
    svgPath: FaSass,
    title: "SASS",
  },
  {
    id: 4,
    svgPath: SiJavascript,
    title: "JS",
  },
  {
    id: 5,
    svgPath: FaReact,
    title: "React",
  },
  {
    id: 6,
    svgPath: FaDocker,
    title: "Docer",
  }
]

  return (
   <section className='about'>
     <div className="container">
       <div className="about__intro">
          <motion.h1 animate={{ rotate: 360 }} transition={{
            duration: 1,
            repeat: 7,
            repeatDelay: 2,
            repeatType: "reverse",
            type: "tween",
          }}>Hi i'm Max!</motion.h1>
          <p>I am a beginner front-end developer. I work well in the company. I study new technologies with great interest. Always open to new things.
          </p>
       </div>
       <div className="about__skills">
           <motion.h3
           variants={h3Variants}
           initial={"hidden"}
           animate={"visible"}
          transition= {{
            duration: 2,
          }}
          >
              My Skills
           </motion.h3>
          <ul>
            {
              skills.map((skill, id) => (
              <motion.li
                whileHover={{
                  scale: 1.25,
                  backgroundColor: "#f17922",
                }}
                key={id}
              >
                {skill.svgPath}
                {skill.title}
              </motion.li>
             ))}
          </ul>
        </div>
        <div className="about__portfolio">
          <h3>Latest Works</h3>
          <ul>
            {
              works.map((work, idx) => (
                <motion.li 
                variants={workVariants}
                initial={"hidden"}
                animate={"visible"}
                key={idx}
                custom={idx}>
                 <a href={work.href}>
                   <img src={work.imgUrl} alt="#" />
                  <h4>{work.title}</h4>
                   </a> 
                  
                </motion.li>
              ))}
           
            
          </ul>
        </div>
       
     </div>
        
   </section>
  )
}

