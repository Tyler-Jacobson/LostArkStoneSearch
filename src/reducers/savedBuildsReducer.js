
const savedBuildsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_SAVED_BUILD":
            return [
                ...state,
                action.payload
            ]
        case "REMOVE_SAVED_BUILD":
            return []

        default:
            return state
    }
}
export default savedBuildsReducer;