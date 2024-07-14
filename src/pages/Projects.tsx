import React from 'react'
import '../styles/projects.css'
import vetgpt from '../assets/vetgpt.png'
import guctekmakina from '../assets/guctekmakina.png'

export default function Projects() {
    return (
        <div className='projects'>
            <h1>Projelerim</h1>
            <div className='projects-title'> Bir geliştirici olarak yolculuğumun başlangıcından bu yana iş ve tüketici kullanımı için dijital ürünler yarattım bunlar çalışmalarımdan bazıları...</div>
            <div className='projects-contents'>
                <div className="project-card">
                    <div className="content">
                        <div className='project-img'><img src={vetgpt} alt='Selman ATEŞ'></img></div>
                        <div className='project-title'>Vet GPT</div>
                        <div className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum alias sint dolore blanditiis sapiente? Quos odio sint quaerat nihil, excepturi numquam similique ut placeat obcaecati. Nisi nostrum voluptas corporis!</div>
                        </div>
                </div>
                <div className="project-card">
                    <div className="content">
                        <div className='project-img'><img src={guctekmakina} alt='Selman ATEŞ'></img></div>
                        <div className='project-title'>Güçtek Makina</div>
                        <div className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum alias sint dolore blanditiis sapiente? Quos odio sint quaerat nihil, excepturi numquam similique ut placeat obcaecati. Nisi nostrum voluptas corporis!</div>
                         </div>
                </div>

            </div>
<button className='more-button'> Daha Fazla
</button>
        </div>
    )
}
