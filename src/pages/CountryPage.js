import axios from 'axios';
import { useEffect, useState } from 'react';
import CountryDetails from '../components/CountryDetails/CountryDetails';
import ProgressIndicator from '../components/ProgressIndicator';
import { useParams, Link } from 'react-router-dom';
import CountryMap from '../components/CountryMap';

export default function CountryPage() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${id}`
        );
        setCountry(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, [id]);

  const displayBorders = (country) => {
    return country.borders.map((border) => (
      <Link to={`/${border}`} key={country.borders.indexOf(border)}>{border}</Link>
    ));
  };

  return (
    <div>
      {country ? (
        <>
          <CountryDetails country={ country } displayBorders={ displayBorders } />
          <CountryMap lat = { country.latlng[1]} lng ={country.latlng[0] }/>
        </>
      ) : (
        <ProgressIndicator />
      )}
    </div>
  );
}
