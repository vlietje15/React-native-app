import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { connect } from 'react-redux'
import RadioGroup,{Radio} from "react-native-radio-input";

class Answer1Redux extends Component {

    getChecked = (value) => {
        if (value == "Agree") {
            return this.props.agree()
        } if (value == "PartlyAgree") {
            return this.props.partlyAgree()
        } if (value == "Neutral") {
            return this.props.neutral()
        } if (value == "PartlyDisagree") {
            return this.props.partlydisAgree()
        } if (value == "Disagree") {
            return this.props.disagree()
        }
    }

    render() {
        return (
            <View>
                <RadioGroup getChecked={this.getChecked}>
                    <Radio label={"Eens"} value={"Agree"}/>
                    <Radio label={"Gedeeltelijk mee eens"} value={"PartlyAgree"}/>
                    <Radio label={"Neutraal"} value={"Neutral"}/>
                    <Radio label={"Gedeeltelijk mee oneens"} value={"PartlyDisagree"}/>
                    <Radio label={"Oneens"} value={"Disagree"}/>
                </RadioGroup>             
                    
                    <Text style={{ fontSize: 14, marginTop: 50, }}>Jouw antwoord: {this.props.Answer1}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        Answer1: state.Answer1
    }
}

function mapDispatchToProps(dispatch) {
    return {
        agree: () => dispatch({ type: 'AGREE' }),
        partlyAgree: () => dispatch({ type: 'PARTLYAGREE' }),
        neutral: () => dispatch({ type: 'NEUTRAL' }),
        partlydisAgree: () => dispatch({ type: 'PARTLYDISAGREE' }),
        disagree: () => dispatch({ type: 'DISAGREE' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer1Redux)