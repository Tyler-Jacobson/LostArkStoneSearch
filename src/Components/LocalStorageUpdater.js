import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSavedBuild, setDarkMode } from "../actions";

function LocalStorageUpdater() {

    const dispatch = useDispatch()
    const savedBuildsRedux = useSelector(state => state.savedBuildsReducer)
    const darkModeRedux = useSelector(state => state.darkmodeReducer)

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

    }, [])

    useEffect(() => {
        localStorage.setItem("buildsList", JSON.stringify(savedBuildsRedux))
    }, [savedBuildsRedux])

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkModeRedux))
    }, [darkModeRedux])


    return ( // does a component actually need a return value?
        <></>
    )
}

export default LocalStorageUpdater;