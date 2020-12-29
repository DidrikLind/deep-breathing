import React from 'react';

import { useLocalStorage } from "../../hooks/localstorage";

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

const BreathConfigProvider = ({children}) => {
  const [config, setConfig] = useLocalStorage('breathConfig', defaultConfig);
  return (
    <BreathConfigContext.Provider
      value={{
        maxBreath: config.breathing.maxBreath,
        setMaxBreath: (num) => setConfig({...config, breathing: {...config.breathing, maxBreath: num} }),
        shouldStartBreathHold: config.breathing.shouldStartBreathHold,
        setShouldStartBreathHold: (bool) => setConfig({...config, breathing: {...config.breathing, shouldStartBreathHold: bool} }),
      }}
  >
    {children}
    </BreathConfigContext.Provider>
  );
};

export default BreathConfigProvider;