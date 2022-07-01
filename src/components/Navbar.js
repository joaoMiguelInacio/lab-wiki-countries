import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <NavLink className={"navbar-brand"} to="/">WikiCountries</NavLink>
          <NavLink className={"navbar-brand"} to="/countries">Countries</NavLink>
        </div>
    </nav>
  )
}