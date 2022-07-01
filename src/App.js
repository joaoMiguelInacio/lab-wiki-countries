import { Route, Routes } from "react-router-dom";
import React from 'react';
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import CountriesPage from "./pages/CountriesPage.js";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/countries" element={<CountriesPage/>} />
        <Route path="/:id" element={<CountryPage/>} />
      </Routes>
    </>
    );
}

export default App;
