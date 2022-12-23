import React from "react";
import {NavLink } from "react-router-dom";

const Menu = () =>{
  return (
    <nav className="navbar flex justify-center border-white border-b">
      <div className="px-3">
        <NavLink to="/" className={({isActive}) => (isActive ? "border-b-2 border-yellow-100" : "text-zinc-400")}>
          <button className="text-zinc-400 hover:text-white">HOME</button>
        </NavLink>
      </div>
      <div className="px-3">
        <NavLink to="/starships" className={({isActive}) => (isActive ? "border-b-2 border-yellow-100" : "text-zinc-400")}>
          <button className="text-zinc-400 hover:text-white">STARSHIPS</button>
        </NavLink>
      </div>   
        
    </nav>
  )
}
export default Menu;