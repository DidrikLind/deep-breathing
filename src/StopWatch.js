import React from 'react';
import { useStopwatch } from 'react-timer-hook';

import heartIcon from './media/heart.svg';

import './StopWatch.css';

const SOUND_EVERY_NTH_SECOND = 30;

const Stopwatch = ({playSound, onRun, onStop}) => {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false })
  const shouldPlaySound = isRunning && (seconds === 0 || seconds % SOUND_EVERY_NTH_SECOND === 0);
  if(shouldPlaySound) playSound();
  return (
    <div className="stop-watch">
      <div className="watch-time-text">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p className="watch-status-text">
        <img className={['heart-icon', isRunning && 'heart-icon-animated'].join(" ")} src={heartIcon} alt="logo" />
      </p>
      <button className="watch-action-button" 
        onClick={() => {
          start();
          onRun();
        }}
      >Start
      </button>
      <button className="watch-action-button"
        onClick={() => {
          pause();
          onStop();
        }}>Pause
      </button>
      <button className="watch-action-button" 
        onClick={() => {
          reset();
          onStop();
        }}>Reset
      </button>
    </div>
  );
}

export default Stopwatch;