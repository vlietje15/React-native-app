import React from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import { styles } from "../style/stylesSurveyVragen";
import MultipleChoice from "react-native-multiple-choice-picker";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from "@react-navigation/native";
import RadioGroup,{Radio} from "react-native-radio-input";

const Vraag2 = ({}) => {
    const navigation = useNavigation();
    getChecked = (value) => {
        // value = our checked value
        console.log(value)
      }

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
                            Vraag 2
                        </Text>

                        <Text style={styles.vraag}>
                            Ik voel me veilig op school
                        </Text>

                               <RadioGroup getChecked={this.getChecked}>
                                    <Radio iconName={"lens"} label={"Eens"} value={"Agree"}/>
                                    <Radio iconName={"lens"} label={"Gedeeltelijk mee eens"} value={"PartlyAgree"}/>
                                    <Radio iconName={"lens"} label={"Neutraal"} value={"Neutral"}/>
                                    <Radio label={"Gedeeltelijk mee oneens"} value={"PartlyDisagree"}/>
                                    <Radio label={"Oneens"} value={"Disagree"}/>
                                </RadioGroup>

                    </View>

                            <View style={styles.progress}>
                                <View style={styles.circleVol} />
                                <View style={styles.circleHighlight} />
                                <View style={styles.circle} />
                                <View style={styles.circle} />
                                <View style={styles.circle} />
                                <View style={styles.circle} />
                            </View>
                            
                            
                            
                            <View style={styles.containerButtons}>
                                <Pressable
                                style={styles.back} 
                                onPress={() => {navigation.navigate('Vraag1');}}>
                                    <Text style={styles.textButton}>Terug</Text>
                                </Pressable>

                                <Pressable
                                style={styles.volgende} 
                                onPress={() => {navigation.navigate('Vraag3');}}>
                                    <Text style={styles.textButton}>Volgende</Text>
                                </Pressable>
                            </View>

                        
                                
            </View>
                


            </ImageBackground>

        </View>
    );

};

export default Vraag2;

