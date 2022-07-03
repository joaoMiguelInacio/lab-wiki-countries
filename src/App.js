import { Route, Routes } from "react-router-dom";
import React from 'react';
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";
import CountriesPage from "./pages/CountriesPage/CountriesPage.js";
import CountryPage from "./pages/CountryPage";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [ countries, setCountries ] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://ih-countries-api.herokuapp.com/countries");
        setCountries(response.data.sort((a, b) => a.name.common.localeCompare(b.name.common)));
      } catch (error) {
        console.error(error);
      }
    }

    fetchCountries();
  }, []);

  return (
    <>
      <Navbar countries={countries} />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/countries" element={<CountriesPage countries={countries}/>} />
        <Route path="/:id" element={<CountryPage/>} />
      </Routes>
    </>
    );
}

export default App;