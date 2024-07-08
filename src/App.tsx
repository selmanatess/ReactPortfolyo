import React from 'react';

import './App.css';
import Appbar from './pages/Appbar';
import HomePage from './pages/HomePage';
import Services from './pages/Services';

function App() {
  return (
    <div className="body">
      <Appbar/>
      <HomePage/>
      <Services/>
    </div>
  );
}

export default App;
