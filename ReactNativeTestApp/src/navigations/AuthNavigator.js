import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN, REGISTER} from '../constants/routeNames'
import Login from '../screens/Login/indexLogin';
import Register from '../screens/Register/indexRegister';

const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;