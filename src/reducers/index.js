import { combineReducers } from "redux";
import savedBuildsReducer from "./savedBuildsReducer"
import darkmodeReducer from "./darkmodeReducer"

const rootReducer = combineReducers({
    savedBuildsReducer,
    darkmodeReducer
})

export default rootReducer