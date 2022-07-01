import axios from "axios";
import { useEffect, useState } from "react";
import CountriesList from "../../components/CountriesList";
import ProgressIndicator from "../../components/ProgressIndicator";
import "./CountriesPage.css";
import Box from '@mui/material/Box';

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
    <>
      {
        countries 
        ? <>
            <Box className="box" sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
              {displayCountries()}
            </Box>
          </>
        : <ProgressIndicator />
      }
    </>
  )
}