import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{
  return (
    <div className="flex justify-center tabs border-zinc-600 border">
      <div className="border-zinc-600 border">
        <Link to="/" className="text-white tab tab-bordered tab-active border" >HOME
        </Link>
      </div>  
      <div className="border-zinc-600 border">
        <Link to="/starships" className="text-white tab tab-bordered border">STARSHIPS
        </Link>
      </div>
    </div>
  )
}
export default Menu;