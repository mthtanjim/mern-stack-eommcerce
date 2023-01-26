import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import { NavLink } from "react-router-dom";
import UserMenu from "../../components/nav/UserMenu";

const AdminDashboard = () => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Welcome to the Admin dashboard"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 shadow-sm">
            <UserMenu/>
          </div>
          <div className="col-9">
            <div className=" p-3 mb-3 mt-3 h4 bg-light">admin info</div>
            <ul className="list-group">
              <li className="list-group-item">{auth.user.name}</li>
              <li className="list-group-item">{auth.user.email}</li>
              <li className="list-group-item">admin</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
