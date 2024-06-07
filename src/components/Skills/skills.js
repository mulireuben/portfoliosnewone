import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/web-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return  (
      <section id='skills'>
      <span className='skillTitle'>Who I Am</span>
         <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating user friendly and visually appealing website.I have a good understanding of design and a keen
              eye for detail.I am proficient in HTML,CSS,JAVASCRIPT ,as well as design software such as Figma and adobe photoshop
              and illustratr</span>
          <div className='skillBars'>
           <div className='skillBar'>
             <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
             <div className='skillBarText'>
                 <h2>UI/UX Design</h2>
                 <p>This is a Demo Text,you can type what you want to tell  me right now and i will respond to you right now</p>
             </div>
           </div>
          <div className='skillBar'>
             <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
             <div className='skillBarText'>
                 <h2>Web Design</h2>
                 <p>A website that can entaice your ideas</p>
             </div>
           </div>
          <div className='skillBar'>
             <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
             <div className='skillBarText'>
                 <h2>App Design</h2>
                 <p>An app that is user friendly </p>
             </div>
           </div>
          </div>
      </section>
  );
}

export default Skills ;
