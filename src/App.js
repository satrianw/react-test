import React from 'react';
import './App.css';
import Header from './Header/Header';
import Cardapi from './Home/Card/Cardapi';
import Home from './Home/Home';

function App() {
  return (
    <div className="app">
    <Header />
      <Home />
      <Cardapi />
    </div>
  );
}

export default App;
