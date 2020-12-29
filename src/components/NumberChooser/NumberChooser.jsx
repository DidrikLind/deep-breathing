import React, { useState } from 'react';
import InputNumber from 'react-input-number';

import './NumberChooser.scss';
 
const NumberChooser = ({ number, setNumber, minVal = 10, maxVal = 20, step = 1}) => {
  return (
    <InputNumber 
      className="number-chooser"
      min={minVal} 
      max={maxVal} 
      step={step} 
      value={number} 
      onChange={setNumber} 
      enableMobileNumericKeyboard 
    />
  );
};

export default NumberChooser;