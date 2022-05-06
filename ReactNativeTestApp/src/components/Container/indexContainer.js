import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './stylesCommonContainer';


const Container = ({children}) => {
    return(
        <ScrollView>
            <View style={styles.wrapper}>
                {children}
            </View>
        </ScrollView>
    );
};

export default Container;