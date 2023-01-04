import React, {useState, useEffect} from 'react';
import {isEmulatorSync} from 'react-native-device-info';
import JailMonkey from 'jail-monkey';

type DeviceInfoContext = {
  isEmulator: boolean;
  isRootAccess: boolean;
};

type IProps = {
  children: React.ReactNode;
};

export const DeviceInfoContext = React.createContext<DeviceInfoContext>({
  isEmulator: false,
  isRootAccess: false,
});

const DeviceInfoProvider: React.FC<IProps> = ({children}) => {
  const [isEmulator, setIsEmulator] = useState(false);
  const [isRootAccess, setIsRootAccess] = useState(false);

  // Será feito a checagem logo na inicialização do APP.
  useEffect(() => {
    setIsRootAccess(JailMonkey.isJailBroken());
    setIsEmulator(isEmulatorSync());
  }, []);

  return (
    <DeviceInfoContext.Provider value={{isEmulator, isRootAccess}}>
      {children}
    </DeviceInfoContext.Provider>
  );
};

export default DeviceInfoProvider;
