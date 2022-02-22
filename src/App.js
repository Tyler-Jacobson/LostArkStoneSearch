import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import EngravingSeach from "./Components/EngravingSearch"
import BuildsList from "./Components/BuildsList"
import TopEngravings from "./Components/TopEngravings";
import Nav from "./Components/Nav"
import { useDispatch, useSelector } from "react-redux"
import { addSavedBuild, setDarkMode } from "./actions";


function App() {
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

  return (
    <div className={darkModeRedux ? "App-darkmode darkmode-background":"App background"} >
      <Nav />
      <Routes>
        <Route path="/" element={<EngravingSeach />} />
        <Route path="/top-engravings" element={<TopEngravings />} />
        <Route path="/builds-list" element={<BuildsList />} />
      </Routes>
    </div>
  );
};

export default App;
