import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, Image} from 'react-native';

import HomeScreen from '../screens/home/homeScreen';
import ArtikelScreen from '../screens/artikel/artikelScreen';
import ChatScreen from '../screens/chat/chatScreen';
import AccountScreen from '../screens/account/accountScreen';

import { styles } from "./stylesTabs";

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
                component={ArtikelScreen} 
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
                component={ChatScreen} 
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
                component={AccountScreen}
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