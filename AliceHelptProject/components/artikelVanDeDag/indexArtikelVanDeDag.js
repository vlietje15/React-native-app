import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { RollInRight } from "react-native-reanimated";
import { styles } from "./stylesArtikelVanDeDag";


const ArtikelDag = ({}) => {
  return (
      <View style={styles.surveyWrapper}>
        <View style={styles.square} >
            <Image style={styles.fotoArtikel} source={require('../../assets/image/hond.jpg')} />

        </View>

        {/* <View>
            <blueLine />
        </View> */}

        <View style={styles.square} >
            <View style={styles.tekstArtikel}>
                <Text style={styles.subTitleArtikel}>artikel van de dag</Text>
                
                <Text style={styles.titleArtikel}>Huisdieren helpen je met vrienden maken</Text>
                
                <Text style={styles.paragraafArtikel}>
                    Huisdieren zijn diertrjes die veel om jou geven en er altijd voor je zijn. Ongeacht hoe jij je voelt.
                </Text>

                <Pressable style={styles.buttonArtikel} >
                <Text style={styles.textButtonArtikel}>
                Lees verder</Text>
                </Pressable>
            </View>
        </View>
      </View>
  );
}



export default ArtikelDag;