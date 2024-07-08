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
export default function Services() {
  return (
    <div className='services'>
      <h1>Neler Yapıyorum?</h1>
      <div className='cards'>
        <Card title='React Geliştirme' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={reacticon} />
        <Card title='Node.js Geliştirme' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım' icon={nodejs} />
        <Card title='Typescript' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={typescript} />
        <Card title='Git ve Github Kullanımı ' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={github} />
        <Card title='Express' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={express} />
        <Card title='Firebase' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={firebase} />
     
        <Card title='Javascript' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={javascript} />
        <Card title='Postgresql' description='React, TypeScript, JavaScript, HTML, CSS, SCSS, Bootstrap, Material-UI, Firebase, Git ve Github gibi teknolojileri kullanarak Front-End Developer olarak çalışmaktayım.' icon={postgresql} />
      </div>

    </div>
  )
}
