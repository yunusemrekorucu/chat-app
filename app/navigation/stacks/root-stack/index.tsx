import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from './screens';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      {screens.map((screen: any, index: number) => (
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

export default RootStack;
