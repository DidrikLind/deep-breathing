import React from 'react';

import { useLocalStorage } from "../../hooks/localstorage";

const defaultConfig = {
  breathing: {
    maxBreath: 40,
    shouldStartBreathHold: false,
  },
  breathHold: {
    pingEveryNthSecond: 30,
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
        pingEveryNthSecond: config.breathHold.pingEveryNthSecond,
        setPingEveryNthSecond: (num) => setConfig({...config, breathHold: {...config.breathHold, pingEveryNthSecond: num }}),
      }}
  >
    {children}
    </BreathConfigContext.Provider>
  );
};

export default BreathConfigProvider;