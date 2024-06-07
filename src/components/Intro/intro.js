import React from 'react';
import './intro.css';
import bg from'../../assets/image.png.jpg';
import btnImg from'../../assets/hire me.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Reuben<br/>website designer</span></span>
            <p className='introPara'>i am a skilled webdesigner with experience in creating<br/> visually appealing and user friendly websites</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire 'className='btnImg'/>Hire Me</button></Link>

        </div>
        <img src={bg}alt='profile'className='bg'/>
    </section>
  )
}

export default Intro;