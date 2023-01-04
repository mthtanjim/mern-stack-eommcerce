import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="nav d-flex justify-content-center shadow-sm mb-3 pb-2 pt-2 bg-gray">
        <li className="nav-item">
   
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
         
        </li>
        <li className="nav-item">
     
            <NavLink className="nav-link"  to="/Login" >Login</NavLink>
         
        </li>
        <li className="nav-item">
 
            <NavLink className="nav-link"  to="/Register">Register</NavLink>
         
        </li>
      </ul>
    </>
  );
};

export default Menu;
