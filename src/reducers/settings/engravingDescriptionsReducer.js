const engravingDescriptionsReducer = (state = false, action) => {
    switch (action.type) {
        case "SET_ENGRAVING_DESCRIPTIONS_ON": {
            return action.payload
        }
        default: {
            return state
        }
    }
}
export default engravingDescriptionsReducer;