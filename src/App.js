import React, { useEffect, useState } from "react";
import Select from 'react-select';
import './App.css';
import popularBuilds from "./popular_builds";
import engravingsList from "./engravings_list";



function nameToEngravingObject(name) {
  return { label: name, value: name }
}

const engravings = []

engravingsList.forEach(engraingName => {
  engravings.push(nameToEngravingObject(engraingName))
})

const defaultSelectedOptions = { formOne: null, formTwo: null }

function App() {

  const [ selectedOptions, setSelectedOptions ] = useState(defaultSelectedOptions)
  const [ perfectMatchList, setPerfectMatchList ] = useState([])
  const [ partialMatchList, setPartialMatchList ] = useState([])
  const [ noMatches, setNoMatches ] = useState(false)

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
        return tempPerfectMatchList.push(build)
      } else if (build.build_engravings.includes(selectedOptions.formOne.value) || build.build_engravings.includes(selectedOptions.formTwo.value)) {
        return tempPartialMatchList.push(build)
      }
    })
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
    <div className="App">
      <div className="forms">
        <Select
          options={engravings} onChange={(inc, e) => onChange(inc, e)} name="formOne"
        />
        <Select
          options={engravings} onChange={onChange} name="formTwo"
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
      <div>
        <h2>Perfect Matches</h2>
        {
          perfectMatchList.map((build) => {
            return <h3>Both Engravings Used In: <span className="perfect-match">{build.build_name}</span></h3>
          })
        }
        <h2>Partial Matches</h2>
        {
          partialMatchList.map((build) => {
            return <h3>One Engraving Used In: <span className="partial-match">{build.build_name}</span></h3>
          })
        }
        {
          noMatches ? <h2 className="no-matches">No Matches</h2> : ""
        }
      </div>
    </div>
  );
}

export default App;
