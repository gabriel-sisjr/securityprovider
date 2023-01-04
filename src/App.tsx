import React from 'react';
import DeviceInfoProvider from './Contexts/DeviceInfoContext';
import Routes from './Routes/appRoutes';

const App: React.FC = () => {
  return (
    <DeviceInfoProvider>
      <Routes />
    </DeviceInfoProvider>
  );
};

export default App;
