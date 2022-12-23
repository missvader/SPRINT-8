import React from "react";
import logoStarWars from "../assets/starwars-logo-3.png";
import logoMobile from "../assets/logoMobile.webp"
import Menu from "./Menu.js";
import { Link } from "react-router-dom";

const Header = () => {
  
  return(
    <>
    <div className="navbar bg-transparent">
      <div className="navbar-start w-1/5 md:w-1/3 lg:w-1/2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <img src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Burger_White-09a4d3d1e252.svg" alt="burger responsive menu icon"/>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className="">
              <a href="/login" className="text-slate-400">LOG IN</a>
            </li>
            <li className="">
              <a href="/signup" className="text-slate-400">SIGN UP</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center ">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={logoStarWars} 
            sizes="1024"
          />  
          <img src={logoMobile} alt="star wars logo" className="w-60"/>
        </picture>
      </div>
      <div className="navbar-end hidden mr-3 lg:flex pointer">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <Link to={"/login"}>
            <li >
              <img src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg" alt="icon user" className="p-0  btn-ghost "/>
              <button className="text-white btn-ghost hover:font-bold ">LOG IN</button>
            </li>
          </Link>
          <Link to={"/signup"}>
            <li >
              <img src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg" alt="icon user" className="p-0 btn-ghost "/>
              <button className="text-white btn-ghost hover:font-bold">SIGN UP</button>
            </li>
          </Link>
          
        </ul> 
        
      </div>
      
    </div>
    <Menu/>
    </>
  );
}
export default Header;