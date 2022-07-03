import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import './Navbar.css';

export default function Navbar({countries}) {
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="navbar-container">
          <NavLink className={({ isActive }) => isActive ? 'selected navbar-brand' : 'navbar-brand'} to="/">WikiCountries</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'selected navbar-brand' : 'navbar-brand'} to="/countries">Countries</NavLink>
          <Search countries={countries}/>
        </div>
    </nav>
  )
}