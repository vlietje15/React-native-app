import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { StackRouter  } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Tabs' component={Tabs} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;