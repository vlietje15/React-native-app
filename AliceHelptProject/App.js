import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { StackRouter  } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Questions from './navigation/questions';
import { navigationRef } from './navigation/RootNavigation';
import { Provider } from 'react-redux'
import reducerAnswer1 from "./screens/survey/vraag_1/ReduxAnswer1/reducerAnswer1";
import { createStore } from 'redux'

const store = createStore(reducerAnswer1)

const Stack = createStackNavigator();

const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{headerShown:false}} >
          <Stack.Screen name='Tabs' component={Tabs} />
          <Stack.Screen name='Questions' component={Questions}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;