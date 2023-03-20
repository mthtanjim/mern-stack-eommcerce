import React, { useState } from "react";
import useCategory from "../hooks/useCategory";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
 const category = useCategory();

  return (
    <div className="sidebar">
      <ul className="nav flex-column mt-2">
      {category?.map((c) => (
                <li key={c._id}>
                  <NavLink className="nav-link" to={`/category/${c.slug}`}>
                    {c.name}
                  </NavLink>
                </li>
              ))}

        <hr />
        <ul className="nav flex-column subcategory">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Offer
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Coupon
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
