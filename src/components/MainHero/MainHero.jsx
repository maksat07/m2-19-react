import React from 'react'
import "./mainHero.scss"
import heroImg from '../../images/hero.jpeg'


export default function MainHero() {
  return (
    <section className='hero-container'>
        <img className='hero-img' src={heroImg} alt="asdf" />
    </section>

  )
}
