import React from "react";
import logoStarWars from "../assets/starwars-logo-3.png";

const Header = () => {
  /*TODO: make it responsive */
  return(
    <div className="navbar bg-transparent">
      <div className="navbar-start">
      </div>
      <div className="navbar-center">
        <img src ={logoStarWars} alt="star wars logo" className="w-60"/>
      </div>
      <div className="navbar-end mr-3">
        <a className="link link-hover text-gray-400 font-bold mx-5">LOG IN</a>
      <div className="text-neutral-800">//</div>
        <a className="link link-hover text-slate-400 font-bold mx-5">SIGN UP</a>
      </div>
    </div>
  );
}
export default Header;