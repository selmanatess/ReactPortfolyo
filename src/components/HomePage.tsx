import React from 'react'
import '../styles/HomePage.css'
import myphoto from '../assets/myphotos.png'
export default function HomePage() {
  return (
    <div className='homepage'>
      <img src={myphoto}></img>
    </div>
  )
}
