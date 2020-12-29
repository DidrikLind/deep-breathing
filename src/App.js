import React, {useState} from 'react';

import breathIcon from './media/breath_icon.svg';
import GuidedBreathing from './components/GuidedBreathing/GuidedBreathing';
import GuidedBreathhold from './components/GuidedBreathhold/GuidedBreathhold';
import BreathConfigModal from './components/BreathConfigModal/BreathConfigModal';
import { useLocalStorage } from './hooks/localstorage';

import './App.scss';

// TODO: Use maxBreath info from react context?
const defaultConfig = {
  breathing: {
    maxBreath: 40,
    shouldStartBreathHold: false,
  },
  breathHold: {
    // TODO: fill me up.
  }
};

export const BreathConfigContext = React.createContext(defaultConfig);

function App() {
  const [config, setConfig] = useLocalStorage('breathConfig', defaultConfig);
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);
  return (
    <div className="app">
      <header className="app-header">
        <img 
          className="header-icon" 
          src={breathIcon} 
          onClick={() => {
            onOpenModal();
          }}
          alt="logo" />
      </header>
      {/* TODO: Simplyfi setting of config? */}
      <BreathConfigContext.Provider
        value={{
          maxBreath: config.breathing.maxBreath,
          setMaxBreath: (num) => setConfig({...config, breathing: {...config.breathing, maxBreath: num} }),
          shouldStartBreathHold: config.breathing.shouldStartBreathHold,
          setShouldStartBreathHold: (bool) => setConfig({...config, breathing: {...config.breathing, shouldStartBreathHold: bool} }),
          // TODO: make generalcontext for state!! startBreathHold: (breathHoldFunc) => breathHoldFunc(),
        }}
      >
        <GuidedBreathing />
        <div className="separator"/>
        <GuidedBreathhold />
        <BreathConfigModal open={openModal} onCloseModal={onCloseModal}/>
      </BreathConfigContext.Provider>
      {/* <br /> */}
      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
  );
}

export default App;
