import { useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedinIn} from "react-icons/fa";
import { init } from "ityped"
import { SiCodewars } from "react-icons/si"

import Photo from "../../images/max.jpg"
import "./home.scss";

export default function Home() {

  const animaitedTextRef = useRef();
  useEffect(() =>{
    init(animaitedTextRef.current, {
      showCursor: true,
      strings: ['Front-end Developer'],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, [])

  return (
    <section className='home'>
      <div className="container home__container">
        <div className="home__left">
          <h1 className='home__title'>Maksat Asanbekov</h1>
          <p className='Home__subtitle'>
            <span ref={animaitedTextRef}></span>
          </p>
          <p>As future an engineering technician i have to know provide and support to an engineer, and may work in the fields of mechanical,industrial, civil, electrical, aerospace,environmental engineering or IT. Currently with my ability to work well on a team, and strong analytical and problem-solving skills I will be Fullstuk Engineer in IT.</p>
          <ul className='home__links'>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100024871517151"
                target="blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className='home__icon' />
              </a>
            </li>
            <li>
              <a href="https://github.com/maksat07"
                target="blank"
                rel="noopener noreferrer"
              >
                <FaGithub className='home__icon' />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/maksat-asanbekov-508947223/"
                target="blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className='home__icon' />
              </a>
            </li>
            <li>
              <a href="https://www.codewars.com/users/maksat07-rss"
                target="blank"
                rel="noopener noreferrer"
              >
                <SiCodewars className='home__icon' />
              </a>
            </li>
          </ul>
          <Link to="/contact" className='home__cta'>
            Hire me
          </Link>
        </div>
        <div className="home__right">
          <img src={Photo} alt="Hero Coder" />
        </div>
      </div>
    </section>
  )
}
