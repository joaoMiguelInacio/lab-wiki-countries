import axios from "axios";
import { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";

export default function CountriesPage() {
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

  const displayCountries = () => {
    return countries.map((country) => (
      <CountriesList {...country} key={country._id}/>
    ))
  }

  return (
    <div>
      <h1>Countries List</h1>
      {
        countries ? displayCountries() : <p>Loading...</p>
      }
    </div>
  )
}