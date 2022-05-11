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
    width: 146,
    height: 180,
    margin: 4,
  },

  iconSurvey: {
    width: 44,
    height: 50,
    marginLeft: 51,
    marginTop: 22,
  },
  
  titleSurvey: {
    fontSize: 14,
    marginTop: 8,
    marginLeft: 21.5,
    fontWeight: 'bold',
  },

  datumSurvey: {
      fontSize: 10,
      marginTop: 8,
      marginLeft: 55.5, 
  },

  buttonPri: {
    alignItems: 'center',
    backgroundColor:'#00A170',
    borderRadius: 10,
    height: 28,
    width: 70,
    marginTop: 8,
    marginLeft: 37.6,
  },

  buttonSec: {
    alignItems: 'center',
    borderColor:'#00A170',
    borderWidth: 1,
    borderRadius: 10,
    height: 28,
    width: 70,
    marginTop: 12,
    marginLeft: 37.6,
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