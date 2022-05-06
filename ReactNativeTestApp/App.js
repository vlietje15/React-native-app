/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavContainer from './src/navigations/indexNavigation';
import GlobalProvider from './src/context/reducers/Provider';


const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
    
    );
};


export default App;
