import {useContext} from 'react';
import {DeviceInfoContext} from '../Contexts/DeviceInfoContext';

const useDeviceInfo = () => {
  const {isEmulator, isRootAccess} = useContext(DeviceInfoContext);

  return {isEmulator, isRootAccess};
};

export default useDeviceInfo;
