import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { StackRouter  } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Questions from './navigation/questions';
import { navigationRef } from './navigation/RootNavigation';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name='Questions' component={Questions}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;