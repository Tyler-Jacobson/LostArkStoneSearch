import React from "react";
import { Route, Routes } from "react-router-dom";
import EngravingSeach from "./Components/EngravingSearch";
import BuildsList from "./Components/BuildsList";
import TopEngravings from "./Components/TopEngravings";
import Nav from "./Components/Nav";
import Settings from "./Components/Settings";
import LocalStorageUpdater from "./Components/LocalStorageUpdater";


function App() {

  return (
    <div className="wrap">
      <Nav />
      <Routes>
        <Route path="/" element={<EngravingSeach />} />
        <Route path="/top-engravings" element={<TopEngravings />} />
        <Route path="/builds-list" element={<BuildsList />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <LocalStorageUpdater />
    </div>
  );
};

export default App;