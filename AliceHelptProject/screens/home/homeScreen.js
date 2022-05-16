import React from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import { styles } from "./stylesHomeScreen";
import Survey from '../../components/survey/indexSurvey'
import BlueLine from "../../components/blueLine/indexBlueLine";
import ArtikelDag from "../../components/artikelVanDeDag/indexArtikelVanDeDag";
import OverAlice from "../../components/overAlice/indexOverAlice";

const HomeScreen = ({}) => {
    return (
        <ScrollView>
            <ImageBackground source={require('../../assets/image/Achtergrond.png')} style={styles.container}> 
                
                <View style={styles.container}>

                    <Image style={styles.logo} source={require('../../assets/image/logo-Alice.png')} />

                    <View>
                        <Survey />
                    </View>

                </View>

                    <View>
                        <BlueLine />
                    </View>

                <View style={styles.container}>

                    <View>
                        <ArtikelDag />
                    </View>

                </View>

                    <View>
                        <BlueLine />
                    </View>

                <View style={styles.container}>

                    <View>
                        <OverAlice />
                    </View>

                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default HomeScreen;

