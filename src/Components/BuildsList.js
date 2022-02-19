import popularBuilds from "../data/popular_builds"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addSavedBuild } from "../actions";


function BuildsList() {
    const dispatch = useDispatch()

    const savedBuildsRedux = useSelector(state => state.savedBuildsReducer)

    function saveBuild(build) {
        if (!savedBuildsRedux.includes(build)){
            dispatch(addSavedBuild(build))
        }
    }


    return (
        <div className="builds-container">
            <div className="saved-builds">
                {
                    savedBuildsRedux.map(build => {
                        return (
                            <div className="saved-build-container">
                                <h2>{build.build_name}</h2>
                                <div className="saved-engravings-list">
                                    {
                                        build.build_engravings.map(engraving => {
                                            return <h3>{engraving}</h3>
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="builds-list">
                {
                    popularBuilds.map(build => {
                        return (
                            <div className="build-container">
                                <div className="build-info">
                                    <h2>{build.build_name}</h2>
                                    <button onClick={() => saveBuild(build)}>+</button>
                                </div>
                                <div className="engravings-list">
                                    {
                                        build.build_engravings.map(engraving => {
                                            return <h3>{engraving}</h3>
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