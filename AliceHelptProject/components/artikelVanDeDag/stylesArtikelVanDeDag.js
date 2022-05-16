import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 surveyWrapper: {
    flexDirection: "row",
  },

  square: {
    borderRadius: 10,
    marginTop: 46,
    marginBottom: 40,
    width: '45%',
    height: 180,
    margin: 4,
  },

  fotoArtikel: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  titleArtikel: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: 'bold',
    color: '#000'
  },

  subTitleArtikel:{
    fontSize: 10,
  },

  paragraafArtikel: {
    fontSize: 12,
    marginTop: 8,
    color: '#000'

  },

  textButtonArtikel: {
    marginTop: 8,
    fontSize: 12,
    color: '#00A170',
  },


});

export {styles}