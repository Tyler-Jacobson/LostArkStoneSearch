import popularBuilds from "../data/popular_builds"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addSavedBuild, removeSavedBuild, setSearchBuildsForm } from "../actions";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const endGameEngravings = ["Grudge", "Cursed Doll"]

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      This Engraving is generally considered low priority for tier-1 and tier-2 content, but becomes best in slot at end game
    </Tooltip>
);

function BuildsList() {
    const dispatch = useDispatch()

    const savedBuildsRedux = useSelector(state => state.savedBuildsReducer)
    const darkModeRedux = useSelector(state => state.darkmodeReducer)
    const searchBuildsRedux = useSelector(state => state.setSearchBuildsForm)

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

    useEffect(() => {
        console.log(searchBuildsRedux)
    }, [searchBuildsRedux])

    return (
        <div className="container text-center builds-container mt-3">
            <div className="row saved-builds mb-3">
                {
                    savedBuildsRedux.map(build => {
                        return (
                            <div className="col-md-6 col-lg-4 mb-3 saved-build">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{build.build_name}</h5>
                                        <p className="card-text">Primary: {build.primary_stat}<br />Secondary: {build.secondary_stat}</p>
                                        <button onClick={() => removeBuild(build)} className="btn btn-danger remove-build-button">Remove</button>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {
                                            build.build_engravings.map(engraving => {
                                                if (!endGameEngravings.includes(engraving)) {
                                                    return <li className="list-group-item">{engraving}</li>
                                                } else {
                                                    return <li className="list-group-item">{engraving}<OverlayTrigger placement="right" delay={{ show: 0, hide: 200 }} overlay={renderTooltip}><span> 🛈</span></OverlayTrigger></li>
                                                }
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                savedBuildsRedux.length === 0 ? "" : <hr className="border-2 border-top m-2 mb-4"></hr>
            }
            <div className="d-flex justify-content-center" >
                <input className="form-control w-50 mb-4" type="text" placeholder="Search Builds" value={searchBuildsRedux} onChange={(e) => dispatch(setSearchBuildsForm(e.target.value))}></input>
            </div>
            <div className="builds-list ">
                <div className="row">
                    {
                        searchBuildsRedux.length === 0 ? popularBuilds.map(build => {
                            return (
                                <div className="col-md-6 col-lg-4 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{build.build_name}</h5>
                                            <p className="card-text">Primary: {build.primary_stat}<br />Secondary: {build.secondary_stat}</p>
                                            <button className="btn btn-primary save-build-button" onClick={() => saveBuild(build)}>Save</button>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            {
                                                build.build_engravings.map((engraving, index) => {
                                                    if (!endGameEngravings.includes(engraving)) {
                                                        return <li className="list-group-item"><span className={`prio-${index}`}>{engraving}</span></li>
                                                    } else {
                                                        return <li className="list-group-item"><span className={`prio-${index}`}>{engraving}</span><OverlayTrigger placement="right" delay={{ show: 0, hide: 200 }} overlay={renderTooltip}><span> 🛈</span></OverlayTrigger></li>
                                                    }
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        }) :
                        popularBuilds.map(build => {
                            if (build.build_name.toUpperCase().includes(searchBuildsRedux.toUpperCase())) {
                                return (
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{build.build_name}</h5>
                                                <p className="card-text">Primary: {build.primary_stat}<br />Secondary: {build.secondary_stat}</p>
                                                <button className="btn btn-primary save-build-button" onClick={() => saveBuild(build)}>Save</button>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                {
                                                    build.build_engravings.map((engraving, index) => {
                                                        if (!endGameEngravings.includes(engraving)) {
                                                            return <li className="list-group-item"><span className={`prio-${index}`}>{engraving}</span></li>
                                                        } else {
                                                            return <li className="list-group-item"><span className={`prio-${index}`}>{engraving}</span><OverlayTrigger placement="right" delay={{ show: 0, hide: 200 }} overlay={renderTooltip}><span> 🛈</span></OverlayTrigger></li>
                                                        }
                                                        
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default BuildsList