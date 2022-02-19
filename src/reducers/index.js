import { combineReducers } from "redux";
// import qualifiedReducer from "./qualifiedReducer";
import savedBuildsReducer from "./savedBuildsReducer"

const rootReducer = combineReducers({
    savedBuildsReducer
    // qualified: qualifiedReducer
})

export default rootReducer