export const addSavedBuild = (build) => {
    return {
        type: "ADD_SAVED_BUILD",
        payload: build
    }
}
export const removeSavedBuild = (build) => {
    return {
        type: "REMOVE_SAVED_BUILD",
        payload: build
    }
}