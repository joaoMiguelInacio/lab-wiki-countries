import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import "./Navbar.css";
import IconButton from '@mui/material/IconButton';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { useNavigate  } from 'react-router-dom';

export default function Search({countries}) {
  const loading = [{label : "Loading..."}];
  const navigate = useNavigate();

  const [data, setData] = useState(loading);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  
  
  useEffect(() => {
    if (countries){
      setData(countries.map(element => ({ ...element, label: element.name.common })))
    }
  }, [countries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${value.alpha3Code}`);
  }

  return (
    <form onSubmit={handleSubmit} className = "search-form">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        disablePortal
        id="combo-box-demo"
        options={data}
        sx={{ width: 300}}
        renderInput={(params) => <TextField className = "search-input" {...params}/>}
      />
      <IconButton color="inherit" type='submit'><LocationSearchingIcon/></IconButton>
    </form>
  )
}