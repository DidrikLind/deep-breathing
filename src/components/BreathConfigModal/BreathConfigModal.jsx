import React, { useContext } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import NumberChooser from '../NumberChooser/NumberChooser';
import NormalToggleButton from '../NormalToggleButton/NormalToggleButton';
import { BreathConfigContext, BREATHING_SPEED } from '../BreathConfigProvider/BreathConfigProvider';

import './BreathConfigModal.scss';

// TODO: Make this dialog prettier. Its ugly as f*ck.
const BreathConfigModal = ({open, onCloseModal}) => {
  const {
    maxBreath, 
    setMaxBreath, 
    shouldStartBreathHold, 
    setShouldStartBreathHold,
    pingEveryNthSecond,
    setPingEveryNthSecond,
    startBreathHoldTime,
    setStartBreathHoldTime,
    breathingSpeed,
    setBreathingSpeed,
  } = useContext(BreathConfigContext);
  return (
    <div className="breath-config-modal-wrapper">
      <Modal
        open={open} 
        onClose={onCloseModal} 
        center
      >
        <h2>Configuration</h2>
        <div className="breath-modal-divider" />
        <h3>Guided Breathing</h3>
        <div className="breath-modal-breath-speed">
            <p>Breathing speed</p>
            <input type="radio" onClick={() => setBreathingSpeed(BREATHING_SPEED.SLOW) } checked={breathingSpeed === BREATHING_SPEED.SLOW} />
            <label>Slow</label>
            <input type="radio" onClick={() => setBreathingSpeed(BREATHING_SPEED.MEDIUM) } checked={breathingSpeed === BREATHING_SPEED.MEDIUM} />
            <label>Medium</label>
            <input type="radio" onClick={() => setBreathingSpeed(BREATHING_SPEED.FAST) } checked={breathingSpeed === BREATHING_SPEED.FAST} />
            <label>Fast</label>
        </div>
        <div className="breath-modal-max-breath">
          <label>Max breath</label>
          <NumberChooser
            className="max-breath-counter"
            number={maxBreath} 
            minVal={10}
            maxVal={1000}
            setNumber={setMaxBreath}
          />
        </div>
        <div className="breath-modal-auto-start-breath-hold">
          <label>Auto start breathhold</label>
          <NormalToggleButton className="auto-start-check" checked={shouldStartBreathHold} onClick={() => setShouldStartBreathHold(!shouldStartBreathHold)}/>
          {shouldStartBreathHold &&
          <>
            <label>Auto start time</label>
            <NumberChooser
              className="max-breath-counter"
              number={startBreathHoldTime} 
              minVal={0}
              maxVal={100}
              setNumber={setStartBreathHoldTime}
            />
            s
          </>
          }
        </div>
        <h3>Guided Breath-hold</h3>
        <div className="breath-modal-ping-every-nth">
          <label>Ping every nth second</label>
          <NumberChooser
            className="ping-breath-counter"
            number={pingEveryNthSecond} 
            minVal={1}
            maxVal={59}
            setNumber={setPingEveryNthSecond}
          />
        </div>
      </Modal>
    </div>
  );
};

export default BreathConfigModal;