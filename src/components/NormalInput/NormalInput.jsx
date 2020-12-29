import React from 'react';

import './NormalInput.scss';


const NormalInput = ({text, onClick, className, ...props}) => (
  <input className={`normal-input ${className}`} {...props} />
);

export default NormalInput;