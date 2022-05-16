import React from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';
import { styles } from "./stylesOverALice";

const OverAlice = ({}) => {
    return (
        <View style={styles.wrapperOver}>
            <Text style={styles.title}>
                Wie is Alice helpt?
            </Text>
                    
            <Text style={styles.paragraaf}>
                Wij zijn Alice helpt en wij willen mensen helpen. Dit doen we doormiddel van deze app. Elke periode krijg je een enquête en deze kan je invullen. Vervolgens worden alle antwoorden van alle personen door onze AI (Artificial Intelligence) gehaald. Deze AI zal de antwoorden analyseren en vanuit deze analyse wordt geconcludeerd hoe het er voor staat met de mentale gezondheid van de mensen die de enquête hebben ingevuld. De organisator krijgt dan de conclusie te zien en kan hiermee een bepaald onderwerp bespreekbaar maken bij de personen die de enquête hebben ingevuld.
            </Text>
        </View>
    );
};

export default OverAlice;

