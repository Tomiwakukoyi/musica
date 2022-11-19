import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Collections from "./components/collections/Collections";
import Container from "./components/Container";
import MusicPlayer from "./components/footer/MusicPlayer";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="appContainer bg-[#1D2123] w-[1365.5px] h-[500vh] ">
      <div>
        <Search />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="collections" element={<Collections />} />
        </Routes>
      </div>

      {/* <MusicPlayer /> */}
    </div>
  );
}

export default App;
