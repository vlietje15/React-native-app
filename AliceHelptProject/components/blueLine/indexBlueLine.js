import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";


const BlueLine = ({}) => {
    return (
        <>
            <View 
                style={{
                    borderBottomColor: '#3975BB',
                    borderBottomWidth: 2,
                    opacity: 0.3,
                    marginLeft: -32.5,
                    marginRight: -32.5,
                }}
            />

            <View 
                style={{
                    borderBottomColor: '#3975BB',
                    borderBottomWidth: 8,
                    opacity: 0.15,
                    marginLeft: -32.5,
                    marginRight: -32.5,
                }}
            />
        </>
    );
};

export default BlueLine;
