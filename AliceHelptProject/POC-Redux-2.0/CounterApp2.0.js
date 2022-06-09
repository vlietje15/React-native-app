import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { connect } from 'react-redux'
import RadioGroup,{Radio} from "react-native-radio-input";

class CounterAppV2 extends Component {
    // getChecked = (value) => {
    //     // value = our checked value
    //     console.log(value)
    //   }

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
            <View style={styles.container}>
                
                <RadioGroup getChecked={this.getChecked}>
                    <Radio label={"Eens"} value={"Agree"}/>
                    <Radio label={"Gedeeltelijk mee eens"} value={"PartlyAgree"}/>
                    <Radio label={"Neutraal"} value={"Neutral"}/>
                    <Radio label={"Gedeeltelijk mee oneens"} value={"PartlyDisagree"}/>
                    <Radio label={"Oneens"} value={"Disagree"}/>
                </RadioGroup>

                
                    {/* <TouchableOpacity onPress={() => this.props.agree()}>
                        <Text style={{ fontSize: 20 }}>Agree</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.partlyAgree()}>
                        <Text style={{ fontSize: 20 }}>PartlyAgree</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.neutral()}>
                        <Text style={{ fontSize: 20 }}>Neutral</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.props.partlydisAgree()}>
                        <Text style={{ fontSize: 20 }}>PartlyDisagree</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.disagree()}>
                        <Text style={{ fontSize: 20 }}>Disagree</Text>
                    </TouchableOpacity> */}                 
                    
                    <Text style={{ fontSize: 20, marginTop: 50, }}>Jouw antwoord: {this.props.Antwoord1}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        Antwoord1: state.Antwoord1
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterAppV2)


const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     marginLeft: 70,
    // }
});