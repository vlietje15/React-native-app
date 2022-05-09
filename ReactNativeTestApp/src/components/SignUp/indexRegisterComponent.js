import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Container from '../../components/Container/indexContainer';
import CustomButton from '../../components/CustomButton/indexCustomButton';
import Input from '../../components/Input/indexInput';
import styles from './stylesRegisterComponent';
import { LOGIN } from "../../constants/routeNames";
import { useNavigation } from '@react-navigation/native';

const RegisterComponent = ({
    onSubmit,
    onChange,
    form,
    errors
}) => {

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
            <Text style={styles.subTitle}>Create a free account</Text>

            <View style={styles.form}>
                <Input 
                label="Username"
                iconPosition='right'
                placeholder="Enter Username"
                error={errors.userName}
                onChangeText={(value) => {
                    onChange({name: 'userName', value});
                }}
                />
                
                <Input 
                label="First name"
                iconPosition='right'
                placeholder="Enter First name"
                onChangeText={(value) => {
                   onChange({name: 'firstName', value});
                }}
                error={errors.firstName}
                />

                <Input 
                label="Last name"
                iconPosition='right'
                placeholder="Enter last name"
                error={errors.lastName}
                onChangeText={(value) => {
                   onChange({name: 'lastName', value});
                }}
                />

                <Input 
                label="Email"
                iconPosition='right'
                placeholder="Enter Email"
                error={errors.email}
                onChangeText={(value) => {
                   onChange({name: 'email', value});
                }}
                />

                <Input
                label="Password"
                placeholder="Enter Password"
                secureTextEntry={true}
                icon={<Text>SHOW</Text>}
                iconPosition='right'
                error={errors.password}
                onChangeText={(value) => {
                   onChange({name: 'password', value});
                }}
                />

                <CustomButton onPress={onSubmit} primary title="Submit" />

                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Already a account?</Text>
                    <TouchableOpacity 
                        onPress={() => {
                            navigate(LOGIN);
                        }}>
                        <Text style={styles.linkBtn}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Container>
    );
};

export default RegisterComponent;