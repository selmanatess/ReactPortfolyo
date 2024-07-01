import React from 'react';

import './App.css';
import Appbar from './components/Appbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="body">
      <Appbar/>
      <HomePage/>
    </div>
  );
}

export default App;
