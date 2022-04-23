const engravingPriorityReducer = (state = true, action) => {
    switch (action.type) {
        case "SET_ENGRAVING_PRIORITY_TOOLTIPS": {
            return action.payload
        }
        default: {
            return state
        }
    }
}
export default engravingPriorityReducer;