import React, { useState } from 'react';

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState('');

  const handleCategoryToggle = (categoryName) => {
    setOpenCategory(categoryName === openCategory ? '' : categoryName);
  };

  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Products <i className="fas fa-caret-down"></i>
          </a>
          <ul
            className={`nav flex-column subcategory ${
              openCategory === 'products' ? 'show' : ''
            }`}
          >
            <li className="nav-item">
              <a className="nav-link" href="#">
                Clothing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Electronics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accessories
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="category-toggle"
            onClick={() => handleCategoryToggle('products')}
          >
            <i
              className={`fas fa-angle-${
                openCategory === 'products' ? 'up' : 'down'
              }`}
            ></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us <i className="fas fa-caret-down"></i>
          </a>
          <ul
            className={`nav flex-column subcategory ${
              openCategory === 'about' ? 'show' : ''
            }`}
          >
            <li className="nav-item">
              <a className="nav-link" href="#">
                Company
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="category-toggle"
            onClick={() => handleCategoryToggle('about')}
          >
            <i
              className={`fas fa-angle-${
                openCategory === 'about' ? 'up' : 'down'
              }`}
            ></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
