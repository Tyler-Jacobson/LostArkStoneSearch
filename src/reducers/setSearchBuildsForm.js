const setSearchBuildsForm = (state = "", action) => {
    switch (action.type) {
        case "SET_SEARCH_BUILDS_FORM": {
            return action.payload
        }
        default:
            return state
    }
}
export default setSearchBuildsForm;