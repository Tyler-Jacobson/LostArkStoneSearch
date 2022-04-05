import { combineReducers } from "redux";
import savedBuildsReducer from "./savedBuildsReducer";
import darkmodeReducer from "./darkmodeReducer";
import setSearchBuildsForm from "./setSearchBuildsForm";

const rootReducer = combineReducers({
    savedBuildsReducer,
    darkmodeReducer,
    setSearchBuildsForm
})

export default rootReducer;