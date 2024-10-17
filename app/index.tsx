import React from 'react';
import RootStack from './navigation/stacks/root-stack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
