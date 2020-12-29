import React from 'react';

import './NormalButton.scss';


const NormalButton = ({text, onClick, className, ...props}) => (
  <button className={`normal-button ${className}`} onClick={onClick} {...props}>{text}</button>
);

export default NormalButton;