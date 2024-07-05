import React, { useEffect, useState } from 'react';
import '../styles/typewrite.css'; // CSS dosyasını ekleyebilirsiniz

const Typewriter = () => {
  const texts = ["Bilgisayar Mühendisi", "React Geliştirici", "Node.js Geliştirici",];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className='text sec-text'>{texts[currentTextIndex]}</span>
  );
};

export default Typewriter;
