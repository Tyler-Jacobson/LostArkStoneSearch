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
export const setDarkMode = (state) => {
    return {
        type: "SET_DARK_MODE",
        payload: state
    }
}
export const setSearchBuildsForm = (state) => {
    return {
        type: "SET_SEARCH_BUILDS_FORM",
        payload: state
    }
}
export const settingsWindowOpen = (state) => {
    return {
        type: "SETTINGS_WINDOW_OPEN",
        payload: state
    }
}