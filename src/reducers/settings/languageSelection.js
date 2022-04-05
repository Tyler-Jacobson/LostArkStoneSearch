const languageSelectionReducer = (state = "EN", action) => {
    switch (action.type) {
        case "EN": {
            return action.payload
        }
        case "SP": {
            return action.payload
        }
        default: {
            return state
        }
    }
}
export default languageSelectionReducer;