import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { createStore } from 'redux'
import CounterApp from "./CounterApp";
import { Provider } from 'react-redux'

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state
}

const store = createStore(reducer)

class TestRedux extends Component {

    render() {
        return (
            <Provider store={store}>
                <CounterApp />
            </Provider>
        );
    }
}

export default TestRedux

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});