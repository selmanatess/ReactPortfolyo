import React from 'react'
import '../styles/socialbox.css'
import { IconLinkedin } from '../svg/linkedin';
import { IconMail } from '../svg/mail';
import IconSquareInstagram from '../svg/instagram';
import IconSquareGithub from '../svg/github';
export default function SocialBox() {
const mailClick = () => {
    window.location.href = 'mailto:selmanates007@gmail.com';
}
const linkedinClick = () => {
    window.open('https://www.linkedin.com/in/selman-ate%C5%9F-640ab21b7', '_blank');
}
const instagramClick = () => {
    window.open('https://www.instagram.com/selmann_ates/', '_blank');
}
const githubClick = () => {
  window.open('https://github.com/selmanatess', '_blank');
}

    
    return (
    <div className='social-box'>
        <div className='box' onClick={linkedinClick}>  <IconLinkedin style={{width: '48px', height: '48px' }}></IconLinkedin></div>
        <div className='box' onClick={instagramClick}><IconSquareInstagram style={{width: '58px', height: '58px' }}></IconSquareInstagram></div>
        <div className='box' onClick={githubClick}><IconSquareGithub style={{width: '55px', height: '55px' }}></IconSquareGithub></div>
        <div className='box' onClick={mailClick}>

        <IconMail style={{ width: '65px', height: '65px' }} />
        </div>
      
    </div>
  )
}
