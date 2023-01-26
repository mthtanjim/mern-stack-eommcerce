import { NavLink } from "react-router-dom";

const UserMenu = () => (
  <>
    <div className=" p-3 mb-3 mt-3 h4 bg-light">User Links</div>
    <ul className="list-group">
      <li>
        <NavLink className="list-group-item" to="/dashboard/user/profile">
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink className="list-group-item" to="/dashboard/user/order">
          Orders
        </NavLink>
      </li>
    </ul>
  </>
);

export default UserMenu;
