import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSavedBuild, setDarkMode, setEngravingDescriptions } from "../actions";

function LocalStorageUpdater() {

    const dispatch = useDispatch()
    const savedBuildsRedux = useSelector(state => state.savedBuildsReducer)
    const darkModeRedux = useSelector(state => state.darkmodeReducer)
    const engravingDescriptionsRedux = useSelector(state => state.engravingDescriptionsReducer)

    useEffect(() => {
        if ("buildsList" in localStorage) {
            const buildsFromStorage = JSON.parse(localStorage.getItem("buildsList"))
            buildsFromStorage.forEach((build) => {
                dispatch(addSavedBuild(build))
            })
        }
        if ("darkMode" in localStorage) {
            const darkMode = JSON.parse(localStorage.getItem("darkMode"))
            dispatch(setDarkMode(darkMode))
        }
        if ("engravingDescriptions" in localStorage) {
            const engravingDescriptions = JSON.parse(localStorage.getItem("engravingDescriptions"))
            dispatch(setEngravingDescriptions(engravingDescriptions))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem("buildsList", JSON.stringify(savedBuildsRedux))
    }, [savedBuildsRedux])

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkModeRedux))
    }, [darkModeRedux])

    useEffect(() => {
        localStorage.setItem("engravingDescriptions", JSON.stringify(engravingDescriptionsRedux))
    }, [engravingDescriptionsRedux])


    return ( // does a component actually need a return value?
        <></>
    )
}

export default LocalStorageUpdater;