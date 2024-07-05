import React from 'react';

import './App.css';
import Appbar from './pages/Appbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="body">
      <Appbar/>
      <HomePage/>
    </div>
  );
}

export default App;
