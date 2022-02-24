import popularBuilds from "../data/popular_builds"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addSavedBuild, removeSavedBuild } from "../actions";


function BuildsList() {
    const dispatch = useDispatch()

    const savedBuildsRedux = useSelector(state => state.savedBuildsReducer)
    const darkModeRedux = useSelector(state => state.darkmodeReducer)

    function saveBuild(build) {
        if (!savedBuildsRedux.includes(build)) {
            dispatch(addSavedBuild(build))
        }
    }

    function removeBuild(build) {
        if (savedBuildsRedux.includes(build)) {
            dispatch(removeSavedBuild(build))
        }
    }

    return (
        <div className="container text-center builds-container">
            <div className="saved-builds">
                {
                    savedBuildsRedux.map(build => {
                        return (
                            <div className={darkModeRedux ? "saved-build-container-darkmode" : "saved-build-container"}>
                                <div className="saved-build">
                                    <h2>{build.build_name}</h2>
                                    <div className="saved-engravings-list">
                                        {
                                            build.build_engravings.map(engraving => {
                                                return <h3>{engraving}</h3>
                                            })
                                        }
                                    </div>
                                </div>
                                <button onClick={() => removeBuild(build)} className="remove-build-button">-</button>
                            </div>
                        )
                    })
                }
            </div>
            <h2 className="note">Note: Engravings are listed in order that you'll generally want to prioritize obtaining and maxing them</h2>
            <div className="builds-list">
                {
                    popularBuilds.map(build => {
                        return (
                            <div className={darkModeRedux ? "build-container-darkmode" : "build-container"} >
                                <div className="build-info">
                                    <div className="build-info-title">
                                        <h2>{build.build_name}</h2>
                                        <h3 className="build-stats">Primary: {build.primary_stat}</h3>
                                        <h3 className="build-stats">Secondary: {build.secondary_stat}</h3>
                                    </div>
                                    <button className="save-build-button" onClick={() => saveBuild(build)}>Save</button>
                                </div>
                                <div className="engravings-list">
                                    {
                                        build.build_engravings.map((engraving, index) => {
                                            return <h3 className={`prio-${index}`}>{engraving}</h3>
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default BuildsList