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
    <div ref={scrollRef}  className='services'>
      <h1>Neler Yapıyorum?</h1>
      <div className='services-title'>Geliştirici olarak, sürekli değişen teknoloji dünyasında güncel kalmak ve yeni beceriler kazanmak benim için çok önemli. İşte şu an üzerinde çalıştığım programlama dilleri ve teknolojiler</div>
        <motion.div className='cards'>
          <AnimatedComponent>     <Card title='React Geliştirme' description='Projelerimde react kullanmamın en büyük avantajı bileşen tabanlı olması sayesinde tekrar kullanılabilir ve yönetilebilir olmasıdır' icon={reacticon} /> </AnimatedComponent>
          <AnimatedComponent>   <Card title='Node.js Geliştirme' description="JavaScript tabanlı olması, hızlı ölçeklenebilir uygulamalar geliştirmeme imkan sağlaması ve non-blocking I/O modeliyle performansı artırması sebebiyle nodejs kullanıyorum" icon={nodejs} /></AnimatedComponent>
          <AnimatedComponent>  <Card title='Typescript' description="Projelerimde TypeScript'i güvenli kod yazma, daha iyi okunabilirlik ve dökümantasyon sağlama, gelişmiş IDE desteği ve ölçeklenebilirlik sağlamasından dolayı projelerimde kullanıyorum." icon={typescript} /></AnimatedComponent>
          <AnimatedComponent>  <Card title='Git ve Github Kullanımı ' description="Projelerimde versiyon kontrolü,ekip çalışması, proje yönetimi ve sorun takibi için kullanışlı olmasından dolayı kullanıyorum" icon={github} /></AnimatedComponent>
          <AnimatedComponent> <Card title='Express' description="Express'i, hızlı ve verimli, esnek, geniş paket desteği olması ve RESTful API'ler için ideal oldukları için kullanıyorum" icon={express} /></AnimatedComponent>
          <AnimatedComponent>  <Card title='Firebase' description="Firebase'i, gerçek zamanlı veritabanı, kolay kimlik doğrulama, ölçeklenebilirlik ve hızlı uygulama geliştirme imkanı sunduğu için kullanıyorum." icon={firebase} /></AnimatedComponent>
          <AnimatedComponent>  <Card title='Javascript' description="JavaScript'i, web geliştirme için esnek ve yaygın olması, hem frontend hem de backend geliştirme imkanı sunması ve geniş kütüphane desteği sağlaması nedeniyle kullanıyorum." icon={javascript} /></AnimatedComponent>
          <AnimatedComponent>  <Card title='Postgresql' description="PostgreSQL'i, güçlü veri bütünlüğü, zengin özellik seti, yüksek performans ve ölçeklenebilirlik sağladığı için kullanıyorum." icon={postgresql} /></AnimatedComponent>
        </motion.div>
     

    </div>
  )
}
