import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
