import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, Image} from 'react-native';

import HomeScreen from '../screens/homeScreen';
import ArtikelScreen from '../screens/artikelScreen';
import ChatScreen from '../screens/chatScreen';
import AccountScreen from '../screens/accountScreen';

import { styles } from "./stylesTabs";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
            style={styles.navbar} 
            tabBarOptions = {{ showLabel:  false, }}
        >
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Image
                                source={require('../assets/icons/home-nav-g.png')}
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
                                source={require('../assets/icons/artikel-nav-g.png')}
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
                                source={require('../assets/icons/chat-nav-g.png')}
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
                                source={require('../assets/icons/account-nav-g.png')}
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