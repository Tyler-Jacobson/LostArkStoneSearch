const tooltipsReducer = (state = false, action) => {
    switch (action.type) {
        case "SET_TOOLTIPS_ON": {
            return action.payload
        }
        default: {
            return state
        }
    }
}
export default tooltipsReducer;