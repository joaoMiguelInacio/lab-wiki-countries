
import CountriesList from "../../components/CountriesList";
import ProgressIndicator from "../../components/ProgressIndicator";
import "./CountriesPage.css";
import Box from '@mui/material/Box';

export default function CountriesPage({countries}) {
  
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