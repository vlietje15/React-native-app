import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { createStore } from 'redux'
import CounterAppV2 from "./CounterApp2.0";
import { Provider } from 'react-redux'

const initialState = {
    Antwoord1: ""
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREE':
            return { Antwoord1: state.Antwoord1 = "Agree" }
        case 'PARTLYAGREE':
            return { Antwoord1: state.Antwoord1 = "Partly agree" }
        case 'NEUTRAL':
            return { Antwoord1: state.Antwoord1 = "Neutral" }
        case 'PARTLYDISAGREE':
            return { Antwoord1: state.Antwoord1 = "Partly disagree" }
        case 'DISAGREE':
            return { Antwoord1: state.Antwoord1 = "Disagree" }
    }
    return state
}

const store = createStore(reducer)

class TestReduxV2 extends Component {

    render() {
        return (
            <Provider store={store}>
                <CounterAppV2 />
            </Provider>
        );
    }
}

export default TestReduxV2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});