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
            <div className="row saved-builds">
                {
                    savedBuildsRedux.map(build => {
                        return (
                            <div className="col-md-6 col-lg-4 mb-3 saved-build">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{build.build_name}</h5>
                                        <button onClick={() => removeBuild(build)} className="btn btn-danger remove-build-button">-</button>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {
                                            build.build_engravings.map(engraving => {
                                                return <li className="list-group-item"><span className="">{engraving}</span></li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="builds-list">
            <div className="row">
                {
                    popularBuilds.map(build => {
                        return (
                            <div className="col-md-6 col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{build.build_name}</h5>
                                        <p className="card-text">Primary: {build.primary_stat}<br />Secondary: {build.secondary_stat})</p>
                                        <button className="btn btn-primary save-build-button" onClick={() => saveBuild(build)}>Save</button>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {
                                            build.build_engravings.map((engraving, index) => {
                                                return <li className="list-group-item"><span className={`prio-${index}`}>{engraving}</span></li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default BuildsList