import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import { NavLink } from "react-router-dom";
import AdminMenu from "../../components/nav/AdminMenu";
import UserMenu from "../../components/nav/UserMenu";
import axios from "axios";

const UserProfile = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    if (auth?.user) {
      const { name, email, address } = auth.user;
      setName(name);
      setEmail(email);
      setAddress(address);
    }
  }, [auth?.user]);

  const handleSubmit = () => {
    email.preventDefault();
    try {
      const { data } = axios.put("/profile", {
        name,
        email,
        password,
      });
      console.log("data=> ", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Jumbotron title={`Hello ${auth?.user?.name}`} subTitle="dashboard" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 shadow-sm">
            <UserMenu />
          </div>
          <div className="col-9">
            <div className=" p-3 mb-3 mt-3 h4 bg-light">Prifle</div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(name)}
                autoFocus={true}
              />
              <input
                type="email"
                className="form-control"
                placeholder="enter your name"
                value={email}
                onChange={(e) => setEmail(email)}
             
              />
              <input
                type="password"
                className="form-control"
                placeholder="enter your password"
                value={password}
                onChange={(e) => setPassword([password])}
              />
              <textarea className="form-control" placeholder="enter your address" value={address} onChange={(e) => {setAddress(e.target.value)}} ></textarea>
            </form>
            <button className="btn btn primary" ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
