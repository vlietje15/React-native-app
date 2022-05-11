import React from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';
import { styles } from "./stylesHomeScreen";
import Survey from '../components/survey/indexSurvey'
import BlueLine from "../components/blueLine/indexBlueLine";
import ArtikelDag from "../components/artikelVanDeDag/indexArtikelVanDeDag";
import OverAlice from "../components/overAlice/indexOverAlice";

const HomeScreen = ({}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/image/logo-Alice.png')} />


                <View>
                    <Survey />
                </View>

                <View>
                    <BlueLine />
                </View>

                <View>
                    <ArtikelDag />
                </View>

                <View>
                    <BlueLine />
                </View>

                <View>
                    <OverAlice />
                </View>

            </View>
        </ScrollView>
    );
};

export default HomeScreen;

