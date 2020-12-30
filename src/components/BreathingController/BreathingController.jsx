import React, { useState } from 'react';

import GuidedBreathhold from '../GuidedBreathhold/GuidedBreathhold';
import GuidedBreathing from '../GuidedBreathing/GuidedBreathing';
import ScrollSpyThief from '../ScrollSpyThief/ScrollSpyThief';

import './BreathingController.scss';

const BreathingController = () => {
  const [runBreathing, setRunBreathing] = useState(false);
  return (
    <>
      <ScrollSpyThief sectionData={scrollSpySectionData} />
      <div className="breathing-controller">
        <section id="section-breathing">
          <GuidedBreathing setRunBreathing={setRunBreathing} />
        </section>
        <div className="separator"/>
        <section id="section-breath-hold">
          <GuidedBreathhold runBreathing={runBreathing} />
        </section>
      </div>
    </>
  );
};

const scrollSpySectionData = [
  { title: 'Breathing', href: '#section-breathing', item: 'section-breation' },
  { title: 'Breath-Hold', href: '#section-breath-hold', item: 'section-breath-hold' }
]

export default BreathingController;