import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';
import Contacts from '../screens/Contacts/indexContacts';
import ContactDetail from '../screens/ContactDetails/indexContactDetail';
import CreateContact from '../screens/CreateContact/indexCreateContact';
import Settings from '../screens/Settings/indexSettings';

const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteNam={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>

        </HomeStack.Navigator>
    );
};



export default HomeNavigator;