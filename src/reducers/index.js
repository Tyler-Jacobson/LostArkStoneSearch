import { combineReducers } from "redux";
import savedBuildsReducer from "./savedBuildsReducer";
import darkmodeReducer from "./darkmodeReducer";
import setSearchBuildsForm from "./setSearchBuildsForm";
import engravingDescriptionsReducer from "./settings/engravingDescriptionsReducer";
import engravingPriorityReducer from "./settings/engravingPriorityReducer";

const rootReducer = combineReducers({
    savedBuildsReducer,
    darkmodeReducer,
    setSearchBuildsForm,
    engravingDescriptionsReducer,
    engravingPriorityReducer
})

export default rootReducer;