import React from 'react'
import '../styles/HomePage.css'
import myphoto from '../assets/myphoto.png'
import SocialBox from '../components/SocialBox'
import Typewriter from '../components/typewrite';

export default function HomePage() {



  return (
    <div className='homepage'>
      <div className='home-text'>
        <div className='header'>
          <div className='hello'>
            Merhaba, Web Siteme Hoşgeldiniz...
          </div>
        </div>
        <div className='container-name'>
          <div className='home-text-name'>Selman ATEŞ</div>
        </div>

        <div className='container'>
          <span className='text first-text'> Ben bir </span>
          <Typewriter></Typewriter>
        </div>
        <div className='home-text-content'>
          <p>Front-End Developer olarak çalışmaktayım. <br></br>React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanmaktayım.</p>
        </div>
        <div className='button-div'> 
          <button className='resume-button'> Özgeçmiş İndir
        </button>
        </div>
       
      </div>


      <div className='my-photos-div'>
        <div className='my-photos'>
        <img src={myphoto} alt='myphoto' className='myphoto'></img>
      </div> 
      </div>
      <div className='sm-my-photos-div'>
        <div className='sm-my-photos'>
        <img src={myphoto} alt='Selman ATEŞ' className='myphoto'></img>
      </div> 
      </div>
       
      
      


      <SocialBox />

    </div>
  )
}
