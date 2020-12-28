import React from 'react';
import { useStopwatch } from 'react-timer-hook';

import heartIcon from './media/heart.svg';

import './StopWatch.css';

const Stopwatch = ({playSound}) => {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false })
  const shouldPlaySound = seconds !== 0 && (seconds === 1 || seconds % 15 === 0);
  if(shouldPlaySound) playSound();
  return (
    <div className="stop-watch">
      <div className="watch-time-text">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p className="watch-status-text">
        <img className={['heart-icon', isRunning && 'heart-icon-animated'].join(" ")} src={heartIcon} alt="logo" />
      </p>
      <button className="watch-action-button" onClick={start}>Start</button>
      <button className="watch-action-button" onClick={pause}>Pause</button>
      <button className="watch-action-button" onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;