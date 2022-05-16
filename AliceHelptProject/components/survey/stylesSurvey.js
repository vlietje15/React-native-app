import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 surveyWrapper: {
    flexDirection: "row",
  },

  square: {
    borderRadius: 10,
    marginTop: 46,
    marginBottom: 40,
    borderColor: '#3975BB',
    borderWidth: 1.5,
    width: '45%',
    height: 180,
    margin: 4,
  },

  gap :{
    width: '5%',
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconSurvey: {
    width: 44,
    height: 50,
    marginTop: 22,
  },
  
  titleSurvey: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
  },

  datumSurvey: {
      fontSize: 10,
      marginTop: 8,
      color: '#000'
  },

  buttonPri: {
    alignItems: 'center',
    backgroundColor:'#00A170',
    borderRadius: 10,
    height: 28,
    width: 70,
    marginTop: 8,
  },

  buttonSec: {
    alignItems: 'center',
    borderColor:'#00A170',
    borderWidth: 1,
    borderRadius: 10,
    height: 28,
    width: 70,
    marginTop: 12,
  },

  textButtonPri: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },

  textButtonSec: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00A170',
    textAlign: 'center'
  },

});

export {styles}