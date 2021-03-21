import React from 'react';
import GlobalProvider from './src/context/provider';
import AppNavContainer from './src/navigation';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />

    </GlobalProvider>
  );
}
export default App;
