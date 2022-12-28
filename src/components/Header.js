import React from "react";
import logoStarWars from "../assets/starwars-logo-3.png";
import logoMobile from "../assets/logoMobile.webp"
import Menu from "./Menu.js";
import { NavLink} from "react-router-dom";


const Header = () => {
  
  return(
    <>
    <div className="navbar bg-transparent border-zinc-600 border-b lg:border-none"  id="outer-container">
      <div className="navbar-start w-1/5 md:w-1/3 lg:w-1/2 ">
      <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" >
            <img src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Burger_White-09a4d3d1e252.svg" alt="burger responsive menu icon"/>
          </label>
          <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-2 box-shadow bg-black modal-inner w-80">
            <li className="pl-4 m-5" >
              <NavLink
                className={({isActive}) => (
                      isActive ? "border-l-2 border-yellow-100 text-white pl-3" : "text-zinc-400")}
                   to="/"
                  onClick={() => {
                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur()
                      }
                    }}
              >
                HOME
              </NavLink>
            </li>
            <li className="pl-4 m-5 border-b border-zinc-600 pb-5" >
              <NavLink
                className={({isActive}) => (
                      isActive ? "border-l-2 border-yellow-100 text-white pl-3 " : "text-zinc-400")}
                to="/starships"
                onClick={() => {
                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur()
                      }
                    }}
              >
                STARSHIPS
              </NavLink>
            </li>
            <li className="pl-4 m-5">
              <NavLink
                className={({isActive}) => (
                    isActive ? "border-l-2 border-yellow-100 text-white pl-3" : "text-zinc-400")}
                to="/login"
                onClick={() => {
                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur()
                      }
                    }}
              >
                LOG IN
              </NavLink>
            </li>
            <li className="pl-4 m-5" >
              <NavLink
                className={({isActive}) => (
                    isActive ? "border-l-2 border-yellow-100 text-white pl-3" : "text-zinc-400")}
                to="/signup"
                onClick={() => {
                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur()
                      }
                    }}
              >
                SIGN UP
              </NavLink>
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
          <NavLink to={"/login"}>
            <li >
              <img src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg" alt="icon user" className="p-0  btn-ghost "/>
              <button className="text-white btn-ghost hover:font-bold ">LOG IN</button>
            </li>
          </NavLink>
          <NavLink to={"/signup"}>
            <li >
              <img src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg" alt="icon user" className="p-0 btn-ghost "/>
              <button className="text-white btn-ghost hover:font-bold">SIGN UP</button>
            </li>
          </NavLink>
        </ul> 
      </div>
    </div>
    <Menu/>
    
    </>
  );
}
export default Header;