import React from 'react';
import Stopwatch from './StopWatch';
import useSound from 'use-sound';

import breathIcon from './media/breath_icon.svg';
import bellSound from './media/bell_sound.mp3';

import './App.css';

function App() {
  const [play] = useSound(bellSound);
  return (
    <div className="app">
      <header className="app-header">
        <img className="header-icon" src={breathIcon} alt="logo" />
      </header>
      <h1 className="app-title">Deep Breathing</h1>
      <Stopwatch playSound={play} />
    </div>
  );
}

export default App;
