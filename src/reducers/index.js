import { combineReducers } from "redux";
import savedBuildsReducer from "./savedBuildsReducer"
import darkmodeReducer from "./darkmodeReducer"
import setSearchBuildsForm from "./setSearchBuildsForm";
import settingsWindowReducer from "./settingsWindowOpen";

const rootReducer = combineReducers({
    savedBuildsReducer,
    darkmodeReducer,
    setSearchBuildsForm,
    settingsWindowReducer
})

export default rootReducer