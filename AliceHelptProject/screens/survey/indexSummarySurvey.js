import React from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./stylesSummary";
import reducerAnswer1 from "./vraag_1/ReduxAnswer1/reducerAnswer1";
import { connect } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducerAnswer1)

const SummarySurvey = ({}) => {
    const navigation = useNavigation();
   
    return (
        <ScrollView>

        <View style={styles.container}>
            <ImageBackground source={require('../../assets/image/bgSurveyKort.png')}>

            <View style={styles.containerSurvey}>

                <View style={styles.containerContentSurvey}>

                    <Text style={styles.title}>
                            Overzicht
                        </Text>
                        
                        <View style={styles.containerQuestions}>
                            <Text style={styles.questionNumber}>
                                Vraag 1
                            </Text>
                            
                            <Text style={styles.question}>
                                Ik voel me veilig in mijn klas
                            </Text> 

                            <Text style={styles.yourAnswer}>
                                Jouw antwoord: {this.props.Answer1}
                            </Text>

                            <Text style={styles.change}>
                                >
                            </Text>

                        </View>
                       
                        <View style={styles.containerQuestions}>

                            <Text style={styles.questionNumber}>
                                Vraag 2
                            </Text> 

                            <Text style={styles.question}>
                                Ik voel me veilig in mijn klas
                            </Text> 

                            <Text style={styles.yourAnswer}>
                                Jouw antwoord:
                            </Text>

                            <Text style={styles.change}>
                                >
                            </Text>
                        </View> 

                        <View style={styles.containerQuestions}>
                            <Text style={styles.questionNumber}>
                                Vraag 3
                            </Text> 

                            <Text style={styles.question}>
                                Ik voel me veilig in mijn klas
                            </Text> 

                            <Text style={styles.yourAnswer}>
                                Jouw antwoord:
                            </Text>

                            <Text style={styles.change}>
                                >
                            </Text>
                        </View> 

                        <View style={styles.containerQuestions}>
                            <Text style={styles.questionNumber}>
                                Vraag 4
                            </Text> 

                            <Text style={styles.question}>
                                Ik voel me veilig in mijn klas
                            </Text> 

                            <Text style={styles.yourAnswer}>
                                Jouw antwoord:
                            </Text>

                            <Text style={styles.change}>
                                >
                            </Text>
                        </View> 

                        <View style={styles.containerQuestions}>
                            <Text style={styles.questionNumber}>
                                Vraag 5
                            </Text>

                            <Text style={styles.question}>
                                Ik voel me veilig in mijn klas
                            </Text>  

                                <Text style={styles.yourAnswer}>
                                    Jouw antwoord:
                                </Text>

                            <Text style={styles.change}>
                                >
                            </Text>
                        </View>

                        <View style={styles.containerQuestions}>
                            <Text style={styles.questionNumber}>
                                Vraag 6
                            </Text> 

                            <Text style={styles.question}>
                                Ik voel me veilig in mijn klas
                            </Text> 

                            <Text style={styles.yourAnswer}>
                                Jouw antwoord:
                            </Text>

                            <Text style={styles.change}>
                                >
                            </Text>
                        </View> 

                    </View>                                    
                    </View>        
                            
                            <View style={styles.containerButtons}>
                                <Pressable
                                style={styles.volgende} 
                                onPress={() => {navigation.navigate('Home');}}>
                                    <Text style={styles.textButton}>Volgende</Text>
                                </Pressable>
                            </View>
                
            
        </ImageBackground>
        </View>
        </ScrollView>

    );
};

function mapStateToProps(state) {
    return {
        Answer1: state.Answer1
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummarySurvey)

