import React, { useState } from 'react';

import GuidedBreathhold from '../GuidedBreathhold/GuidedBreathhold';
import GuidedBreathing from '../GuidedBreathing/GuidedBreathing';

import './BreathingController.scss';

const BreathingController = () => {
  const [runBreathing, setRunBreathing] = useState(false);
  return (
    <div className="breathing-controller">
      <GuidedBreathing setRunBreathing={setRunBreathing} />
      <div className="separator"/>
      <GuidedBreathhold runBreathing={runBreathing} />
    </div>
  );
};

export default BreathingController;