import { NavLink } from "react-router-dom";

const AdminMenu = () => (
  <>
    <div className=" p-3 mb-3 mt-3 h4 bg-light">admin links</div>
    <ul className="list-group">
      <li>
        <NavLink className="list-group-item" to="/dashboard/admin/category">
          Create Catagory
        </NavLink>
      </li>
      <li>
        <NavLink className="list-group-item" to="/dashboard/admin/product">
          Create Products
        </NavLink>
      </li>
    </ul>
  </>
);

export default AdminMenu;
