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

  const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions)
  const [perfectMatchList, setPerfectMatchList] = useState([])
  const [partialMatchList, setPartialMatchList] = useState([])

  const onChange = (incomingSelected, e) => {
    setSelectedOptions({
      ...selectedOptions,
      [e.name]: incomingSelected
    })
  }

  const onSubmit = () => {

    console.log(selectedOptions);
    console.log(popularBuilds);
    const perfectMatchList = [];
    const partialMatchList = [];

    popularBuilds.map((build) => {
      if (build.build_engravings.includes(selectedOptions.formOne.value) && build.build_engravings.includes(selectedOptions.formTwo.value)) {
        return perfectMatchList.push(build)
      } else if (build.build_engravings.includes(selectedOptions.formOne.value) || build.build_engravings.includes(selectedOptions.formTwo.value)) {
        return partialMatchList.push(build)
      }
    })
    setPerfectMatchList(perfectMatchList)
    setPartialMatchList(partialMatchList)
  }

  return (
    <div className="App">
      <div >
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
      </div>
    </div>
  );
}

export default App;
