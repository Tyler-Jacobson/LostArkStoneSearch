import { combineReducers } from "redux";
import savedBuildsReducer from "./savedBuildsReducer";
import darkmodeReducer from "./darkmodeReducer";
import setSearchBuildsForm from "./setSearchBuildsForm";
import engravingDescriptionsReducer from "./settings/engravingDescriptionsReducer";

const rootReducer = combineReducers({
    savedBuildsReducer,
    darkmodeReducer,
    setSearchBuildsForm,
    engravingDescriptionsReducer
})

export default rootReducer;