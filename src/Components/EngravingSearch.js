import React, { useEffect, useState } from "react";
import Select from 'react-select';
//import '../App.css';
import '../css/bootstrap-night.css';
import '../css/toolkit.css';
import popularBuilds from "../data/popular_builds";
import engravingsList from "../data/engravings_list";
import intToNth from "../helperFunctions/intToNth";
import { useSelector } from "react-redux"

function nameToEngravingObject(name) {
    return { label: name, value: name }
}

const engravings = []

engravingsList.forEach(engraingName => {
    engravings.push(nameToEngravingObject(engraingName))
})

const defaultSelectedOptions = { formOne: null, formTwo: null }

function EngravingSearch() {

    const darkModeRedux = useSelector(state => state.darkmodeReducer)

    const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions)
    const [perfectMatchList, setPerfectMatchList] = useState([])
    const [partialMatchList, setPartialMatchList] = useState([])
    const [noMatches, setNoMatches] = useState(false)

    const onChange = (incomingSelected, e) => {
        setSelectedOptions({
            ...selectedOptions,
            [e.name]: incomingSelected
        })
    }

    const onSubmit = () => {
        const tempPerfectMatchList = [];
        const tempPartialMatchList = [];

        popularBuilds.map((build) => {
            if (build.build_engravings.includes(selectedOptions.formOne.value) && build.build_engravings.includes(selectedOptions.formTwo.value)) {
                const engravingOneImportance = build.build_engravings.findIndex((e) => e === selectedOptions.formOne.value)
                const engravingTwoImportance = build.build_engravings.findIndex((e) => e === selectedOptions.formTwo.value)
                console.log("ENG2IMP", engravingTwoImportance)
                if (engravingOneImportance < engravingTwoImportance) {
                    return tempPerfectMatchList.push({
                        ...build,
                        matchedEngravingOne: selectedOptions.formOne.value,
                        matchedEngravingTwo: selectedOptions.formTwo.value,
                        engravingPriorityOne: parseInt(engravingOneImportance),
                        engravingPriorityTwo: parseInt(engravingTwoImportance)
                    })
                } else {
                    return tempPerfectMatchList.push({
                        ...build,
                        matchedEngravingOne: selectedOptions.formTwo.value,
                        matchedEngravingTwo: selectedOptions.formOne.value,
                        engravingPriorityOne: parseInt(engravingTwoImportance),
                        engravingPriorityTwo: parseInt(engravingOneImportance)
                    })
                }

            } else if (build.build_engravings.includes(selectedOptions.formOne.value)) {
                const importance = build.build_engravings.findIndex((e) => e === selectedOptions.formOne.value)

                return tempPartialMatchList.push({
                    ...build,
                    matchedEngraving: selectedOptions.formOne.value,
                    engravingPriority: parseInt(importance)
                })
            } else if (build.build_engravings.includes(selectedOptions.formTwo.value)) {
                const importance = build.build_engravings.findIndex((e) => e === selectedOptions.formTwo.value)

                return tempPartialMatchList.push({
                    ...build,
                    matchedEngraving: selectedOptions.formTwo.value,
                    engravingPriority: parseInt(importance)
                })
            }
        })
        tempPerfectMatchList.sort((a, b) => (a.engravingPriorityOne > b.engravingPriorityOne) ? 1 : -1)
        tempPartialMatchList.sort((a, b) => (a.engravingPriority > b.engravingPriority) ? 1 : -1)

        setPerfectMatchList(tempPerfectMatchList)
        setPartialMatchList(tempPartialMatchList)

        console.log(tempPartialMatchList, tempPerfectMatchList)
        if (tempPerfectMatchList.length === 0 && tempPartialMatchList.length === 0) {
            setNoMatches(true)
        } else {
            setNoMatches(false)
        }
    }

    return (
        <div className="container text-center engraving-search-component">
            <div className="row m-5 justify-content-center">
                <div className="col-sm-4 forms">
                    <h4>Select Your Engravings</h4>
                    <Select options={engravings} onChange={(inc, e) => onChange(inc, e)} name="formOne" className="m-3"
                    />
                    <Select
                        options={engravings} onChange={onChange} name="formTwo" className="m-3"
                    />
                    <button className="btn btn-danger btn-lg" onClick={onSubmit}>Submit</button>
                </div>
            </div>
            <div className="results">
                <h2>Perfect Matches: {perfectMatchList.length}</h2>
                <div className="row">
                {
                    perfectMatchList.map((build) => {
                        return <div className="col-md-6 col-lg-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{build.build_name}</h5>
                                    <p className="card-text">({build.primary_stat} / {build.secondary_stat})</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                    <h4>{build.matchedEngravingOne} <span className={`badge bg-success importance-${build.engravingPriorityOne}`}>
                                        #{build.engravingPriorityOne}
                                    </span></h4>
                                    </li>
                                    <li className="list-group-item">
                                    <h4>{build.matchedEngravingTwo} <span className={`badge bg-success importance-${build.engravingPriorityTwo}`}>
                                        #{build.engravingPriorityTwo}
                                    </span></h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    })
                }
                </div>
                <div className="row">
                <h2>Partial Matches: {partialMatchList.length}</h2>
                {
                    partialMatchList.map((build) => {
                        return <div className="col-md-6 col-lg-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{build.build_name}</h5>
                                    <p className="card-text">({build.primary_stat} / {build.secondary_stat})</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <h4>{build.matchedEngraving} <span className={`badge bg-success importance-${build.engravingPriority}`}>
                                            #{build.engravingPriority}
                                        </span></h4>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    })
                }
                </div>
                {
                    noMatches ? <h2 className="no-matches">No Matches</h2> : ""
                }
            </div>
        </div>
    )
}

export default EngravingSearch