import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, Image} from 'react-native';

import HomeScreen from '../screens/home/homeScreen';
import ArtikelScreen from '../screens/artikel/artikelScreen';
import ChatScreen from '../screens/chat/chatScreen';
import AccountScreen from '../screens/account/accountScreen';

import { styles } from "./stylesTabs";
import Vraag1 from '../screens/survey/vraag_1/indexVraag1';
import Vraag2 from '../screens/survey/vraag_2/indexVraag2';
import Vraag3 from '../screens/survey/vraag_3/indexVraag3';
import Vraag4 from '../screens/survey/vraag_4/indexVraag4';
import Vraag5 from '../screens/survey/vraag_5/indexVraag5';
import Vraag6 from '../screens/survey/vraag_6/indexVraag6';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
            // style={styles.navbar} 
            tabBarOptions = {{ showLabel: false, }}
            screenOptions = {{ 
                headerShown: false, 
                tabBarStyle:{ 
                    backgroundColor: '#3975BB',
                    height: 85,
            } }}
            
        >

            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Image
                                source={require('../assets/icons/PNG-Navbar-icons/home-nav.png')}
                                resizeMode='contain'
                                style={styles.icons}
                            />
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen 
                name="Artikel"
                component={Vraag1} 
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Image
                                source={require('../assets/icons/PNG-Navbar-icons/artikel-nav.png')}
                                resizeMode='contain'
                                style={styles.icons}
                            />
                        </View>
                    ),
                }}

            />
            
            <Tab.Screen 
                name="Chat"
                component={Vraag2} 
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Image
                                source={require('../assets/icons/PNG-Navbar-icons/chat-nav.png')}
                                resizeMode='contain'
                                style={styles.icons}
                            />
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen 
                name="Account"
                component={Vraag3}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Image
                                source={require('../assets/icons/PNG-Navbar-icons/account-nav.png')}
                                resizeMode='contain'
                                style={styles.icons}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;