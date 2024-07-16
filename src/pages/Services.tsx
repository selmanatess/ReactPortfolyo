import React from 'react'
import '../styles/services.css'
import reacticon from '../assets/react.png'
import Card from '../components/Card'
import nodejs from '../assets/nodejs.png'
import typescript from '../assets/typescript.png'
import github from '../assets/github.png'
import express from '../assets/express.png'
import firebase from '../assets/firebase.png'
import postgresql from '../assets/postgresql.png'
import javascript from '../assets/javascript.png'
import AnimatedComponent from '../components/animation';
import { motion } from 'framer-motion';
export default function Services() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={scrollRef} style={{ overflow: 'scroll', height: '100vh' }} className='services'>
      <h1>Neler Yapıyorum?</h1>
   
        <motion.div className='cards'>
          <AnimatedComponent>     <Card title='React Geliştirme' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={reacticon} /> </AnimatedComponent>
          <AnimatedComponent>   <Card title='Node.js Geliştirme' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım' icon={nodejs} /></AnimatedComponent>
          <AnimatedComponent>  <Card title='Typescript' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={typescript} /></AnimatedComponent>
          <AnimatedComponent>  <Card title='Git ve Github Kullanımı ' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={github} /></AnimatedComponent>
          <AnimatedComponent> <Card title='Express' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={express} /></AnimatedComponent>
          <AnimatedComponent>  <Card title='Firebase' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={firebase} /></AnimatedComponent>
          <AnimatedComponent>  <Card title='Javascript' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={javascript} /></AnimatedComponent>
          <AnimatedComponent>  <Card title='Postgresql' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={postgresql} /></AnimatedComponent>
        </motion.div>
     

    </div>
  )
}
