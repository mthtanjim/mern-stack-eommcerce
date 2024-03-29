import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import { NavLink } from "react-router-dom";
import AdminMenu from "../../components/nav/AdminMenu";
import UserMenu from "../../components/nav/UserMenu";

const UserOrders = () => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="dashboard"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 shadow-sm">
            <UserMenu/>
          </div>
          <div className="col-9">
            <div className=" p-3 mb-3 mt-3 h4 bg-light">Order</div>
           User Orde History
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrders;
