import React from "react";
import {NavLink } from "react-router-dom";

const Menu = () =>{
  return (
    <nav className=" flex justify-center border-white border-b pb-2">
      <div className="px-3">
        <NavLink to="/" className={({isActive}) => (
            isActive ? "border-b-2 border-yellow-100 text-white" : "text-zinc-400")}>
          <button className=" hover:text-white">HOME</button>
        </NavLink>
      </div>
      <div className="px-3">
        <NavLink to="/starships" className={({isActive}) => (
            isActive ? "border-b-2 border-yellow-100 text-white" : "text-zinc-400")}>
          <button className=" hover:text-white">STARSHIPS</button>
        </NavLink>
      </div>   
        
    </nav>
  )
}
export default Menu;