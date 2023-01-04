import React from 'react';
import useDeviceInfo from '../Hooks/useDeviceInfo';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const Routes: React.FC = () => {
  const {isEmulator, isRootAccess} = useDeviceInfo();

  // Não precisa necessariamente ser uma tela, pode ser uma rota.
  return isEmulator || isRootAccess ? <Error /> : <Home />;
};

export default Routes;
