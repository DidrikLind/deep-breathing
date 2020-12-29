import React, {useState,useEffect,useContext} from 'react';
import useSound from 'use-sound';

import breathingSound from '../../media/zapsplat_human_male_deep_breathing_19843_2.2s.mp3';
import breathingOverSound from '../../media/breathing_session_over.mp3';
import lungIcon from '../../media/lungs.svg';
import NormalButton from '../NormalButton/NormalButton';
import { BreathConfigContext } from '../../App';

import './GuidedBreathing.scss';

const BREATH_TIME = 2200;
const GuidedBreathing = () => {
  const { maxBreath } = useContext(BreathConfigContext);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [breathCounter, setBreathCounter] = useState(0);
  const [playBreath, {stop: stopBreath, pause: pauseBreath }] = useSound(breathingSound, 
    {
      loop: true
    }
  );
  const [playBreathOver] = useSound(breathingOverSound, {interrupt: false});
  useEffect(() => {
    if(isRunning) {
      const timer =
        breathCounter > 0 && setInterval(() => setBreathCounter(breathCounter + 1), BREATH_TIME);
      return () => clearInterval(timer);
    }
  }, [breathCounter]);

  useEffect(() => {
    if(isDone) {
      playBreathOver();
      setTimeout(() => stopBreath(), 1000);
    }
  }, [isDone])

  if(isRunning && breathCounter === maxBreath) {
    setIsDone(true);
    setIsRunning(false);
  }
  return (
    <div className="guided-breathing">
        <h1 className="guided-breathing-title">Guided Breathing</h1>
        <h2>{breathCounter} / {maxBreath}</h2>
        <p>
          <img className={['lung-icon', isRunning && 'lung-icon-animated'].join(" ")} src={lungIcon} alt="logo" />
        </p>
        <NormalButton className={`${isRunning ? 'active-button' : ''}`} text={`${isRunning ? 'Started' : 'Start'}`} disabled={isRunning}
          onClick={() => {
            if(!isRunning) {
              setIsDone(false);
              setIsRunning(true);
              isPaused ?  setBreathCounter(breathCounter + 1) : setBreathCounter(1);
              setIsPaused(false);
              playBreath();
            }
          }}
        />
        <NormalButton className={`${isPaused ? 'active-button' : ''}`} text={`${isPaused ? 'Paused' : 'Pause'}`} disabled={isPaused || !isRunning}
          onClick={() => {
            if(isRunning) {
              setIsRunning(false);
              setIsPaused(true);
              pauseBreath();
            }
          }}
        />
        <NormalButton text="Reset"
          onClick={() => {
            stopBreath();
            setIsRunning(false);
            setIsPaused(false);
            setIsDone(false);
            setBreathCounter(0);
          }}
        />
    </div>
  );

};

export default GuidedBreathing;