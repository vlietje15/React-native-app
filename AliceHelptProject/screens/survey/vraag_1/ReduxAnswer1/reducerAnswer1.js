const initialState = {
    Answer1: ""
}
const reducerAnswer1 = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREE':
            return { Answer1: state.Answer1 = "Agree" }
        case 'PARTLYAGREE':
            return { Answer1: state.Answer1 = "Partly agree" }
        case 'NEUTRAL':
            return { Answer1: state.Answer1 = "Neutral" }
        case 'PARTLYDISAGREE':
            return { Answer1: state.Answer1 = "Partly disagree" }
        case 'DISAGREE':
            return { Answer1: state.Answer1 = "Disagree" }
    }
    return state
}

export default reducerAnswer1;