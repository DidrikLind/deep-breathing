import React from 'react';
import Stopwatch from './StopWatch';
import useSound from 'use-sound';

import breathIcon from './media/breath_icon.svg';
import bellSound from './media/bell_sound.mp3';
import breathingSound from './media/zapsplat_human_male_deep_breathing_19843.mp3';

import './App.css';

function App() {
  const [play] = useSound(bellSound);
  const [playBreath, { stop: stopBreath }] = useSound(breathingSound);
  return (
    <div className="app">
      <header className="app-header">
        <img className="header-icon" src={breathIcon} alt="logo" />
      </header>
      <h1 className="app-title">Deep Breathing</h1>
      <Stopwatch playSound={play} onRun={() => playBreath()} onStop={() => stopBreath()} />
    </div>
  );
}

export default App;
