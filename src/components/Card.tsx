import React from 'react'

import '../styles/services.css'
interface CardProps {
    title: string;
    description: string;
    icon: string ;
    }
export default function Card(props: CardProps) {
  return (
    <div className="card">
    <div className="bg">
      <div className='bg-div'>
       
        <img src={props.icon} alt='reacticon' className='reacticon'></img>
        <div className='card-title'>{props.title}</div>
        <div className='card-description'>{props.description}</div>
      </div>

    </div>
    <div className="blob"></div>
  </div>
  )
}
