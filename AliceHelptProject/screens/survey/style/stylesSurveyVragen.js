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
        width: 320,
        marginTop: 25,
        alignSelf: 'center'
    },

    containerContentSurvey:{
      marginLeft: 36,
      marginTop: 30,  
    },

    titel:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 12,
    },

    vraag: {
        fontSize: 18,
        color: '#000',
        marginBottom: 15,
    },

    progress:{
        // backgroundColor: '#Fbf',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 40,
    },

    circle:{
        height: 20,
        width: 20,
        borderRadius: 20 / 2,
        // backgroundColor: '#f0b',
        borderColor: '#979797',
        borderWidth: 1,
        marginLeft: 2.5,
        marginRight: 2.5,
    },

    circleHighlight:{
        height: 20,
        width: 20,
        borderRadius: 20 / 2,
        borderColor: '#F6AE2D',
        borderWidth: 1,
        marginLeft: 2.5,
        marginRight: 2.5,
    },
    
    circleVol:{
        height: 20,
        width: 20,
        borderRadius: 20 / 2,
        backgroundColor: '#F6AE2D',
        borderColor: '#F6AE2D',
        borderWidth: 1,
        marginLeft: 2.5,
        marginRight: 2.5,
    },    

    containerButtons:{
        marginTop: 50, 
        flexDirection: 'row',
        // backgroundColor: '#f0b',
        alignSelf: 'center'
    },

    back:{
        height: 50,
        width: 115,
        borderRadius: 10,
        backgroundColor: '#979797',
        marginRight: 30,
    },

    volgende:{
        height: 50,
        width: 115,
        borderRadius: 10,
        backgroundColor: '#00A170',
        right: 0,
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