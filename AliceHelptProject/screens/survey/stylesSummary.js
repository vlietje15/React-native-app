import { BottomSheetAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

   backHome:{
        width: 72,
        height: 32,
        backgroundColor: 'none',
        marginLeft: 37,
        marginTop: 27,
    },

    textButtonBackHome:{
        color: '#fff',
        fontSize: 18,
        Color: '#3975BB'
    },

    containerSurvey:{
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 600,
        width: 370,
        marginTop: 25,
        alignSelf: 'center'
    },

    containerContentSurvey:{
      marginTop: 30,
      width:  '80%',  
    //   backgroundColor: 'pink',
      alignSelf: 'center',
    },

    containerQuestions:{
    //   backgroundColor: 'pink',
      marginBottom: '5%',
      width: '98%'
    },

    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 12,
    },

    questionNumber: {
        fontSize: 18,
        color: '#000',
        marginBottom: 5,
        fontWeight: 'bold',
    },

    question: {
        fontSize: 14,
        color: '#000',
        marginBottom: 5,
    },

    yourAnswer: {
        fontSize: 14,
        color: '#3975BB',
        fontWeight: 'bold',
    },

    change: {
        color: '#00A170',
        position: 'absolute',
        right: 0,
        top: 15,
        fontSize: 30,
        opacity: 0.3,
    },

    volgende:{
        height: 50,
        width: 250,
        borderRadius: 10,
        backgroundColor: '#00A170',
        alignSelf: 'center',
        marginBottom: 50,
        marginTop: 50,
    },

    textButton: {
        textAlign: 'center',
        marginTop: 12,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }

});

export {styles}