import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from './screens';

const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator>
      {Screens.map((screen: any, index: number) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component ?? <></>}
          options={{
            title: screen.title,
            headerShown: screen.headerShown,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
