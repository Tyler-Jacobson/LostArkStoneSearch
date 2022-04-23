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
export const setEngravingDescriptions = (state) => {
    return {
        type: "SET_ENGRAVING_DESCRIPTIONS",
        payload: state 
    }
}
export const setEngravingPriorityTooltips = (state) => {
    return {
        type: "SET_ENGRAVING_PRIORITY_TOOLTIPS",
        payload: state 
    }
}