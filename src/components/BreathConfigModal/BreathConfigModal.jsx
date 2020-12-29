import React, { useContext } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import NumberChooser from '../NumberChooser/NumberChooser';
import NormalToggleButton from '../NormalToggleButton/NormalToggleButton';
import { BreathConfigContext } from '../BreathConfigProvider/BreathConfigProvider';

import './BreathConfigModal.scss';

const BreathConfigModal = ({open, onCloseModal}) => {
  const {
    maxBreath, 
    setMaxBreath, 
    shouldStartBreathHold, 
    setShouldStartBreathHold,
    pingEveryNthSecond,
    setPingEveryNthSecond,
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