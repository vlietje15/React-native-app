import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import Container from '../../components/Container/indexContainer';
import CustomButton from '../../components/CustomButton/indexCustomButton';
import Input from '../../components/Input/indexInput';
import styles from './stylesLoginComponent';
import { REGISTER } from "../../constants/routeNames";
import { useNavigation } from '@react-navigation/native';

const LoginComponent = () => {
    const {navigate} = useNavigation();
    return(
        <Container>

        <Image 
            height={70}
            width={70}
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage} 
        />


        <View>

            <Text style={styles.title}>Welcome to RNContacts</Text>
            <Text style={styles.subTitle}>Please login here</Text>

            <View style={styles.form}>
                <Input 
                label="Username"
                iconPosition='right'
                placeholder="Enter Username"
                />

                <Input
                label="Password"
                placeholder="Enter Password"
                secureTextEntry={true}
                icon={<Text>SHOW</Text>}
                iconPosition='right'
                />

                <CustomButton primary title="Submit" />

                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Need a new account?</Text>
                    <TouchableOpacity 
                        onPress={() => {
                            navigate(REGISTER);
                        }}>
                        <Text style={styles.linkBtn}>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

     

    </Container>

    );
};

export default LoginComponent;