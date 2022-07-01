import { Link } from "react-router-dom";

export default function CountriesList ({name, alpha3Code, alpha2Code}) {
  return (
    <div>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt={`${alpha2Code}`}/>
      <h6>{name.common}</h6>
      <Link to={`/${alpha3Code}`}>Details</Link>
    </div>
  )
}