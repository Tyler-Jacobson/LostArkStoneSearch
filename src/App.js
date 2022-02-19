import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import EngravingSeach from "./Components/EngravingSearch"
import BuildsList from "./Components/BuildsList"
import TopEngravings from "./Components/TopEngravings";
import Nav from "./Components/Nav"


function App() {



  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<EngravingSeach />} />
        <Route path="/top-engravings" element={<TopEngravings />} />
        <Route path="/builds-list" element={<BuildsList />} />
      </Routes>
    </div>
  );
}

export default App;
