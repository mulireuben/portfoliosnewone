import React from 'react';
import './contact.css';
import smart from'../../assets/smart.png';
import masaimara from'../../assets/masai mara.png';
import boma from'../../assets/boma.png';
import facebook from '../../assets/facebook icon.png';
import instagram from '../../assets/instagram icon.png';
import youtube from '../../assets/youtube icon.png';
import twitter from '../../assets/twitter icon.png';


const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='ContactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a divesrse group of companies,
                some of the companies i have worked with  includes
            </p>
            <div className='clientImgs'>
                <img src={smart} alt='Client'className='clientImg'/>
                <img src={masaimara} alt='Client'className='clientImg'/>
                <img src={boma} alt='Client'className='clientImg'/>
            </div>
        </div>
        <div id='ContactTitle'>
            <h1 className='contactPage'>Contact Me </h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
            <form className='contactForm'>
                <input type='text' className='name'placeholder='Your Name'/>
                <input type='text' className='email'placeholder='Your Email'/>
                <textarea className='msg' name='message'rows='5'placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>submit</button>
                <div className='links'>
                    <img src={facebook } alt='facebook' className='link'/>
                    <img src={instagram } alt='instagram' className='link'/>
                    <img src={youtube } alt='youtube' className='link'/>
                    <img src={twitter } alt='twitter' className='link'/>
                </div>


            </form>


             
        </div>
    </section>
  )
}

export default Contact;