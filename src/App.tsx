import React from 'react';

import './App.css';
import Appbar from './pages/Appbar';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Communicate from './pages/Communicate';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="body">
      <Appbar/>
      <HomePage/>
      <Services/>
      <Projects/>i
      <Communicate/>
      <Footer/>
    </div>
  );
}

export default App;
