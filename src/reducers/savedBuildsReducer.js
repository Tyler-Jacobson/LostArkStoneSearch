
const savedBuildsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_SAVED_BUILD": {
            return [
                ...state,
                action.payload
            ]
        }
        case "REMOVE_SAVED_BUILD": {
            const index = state.indexOf(action.payload)
            const stateCopy = [...state]
            stateCopy.splice(index, 1)
            return stateCopy
        }
        default:
            return state
    }
}
export default savedBuildsReducer;