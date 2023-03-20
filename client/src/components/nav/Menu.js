import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Search from "../forms/Search";
import useCategory from "../../hooks/useCategory";
import { useCard } from "../../context/card";
import { Badge } from "antd";
import logo from "../../img/logo1.png";

const Menu = () => {
  //contex
  const [auth, setAuth] = useAuth();
  const [card, setCard] = useCard();
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
      <ul className="nav d-flex shadow-sm pb-3 pt-3 bg-gray sticky-top bg-light">
        <li className="nav-item me-auto">
          <NavLink className="nav-link" to="/">
            <img
              className="object-fit-none"
              src={logo}
              alt=""
              height="50px"
              style={{ position: "absolute", top: "10px", bottom: "10px" }}
            />
          </NavLink>
        </li>

        <li style={{ width: "30%" }} className="nav-item px-3">
          <Search />
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <a
              className="nav-link pointer dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Categories
              {/* {auth?.user?.name?.toUpperCase()} */}
            </a>

            <ul
              className="dropdown-menu"
              style={{ height: "250px", overflow: "scroll" }}
            >
              <li>
                <NavLink className="nav-link" to={`/categoris`}>
                  All Categoris
                </NavLink>
              </li>
              {category?.map((c) => (
                <li key={c._id}>
                  <NavLink className="nav-link" to={`/category/${c.slug}`}>
                    {c.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
        </li>
        <li className="nav-item mt-1 ml-1">
          <Badge
            count={card?.length >= 1 ? card?.length : 0}
            offset={[-5, 11]}
            showZero={true}
          >
            <NavLink className="nav-link" to="/card">
              Card
            </NavLink>
          </Badge>
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
