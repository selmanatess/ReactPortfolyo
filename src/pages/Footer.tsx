import React from 'react'
import '../styles/footer.css'
import logo from '../assets/logo.png'
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

export default function Footer() {

  const linkedinClick = () => {
    window.open('https://www.linkedin.com/in/selman-ate%C5%9F-640ab21b7', '_blank');
  }
  const instagramClick = () => {
    window.open('https://www.instagram.com/selmann_ates/', '_blank');
  }
  const githubClick = () => {
    window.open('https://github.com/selmanatess', '_blank');
  }

  const twitterClick = () => {
    window.open('https://x.com/SellmanAtesss', '_blank');
  }
  const facebookClick = () => {
    window.open('https://www.facebook.com/selman.ates.18?locale=tr_TR', '_blank');
  }
  const MediumClick = () => {
    window.open('https://medium.com/@selmanates007', '_blank');
  }
  return (
    <div className='footer'>
      <div className='footer-name'><img src={logo} alt='Selman ATEŞ'></img> <span>Selman ATEŞ</span></div>

      <div className='footer-social'>
        <div className='footer-social-box' onClick={linkedinClick}><FaLinkedinIn className='footer-socail-icon'></FaLinkedinIn></div>
        <div className='footer-social-box' onClick={instagramClick}><FaInstagram className='footer-socail-icon' ></FaInstagram></div>
        <div className='footer-social-box' onClick={githubClick}><TbBrandGithubFilled className='footer-socail-icon'></TbBrandGithubFilled></div>
        
        <div className='footer-social-box' onClick={twitterClick}><FaXTwitter className='footer-socail-icon' ></FaXTwitter></div>
        <div className='footer-social-box' onClick={facebookClick}><FaFacebookF className='footer-socail-icon'></FaFacebookF></div>
        <div className='footer-social-box' onClick={MediumClick}><FaMediumM className='footer-socail-icon'></FaMediumM></div>
      </div>
      <div className='footer-text'>
        <p> Copyright Selman ATEŞ 💻 ©2024</p>
      </div>

    </div>
  )
}
