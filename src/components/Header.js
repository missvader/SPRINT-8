import React from "react";
import logoStarWars from "../assets/starwars-logo-3.png";

const Header = () => {
  return(

    <div className="grid grid-cols-6  mx-auto">
      <div className="col-start-3 col-end-5 grid justify-items-center">
        <img src ={logoStarWars} alt="star wars logo" className="w-60"/>
      </div>
      <div className="col-start-6 flex items-center justify-around">
        <button className="text-white ">LOGIN</button>
        <button className="text-white ">SIGN UP</button>
      </div>
    </div>
  );
}
export default Header;