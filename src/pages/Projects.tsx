import React from 'react'
import '../styles/projects.css'
import vetgpt from '../assets/vetgpt.png'
import guctekmakina from '../assets/guctekmakina.png'
import { motion } from 'framer-motion';
import AnimatedComponent from '../components/animation';

export default function Projects() {
    const githubClick = () => {
        window.open('https://github.com/selmanatess', '_blank');
      }
    const scrollRef = React.useRef<HTMLDivElement>(null);
    return (
        <div ref={scrollRef} className='projects'>
            <h1>Projelerim</h1>
            <div className='projects-title'> Bir geliştirici olarak yolculuğumun başlangıcından bu yana iş ve tüketici kullanımı için dijital ürünler yarattım bunlar çalışmalarımdan bazıları...</div>
            <motion.div className='projects-contents'>
                <AnimatedComponent>
                    <div className="project-card">
                    <div className="content">
                        <div className='project-img'><img src={vetgpt} alt='Selman ATEŞ'></img></div>
                        <div className='project-title'>Vet GPT</div>
                        <div className='project-description'>Vet GPT hayvan sağlığını koruma ve iyileştirme amacıyla yapay zeka ve makine öğrenimi tekniklerini kullanarak hayvan hastalıklarını tespit eden yenilikçi bir yazılımdır. React, TypeScript, Node.js, TypeORM ve PostgreSQL kullanarak geliştirdiğim bu uygulama, hayvan sahipleri ve veteriner hekimler için hastalıkların erken teşhisini ve etkili tedavi yöntemlerini sunarak hayvanların yaşam kalitesini artırmayı hedeflemektedir.</div>
                    </div>
                </div></AnimatedComponent>
                <AnimatedComponent> <div className="project-card">
                    <div className="content">
                        <div className='project-img'><img src={guctekmakina} alt='Selman ATEŞ'></img></div>
                        <div className='project-title'>Güçtek Makina</div>
                        <div className='project-description'>Güçtek makina iş makinelerinin tasarımını,imalatını ve tornalamasını yapan kurumsal bir şirkettir.Arayüzünü react ile yazdığım bu proje müşteriler için siparişleri kolaylaştırmayı ve işletmenin tanınabilirliğini arttırmayı amaçlamaktadır.  </div>
                    </div>
                </div></AnimatedComponent>


            </motion.div>
            <button onClick={githubClick} className='more-button'> Daha Fazla
            </button>
        </div>
    )
}
