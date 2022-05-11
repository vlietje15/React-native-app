import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { RollInRight } from "react-native-reanimated";
import { styles } from "./stylesSurvey";


const Survey = ({}) => {
  return (
      <View style={styles.surveyWrapper}>
        <View style={styles.square} >
        <Image style={styles.iconSurvey} source={require('../../assets/icons/SurveyIcons/periode-survey-icon.png')} />
  
            <Text style={styles.titleSurvey}>Periode Survey</Text>
            <Text style={styles.datumSurvey}>23-3-22</Text>

            <Pressable style={styles.buttonPri} >
              <Text style={styles.textButtonPri}>Start</Text>
            </Pressable>

        </View>

        <View style={styles.square} >
        <Image style={styles.iconSurvey} source={require('../../assets/icons/SurveyIcons/algemeen-survey-icon.png')} />

          <Text style={styles.titleSurvey}>Hoe was je dag vandaag?</Text>

            <Pressable style={styles.buttonSec} >
              <Text style={styles.textButtonSec}>Start</Text>
            </Pressable>
        </View>
      </View>
  );
}



export default Survey;