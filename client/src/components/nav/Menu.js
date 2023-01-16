import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {useAuth} from "../../context/auth"

const Menu = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useAuth()

  const handleLogout = () => {
    setAuth({
      user: null,
      token: ""
    })
    localStorage.removeItem("auth")
    navigate("/login")
    
  }

  return (
    <>
      <ul className="nav d-flex justify-content-center shadow-sm mb-3 pb-2 pt-2 bg-gray">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>

        {!auth?.user ? ( <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Register">
            Register
          </NavLink>
        </li>
        </> ) : ( <li className="nav-item">
          <a onClick={handleLogout} className="nav-link" to="/Register">
            Logout
          </a>
        </li>
        )
        }
         
      </ul>
    </>
  );
};

export default Menu;
