import React, { useState } from 'react';
import InputNumber from 'react-input-number';

import './NumberChooser.scss';
 
const NumberChooser = ({ number, setNumber, minVal = 10, maxVal = 20, step = 1, className, ...props}) => {
  return (
    <InputNumber 
      className={`number-chooser ${className}`}
      min={minVal} 
      max={maxVal} 
      step={step} 
      value={number} 
      onChange={setNumber} 
      enableMobileNumericKeyboard 
      {...props}
    />
  );
};

export default NumberChooser;