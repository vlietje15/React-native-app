import React, {useState} from "react";
import CheckBox from "@react-native-community/checkbox";
import {View, Text, Button, StyleSheet, Image, ScrollView, ImageBackground, onPress} from 'react-native';
import { setMaxListeners } from "npm/lib/npm";
import { circle } from "react-native/Libraries/Animated/Easing";
import RadioGroup,{Radio} from "react-native-radio-input";


const CheckBoxAntwoorden = ({}) => {
  getChecked = (value) => {
    // value = our checked value
    console.log(value)
  }
//     // const [isSelected, setSelection] = useState(false);
//     const [Agree, setAgree] = useState(false);
//     const [PartlyAgree, setPartlyAgree] = useState(false);
//     const [Neutral, setNeutral] = useState(false);
//     const [PartlyDisagree, setPartlyDisagree] = useState(false)
//     const [Disagree, setDisagree] = useState(false);

//     const antwoordAgree = () => {
//       setAgree(true);
//       setPartlyAgree(false);
//       setNeutral(false);
//       setPartlyDisagree(false);
//       setDisagree(false);
//     };

//     const antwoordPartlyAgree = () => {
//       setAgree(false);
//       setPartlyAgree(true);
//       setNeutral(false);
//       setPartlyDisagree(false);
//       setDisagree(false);
//     };

//     const antwoordNeutral = () => {
//       setAgree(false);
//       setPartlyAgree(false);
//       setNeutral(true);
//       setPartlyDisagree(false);
//       setDisagree(false);
//     };

//     const antwoordGedeeltelijkDisagree = () => {
//       setAgree(false);
//       setPartlyAgree(false);
//       setNeutral(false);
//       setPartlyDisagree(true);
//       setDisagree(false);
//     };

//     const antwoordDisagree = () => {
//       setAgree(false);
//       setPartlyAgree(false);
//       setNeutral(false);
//       setPartlyDisagree(false);
//       setDisagree(true);
//     };

        return (
          <RadioGroup getChecked={this.getChecked}>
              <Radio iconName={"lens"} label={"Eens"} value={"Agree"}/>
              <Radio iconName={"lens"} label={"Gedeeltelijk mee eens"} value={"PartlyAgree"}/>
              <Radio iconName={"lens"} label={"Neutraal"} value={"Neutral"}/>
              <Radio label={"Gedeeltelijk mee oneens"} value={"PartlyDisagree"}/>
              <Radio label={"Oneens"} value={"Disagree"}/>
          </RadioGroup>
          // <View style={styles.container}>
          //   <View style={styles.checkboxContainer}>
          //     <CheckBox
          //       value={Agree}
          //       onValueChange={setAgree}
          //       style={styles.checkbox}
          //       onPress={antwoordAgree}
          //       tintColors={{ true: '#3975BB', false: 'black' }}
          //     />
          //     <Text style={styles.label}>Agree</Text>
          //   </View>

          //   <View style={styles.checkboxContainer}>
          //     <CheckBox
          //       value={PartlyAgree}
          //       onValueChange={setPartlyAgree}
          //       tintColors={{ true: '#3975BB', false: 'black' }}
          //       style={styles.checkbox}
          //       onPress={antwoordPartlyAgree}
          //     />
          //     <Text style={styles.label}>Gedeeltelijk mee Agree</Text>
          //   </View>

          //   <View style={styles.checkboxContainer}>
          //     <CheckBox
          //       value={Neutral}
          //       onValueChange={setNeutral}
          //       tintColors={{ true: '#3975BB', false: 'black' }}
          //       style={styles.checkbox}
          //       onPress={antwoordNeutral}
          //     />
          //     <Text style={styles.label}>Neutral</Text>
          //   </View>

          //   <View style={styles.checkboxContainer}>
          //     <CheckBox
          //       value={PartlyDisagree}
          //       onValueChange={setPartlyDisagree}
          //       tintColors={{ true: '#3975BB', false: 'black' }}
          //       style={styles.checkbox}
          //       onPress={antwoordGedeeltelijkDisagree}
          //     />
          //     <Text style={styles.label}>Gedeeltelijk mee onees</Text>
          //   </View>

          //   <View style={styles.checkboxContainer}>
          //     <CheckBox
          //       value={Disagree}
          //       onValueChange={setDisagree}
          //       tintColors={{ true: '#3975BB', false: 'black' }}
          //       style={styles.checkbox}
          //       onPress={antwoordDisagree}
          //     />
          //     <Text style={styles.label}>Disagree</Text>
          //   </View>

            
          //   <Text>Is CheckBox Agree: {Agree ? "👍" : "👎"}</Text>
          //   <Text>Is CheckBox G Agree: {PartlyAgree ? "👍" : "👎"}</Text>
          //   <Text>Is CheckBox Neutral: {Neutral ? "👍" : "👎"}</Text>
          //   <Text>Is CheckBox G Disagree: {PartlyDisagree ? "👍" : "👎"}</Text>
          //   <Text>Is CheckBox Disagree: {Disagree ? "👍" : "👎"}</Text>

          // </View>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        checkboxContainer: {
          flexDirection: "row",
          marginBottom: 10,
        },
        checkbox: {
          alignSelf: "center",
        },
        label: {
          margin: 8,
        },
      });

export default CheckBoxAntwoorden;
