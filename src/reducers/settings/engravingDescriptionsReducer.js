const engravingDescriptionsReducer = (state = true, action) => {
    switch (action.type) {
        case "SET_ENGRAVING_DESCRIPTIONS": {
            return action.payload
        }
        default: {
            return state
        }
    }
}
export default engravingDescriptionsReducer;