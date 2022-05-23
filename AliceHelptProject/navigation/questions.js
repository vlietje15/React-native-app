import React from 'react';
import Vraag1 from '../screens/survey/vraag_1/indexVraag1';
import Vraag2 from '../screens/survey/vraag_2/indexVraag2';
import Vraag3 from '../screens/survey/vraag_3/indexVraag3';
import Vraag4 from '../screens/survey/vraag_4/indexVraag4';
import Vraag5 from '../screens/survey/vraag_5/indexVraag5';
import Vraag6 from '../screens/survey/vraag_6/indexVraag6';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Questions = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
          <Stack.Screen name='Vraag1' component={Vraag1}/>
          <Stack.Screen name='Vraag2' component={Vraag2}/>
          <Stack.Screen name='Vraag3' component={Vraag3}/>
          <Stack.Screen name='Vraag4' component={Vraag4}/>
          <Stack.Screen name='Vraag5' component={Vraag5}/>
          <Stack.Screen name='Vraag6' component={Vraag6}/>
        </Stack.Navigator>
    );
  }

  export default Questions;