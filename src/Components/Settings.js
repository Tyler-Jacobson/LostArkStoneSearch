import settingsGearWhiteImg from "../assets/settings-gear-xsm.png"
import { useSelector, useDispatch } from "react-redux"
import { settingsWindowOpen } from "../actions"
import { useEffect } from "react"

function Settings() {

    const dispatch = useDispatch()
    const settingsWindowRedux = useSelector(state => state.settingsWindowReducer)

    useEffect(() => {
        console.log(settingsWindowRedux)
    }, [])
    
    function dispatchSettingsWindow() {
        dispatch(settingsWindowOpen(!settingsWindowRedux))
        console.log(settingsWindowRedux)
    }

    return (
        <div className="position-fixed bottom-0 end-0 m-2 cursor-pointer" role="button" onClick={dispatchSettingsWindow}>
            {/* <img src={settingsGearWhiteImg} alt="settings gear" className="settings-gear" /> */}
        </div>
    )
}
export default Settings