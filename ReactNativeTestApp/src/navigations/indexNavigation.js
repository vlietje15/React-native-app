import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/reducers/Provider';
//import DrawerNavigator from './DrawerNavigator';

const AppNavContainer=()=>{
    const {authState: {isLoggedIn},} = useContext(GlobalContext);

    return (
        <NavigationContainer>
            {isLoggedIn? <HomeNavigator /> : <AuthNavigator />}
            {/* {isLogedIn? <DrawerNavigator/>:<AuthNavigator/>} */}
        </NavigationContainer>
    );
};

export default AppNavContainer;