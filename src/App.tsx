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
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // Animasyon için scrollYProgress değerini kullanarak bir dönüşüm oluşturun


  return (
    <div ref={scrollRef} style={{ overflow: 'scroll', height: '100vh' }} className='body'>
    <motion.div>
        <Appbar />
        <AnimatedComponent><HomePage /></AnimatedComponent>
        <AnimatedComponent><Services /></AnimatedComponent>
        <AnimatedComponent><Projects /></AnimatedComponent>
        <AnimatedComponent><Communicate /></AnimatedComponent>
        <AnimatedComponent><Footer /></AnimatedComponent>
      </motion.div>
    </div>
  );
}

export default App;
