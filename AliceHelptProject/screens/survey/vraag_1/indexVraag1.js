import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import { styles } from "../style/stylesSurveyVragen";
import MultipleChoice from "react-native-multiple-choice-picker";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
// import CheckBoxAntwoorden from '../../../testCheckBox';
import RadioGroup,{Radio} from "react-native-radio-input";

const Vraag1 = ({}) => {
    const navigation = useNavigation();
    getChecked = (value) => {
        // value = our checked value
        console.log(value)
      }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/image/bgSurveyKort.png')}> 

            <Pressable
                    style={styles.backHome} >
                        <Text style={styles.textButtonBackHome}
                        onPress={() => {navigation.navigate('Home');}}
                        >
                            Back
                        </Text>
            </Pressable>


            <View style={styles.containerSurvey}>

                <View style={styles.containerContentSurvey}>

               

                    <Text style={styles.titel}>
                            Vraag 1
                        </Text>

                        <Text style={styles.vraag}>
                            Ik voel me veilig in mijn klas
                        </Text>  

                               <RadioGroup getChecked={this.getChecked}>
                                    <Radio iconName={"lens"} label={"Eens"} value={"Agree"}/>
                                    <Radio iconName={"lens"} label={"Gedeeltelijk mee eens"} value={"PartlyAgree"}/>
                                    <Radio iconName={"lens"} label={"Neutraal"} value={"Neutral"}/>
                                    <Radio label={"Gedeeltelijk mee oneens"} value={"PartlyDisagree"}/>
                                    <Radio label={"Oneens"} value={"Disagree"}/>
                                </RadioGroup>           

                        {/* https://github.com/nguythaitinh/react-native-multiple-choice-picker*/}
                        {/* <TouchableOpacity> 
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
                                ]}
                                // selectedOptions={['']}
                                MaxSelectOptions={1}
                                
                                />
                            </TouchableOpacity> */}

                    {/* <View>
                        <CheckBoxAntwoorden />
                    </View>    */}

                    </View>

                            <View style={styles.progress}>
                                <View style={styles.circleHighlight} />
                                <View style={styles.circle} />
                                <View style={styles.circle} />
                                <View style={styles.circle} />
                                <View style={styles.circle} />
                                <View style={styles.circle} />
                            </View>
                            
                            
                            
                            <View style={styles.containerButtons}>
                                <Pressable
                                style={styles.back} 
                                onPress={() => {
                                    navigation.navigate('Home');
                                }}>
                                    <Text style={styles.textButton}>Annuleren</Text>
                                </Pressable>

                                <Pressable
                                style={styles.volgende} 
                                onPress={() => {navigation.navigate('Vraag2');}}>
                                    <Text style={styles.textButton}>Volgende</Text>
                                </Pressable>
                            </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Vraag1;

