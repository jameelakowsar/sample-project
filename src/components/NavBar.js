import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className="sideNav">
      <div className="side-button">
        <NavLink to='/planets'>Planets</NavLink>
      </div>
      <div className="side-button">
        <NavLink to='/species'>Species</NavLink>
      </div>
      <div className="side-button">
        <NavLink to='/people'>People</NavLink>
      </div>
      <div className="side-button">
        <NavLink to='/starship'>Starship</NavLink>
      </div>
      <div className="side-button selected-button">
        <NavLink to='/vehicle'>Vehicle</NavLink>
      </div>
  </section>
  )
}

export default NavBar