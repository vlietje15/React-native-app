import React from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import { styles } from "../style/stylesSurveyVragen";
import MultipleChoice from "react-native-multiple-choice-picker";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from "@react-navigation/native";

const Vraag6 = ({}) => {
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
                            Vraag 6
                        </Text>

                        <Text style={styles.vraag}>
                            Ik kan makkelijk vrienden maken
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
                                <View style={styles.circleVol} />
                                <View style={styles.circleVol} />
                                <View style={styles.circleVol} />
                                <View style={styles.circleHighlight} />
                            </View>
                            
                            
                            
                            <View style={styles.containerButtons}>
                                <Pressable
                                style={styles.back} 
                                onPress={() => {navigation.navigate('Vraag5');}}>
                                    <Text style={styles.textButton}>Terug</Text>
                                </Pressable>

                                <Pressable
                                style={styles.volgende} 
                                onPress={() => {navigation.navigate('Home');}}>
                                    <Text style={styles.textButton}>Volgende</Text>
                                </Pressable>
                            </View>

                        
                                
            </View>
                


            </ImageBackground>

        </View>
    );
};

export default Vraag6;

