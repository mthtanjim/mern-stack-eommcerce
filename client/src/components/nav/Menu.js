import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Search from "../forms/Search";
import useCategory from "../../hooks/useCategory";

const Menu = () => {
  //contex
  const [auth, setAuth] = useAuth();
  //hooks
  const navigate = useNavigate();
  const category = useCategory();

  const handleLogout = () => {
    setAuth({
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <ul className="nav d-flex justify-content-center shadow-sm mb-3 pb-2 pt-2 bg-gray">
        <li className="nav-item">
          <div className="dropdown" >
            <li>
              <a
                className="nav-link pointer dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Categories
                {/* {auth?.user?.name?.toUpperCase()} */}
              </a>

              <ul className="dropdown-menu" style={{height: "250px", overflow: "scroll"}}>
              <li>
                    <NavLink className="nav-link" to={`/categoris`}>
                     All Categoris
                    </NavLink>
                  </li>
                {category?.map((c) => (
                  <li>
                    <NavLink className="nav-link" to={`/category/${c.slug}`}>
                      {c.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </div>
        </li>
        <li className="nav-item">
          <Search />
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
        </li>

        {!auth?.user ? (
          <>
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
          </>
        ) : (
          <div className="dropdown">
            <li>
              <a
                className="nav-link pointer dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {auth?.user?.name?.toUpperCase()}
              </a>

              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="nav-link"
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item pointer">
                  <a onClick={handleLogout} className="nav-link">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </div>
        )}
      </ul>
    </>
  );
};

export default Menu;
