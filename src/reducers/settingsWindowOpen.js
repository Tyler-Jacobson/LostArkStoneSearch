const settingsWindowOpen = (state = false, action) => {
    switch (action.type) {
        case "SETTINGS_WINDOW_OPEN": {
            return action.payload
        }
        default: {
            return state
        }
    }
}
export default settingsWindowOpen;