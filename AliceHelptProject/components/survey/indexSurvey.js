import React from "react";
import { StyleSheet, View, Text, Pressable, Image, Button, onPress } from "react-native";
import { RollInRight } from "react-native-reanimated";
import { styles } from "./stylesSurvey";

import Vraag1 from "../../screens/survey/vraag_1/indexVraag1";
import { TouchableOpacity } from "react-native-gesture-handler";


const Survey = ({}) => {
  return (
      <View style={styles.surveyWrapper}>
        <View style={styles.square} >
          <View style={styles.content}>
            <Image style={styles.iconSurvey} source={require('../../assets/icons/SurveyIcons/periode-survey-icon.png')} />
      
                <Text style={styles.titleSurvey}>Periode Survey</Text>
                <Text style={styles.datumSurvey}>23-3-22</Text>

                <Pressable
                  style={styles.buttonPri} 
                  onPress={() => navigate(Vraag1)}>
                    <Text style={styles.textButtonPri}>Start</Text>
                </Pressable>

                <Button
                style={styles.buttonPri}
                  onPress={() =>
                    navigate(Vraag1)
                  }
                  title="Go to Brent's profile"
                />
          </View>
        </View>

        <View style={styles.gap} />

        <View style={styles.square} >
          <View style={styles.content}>
            <Image style={styles.iconSurvey} source={require('../../assets/icons/SurveyIcons/algemeen-survey-icon.png')} />

              <Text style={styles.titleSurvey}>Hoe was je dag vandaag?</Text>

                <Pressable style={styles.buttonSec} >
                  <Text style={styles.textButtonSec}>Start</Text>
                </Pressable>
          </View>
        </View>
      </View>
  );
}



export default Survey;''