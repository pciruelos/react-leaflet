import React from "react";
import "./App.css";
import Mapview from "./components/Mapview";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<Mapview />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
