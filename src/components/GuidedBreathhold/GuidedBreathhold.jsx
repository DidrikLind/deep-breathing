import React, {useContext, useEffect, useState} from 'react';
import useSound from 'use-sound';
import { useStopwatch } from 'react-timer-hook';

import NormalButton from '../NormalButton/NormalButton';
import heartIcon from '../../media/heart.svg';
import bellSound from '../../media/bell_sound.mp3';
import musicSound from '../../media/audio_fe4d3bcac9.mp3';
import { BreathConfigContext } from '../BreathConfigProvider/BreathConfigProvider';

import './GuidedBreathhold.scss';

const GuidedBreathhold = ({runBreathing}) => {
  const { pingEveryNthSecond } = useContext(BreathConfigContext);
  const [isPaused, setIsPaused] = useState(false);
  const [playBell] = useSound(bellSound);
  const [playMusic, { stop: stopMusic, pause: pauseMusic }] = useSound(musicSound, { loop: true });
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: false });

  const startBreathHold = () => {
    if(!isRunning) {
      start();
      if(isPaused) setIsPaused(false);
      playBell();
      playMusic();
    }
  }

  useEffect(() => {
    if(runBreathing && !isRunning) startBreathHold();
  }, [runBreathing]);

  useEffect(() => {
    const shouldPlayBell = isRunning && seconds !== 0 && seconds % pingEveryNthSecond === 0;
    if(shouldPlayBell) playBell();
  }, [seconds])

  return (
    <div className="guided-breath-hold">
      <h1 className="guided-breath-hold-title">Guided Breath-hold</h1>
      <div className="stop-watch">
        <div className="watch-time-text">
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
      <p>
        <img className={['heart-icon', isRunning && 'heart-icon-animated'].join(" ")} src={heartIcon} alt="logo" />
      </p>
      <NormalButton className={`${isRunning ? 'active-button' : ''}`} text={`${isRunning ? 'Started' : 'Start'}`} disabled={isRunning}
        onClick={() => startBreathHold()}
      />
      <NormalButton className={`${isPaused ? 'active-button' : ''}`} text={`${isPaused ? 'Paused' : 'Pause'}`} disabled={isPaused || !isRunning}
        onClick={() => {
          if(isRunning) {
            pause();
            pauseMusic();
            setIsPaused(true);
          }
        }}
      />
      <NormalButton text="Reset" disabled={!isRunning && !isPaused}
        onClick={() => {
          if(isRunning || isPaused) {
            reset();
            stopMusic();
            setIsPaused(false);
          }
        }}
      />
    </div>
  );
};

export default GuidedBreathhold;