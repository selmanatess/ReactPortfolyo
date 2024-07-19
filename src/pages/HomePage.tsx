import React from 'react'
import '../styles/HomePage.css'
import myphoto from '../assets/myphoto.png'
import SocialBox from '../components/SocialBox'
import Typewriter from '../components/typewrite';

export default function HomePage() {



  function openResume(): void {
    window.open('https://drive.google.com/file/d/1KUhtcBR0XSG8WeciWhUDK5rpPfYLmQ4L/view?usp=sharing', '_blank');
  }

  return (
    <div>
      <div className='appbar-div'></div>
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
            <span className='text first-text'> Ben </span>
            <Typewriter></Typewriter>
          </div>
          <div className='home-text-content'>
            <p>JavaScript frameworklerinden React ve TypeScript kullanarak frontend geliştirme yapıyorum. Modern web uygulamalarında kullanıcı dostu ve dinamik arayüzler oluşturmaktayım.
Backend tarafında ise Node.js kullanarak geliştirmeler yapıyorum. Bu süreçte, Express, JWT gibi popüler Node paketlerinden faydalanarak güvenli ve ölçeklenebilir RESTful API'ler tasarlamaktayım.</p>
          </div>
          <div className='button-div'>
            <button onClick={openResume} className='resume-button'> Özgeçmiş İndir
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
    </div>

  )
}
