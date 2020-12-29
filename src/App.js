import React, {useState} from 'react';

import breathIcon from './media/breath_icon.svg';
import BreathController from './components/BreathingController/BreathingController';
import BreathConfigProvider from './components/BreathConfigProvider/BreathConfigProvider';
import BreathConfigModal from './components/BreathConfigModal/BreathConfigModal';

import './App.scss';

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);
  return (
    <div className="app">
      <header className="app-header">
        <img 
          className="header-icon" 
          src={breathIcon} 
          onClick={() =>  onOpenModal()}
          alt="logo" />
      </header>
      <BreathConfigProvider>
        <BreathController />
        <BreathConfigModal open={openModal} onCloseModal={onCloseModal}/>
      </BreathConfigProvider>   
      {/* <br /> */}
      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
  );
}

export default App;
