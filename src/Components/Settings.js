import settingsGearWhiteImg from "../assets/settings-gear-xsm.png";
import { useSelector, useDispatch } from "react-redux";
import { settingsWindowOpen } from "../actions";
import { useEffect } from "react";
import { setDarkMode, setEngravingDescriptions, setEngravingPriorityTooltips } from "../actions";

function Settings() {

    const dispatch = useDispatch()
    const darkModeRedux = useSelector(state => state.darkmodeReducer)
    const engravingDescriptionsRedux = useSelector(state => state.engravingDescriptionsReducer)
    const engravingPriorityTooltipsRedux = useSelector(state => state.engravingPriorityReducer)

    return (
        <div className="container text-center top-engravings-container d-sm-flex align-items-center flex-sm-column mt-3">
            {/* <img src={settingsGearWhiteImg} alt="settings gear" className="settings-gear" /> */}
            <h1>Settings</h1>
            <ul className="col-md-6 list-inline">

                <li className="list-group-item d-sm-flex w-100">
                    <div className="w-50 custom-spacer">
                        <label className="form-check-label" for="flexSwitchCheckDefault">Engraving Description Tooltips</label>
                    </div>
                    <div className="form-check form-switch w-50 d-sm-flex justify-content-center custom-input-container">
                        <input onClick={() => dispatch(setEngravingDescriptions(!engravingDescriptionsRedux))} checked={engravingDescriptionsRedux} className="form-check-input d-sm-inline-block" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    </div>
                </li>

                <li className="list-group-item d-sm-flex w-100">
                    <div className="w-50 custom-spacer">
                        <label className="form-check-label" for="flexSwitchCheckDefault">Engraving Priority Tooltips</label>
                    </div>
                    <div className="form-check form-switch w-50 d-sm-flex justify-content-center custom-input-container">
                        <input onClick={() => dispatch(setEngravingPriorityTooltips(!engravingPriorityTooltipsRedux))} checked={engravingPriorityTooltipsRedux} className="form-check-input d-sm-inline-block" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Settings;