import React, { useContext } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { BreathConfigContext } from '../../App';
import NumberChooser from '../NumberChooser/NumberChooser';

import './BreathConfigModal.scss';


const BreathConfigModal = ({open, onCloseModal}) => {
  const { maxBreath, setMaxBreath, shouldStartBreathHold, setShouldStartBreathHold } = useContext(BreathConfigContext);
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
          <label>Max breath:</label>
            <NumberChooser
              number={maxBreath} 
              minVal={10}
              maxVal={1000}
              setNumber={setMaxBreath}
            />
        </div>
        <div className="breath-modal-auto-start-breath-hold">
          <label>Auto start breathhold?</label>
          <input
            type="radio"
            checked={shouldStartBreathHold} 
            onClick={() => setShouldStartBreathHold(!shouldStartBreathHold)} 
          />
        </div>
        <h3>Guided Breath-hold</h3>
      </Modal>
    </div>
  );
};

export default BreathConfigModal;