import React from 'react';

import './App.css';
import Appbar from './pages/Appbar';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="body">
      <Appbar/>
      <HomePage/>
      <Services/>
      <Projects/>
    </div>
  );
}

export default App;
