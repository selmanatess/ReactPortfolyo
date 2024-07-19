import React from 'react';
import './App.css';
import Appbar from './pages/Appbar';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Communicate from './pages/Communicate';
import Footer from './pages/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedComponent from './components/animation';

function App() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
const homeref = React.useRef<HTMLDivElement>(null);
const servicesRef = React.useRef<HTMLDivElement>(null);
const projectsRef = React.useRef<HTMLDivElement>(null);
const communicateRef = React.useRef<HTMLDivElement>(null);

const { scrollYProgress } = useScroll({container: scrollRef});

  // Animasyon için scrollYProgress değerini kullanarak bir dönüşüm oluşturun

const scrollToSection = (section: string):void => {
  switch (section) {
    case 'home':
      homeref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
     
      break;
    case 'services':
      servicesRef.current?.scrollIntoView({ behavior: 'smooth',block: 'start' });
    
      break;
    case 'projects':
      projectsRef.current?.scrollIntoView({ behavior: 'smooth',block: 'start' });
    
 
      break;
    case 'communicate':
      communicateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
      break;
    default:
      break;
  }
};
  return (
    <div ref={scrollRef} style={{ overflow: 'scroll', height: '100vh' }} className='body'>
    <motion.div>
        <Appbar scrollToSection={scrollToSection} />
        <AnimatedComponent><div  ref={homeref}></div><HomePage /><div  ref={servicesRef}></div></AnimatedComponent>
        <AnimatedComponent><Services /><div ref={projectsRef}></div></AnimatedComponent>
        <AnimatedComponent> <Projects /><div ref={communicateRef}></div></AnimatedComponent>
        <AnimatedComponent><Communicate /></AnimatedComponent>
        <AnimatedComponent><Footer /></AnimatedComponent>
      </motion.div>
    </div>
  );
}

export default App;
