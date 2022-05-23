import React from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import { styles } from "../style/stylesSurveyVragen";
import MultipleChoice from "react-native-multiple-choice-picker";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from "@react-navigation/native";

const Vraag3 = ({}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/image/bgSurveyKort.png')}> 

            <Pressable
                    style={styles.backHome} 
                    onPress={() => {navigation.navigate('Home');}}
                    >
                        <Text style={styles.textButtonBackHome}>
                            Back
                        </Text>
            </Pressable>

            <View style={styles.containerSurvey}>

                <View style={styles.containerContentSurvey}>

                    <Text style={styles.titel}>
                            Vraag 3
                        </Text>

                        <Text style={styles.vraag}>
                            Ik voel me prettig
                        </Text>

                        <MultipleChoice
                            direction={'column'}
                            chosenColor={'#3975BB'}
                            chosenTextColor={'#000'}
                            chosenIndex={'none'}
                            choices={[
                                'Eens',
                                'Gedeeltelijk mee eens',
                                'Neutraal',
                                'Gedeeltelijk oneens',
                                'Oneens'
                            ]}/>

                    </View>

                            <View style={styles.progress}>
                                <View style={styles.circleVol} />
                                <View style={styles.circleVol} />
                                <View style={styles.circleHighlight} />
                                <View style={styles.circle} />
                                <View style={styles.circle} />
                                <View style={styles.circle} />
                            </View>
                            
                            
                            
                            <View style={styles.containerButtons}>
                                <Pressable
                                style={styles.back} 
                                onPress={() => {navigation.navigate('Vraag2');}}>
                                    <Text style={styles.textButton}>Terug</Text>
                                </Pressable>

                                <Pressable
                                style={styles.volgende} 
                                onPress={() => {navigation.navigate('Vraag4');}}>
                                    <Text style={styles.textButton}>Volgende</Text>
                                </Pressable>
                            </View>

                        
                                
            </View>
                


            </ImageBackground>

        </View>
    );
};

export default Vraag3;

