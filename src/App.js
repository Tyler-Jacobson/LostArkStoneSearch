import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import EngravingSeach from "./Components/EngravingSearch"
import BuildsList from "./Components/BuildsList"


function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<EngravingSeach />} />
        <Route path="/builds" element={<BuildsList />} />
      </Routes>
    </div>
  );
}

export default App;
