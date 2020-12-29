import React from 'react';

import './NormalToggleButton.scss';

const NormalToggleButton = ({round, checked, className, ...props}) => {
  return (
    <div className="normal-toggle-button">
      <label className={`switch ${className}`}>
        <input type="checkbox" checked={checked} {...props} readOnly />
        <span className={`slider ${round ? 'round' : ''}`} />
      </label>
    </div>
  );
};

export default NormalToggleButton;