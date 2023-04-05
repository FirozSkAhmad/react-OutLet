import React from 'react';
import {NavLink} from "react-router-dom"

function Navbar() {
  return <nav>
    <NavLink to="/">home</NavLink>
    <NavLink to="about">about</NavLink>
    <NavLink to="other">other</NavLink>
  </nav>;
}

export default Navbar;
