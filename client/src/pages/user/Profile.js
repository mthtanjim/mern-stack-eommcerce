import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import { NavLink } from "react-router-dom";
import AdminMenu from "../../components/nav/AdminMenu";
import UserMenu from "../../components/nav/UserMenu";
import axios from "axios";
import toast from "react-hot-toast";

const UserProfile = () => {
  const [auth, setAuth] = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (auth?.user) {
      const { name, email, address } = auth.user;
      setName(name);
      setEmail(email);
      setAddress(address);
    }
  }, [auth?.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/profile", {
        name,
        password,
        address,
      });

      if(data?.error) {
        toast.error(data.error)
      } else {
        // console.log("updated data=> ", data);
      setAuth({ ...auth, user: data });

      //local storage update
      let ls = localStorage.getItem("auth");
      ls = JSON.parse(ls);
      ls.user = data;
      localStorage.setItem("auth", JSON.stringify(ls));
      toast.success("Profile Updated");
      }      
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
                className="form-control m-2 p-2"
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus={true}
              />
              <input
                type="email"
                className="form-control m-2 p-2"
                placeholder="enter your name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={true}
              />
              <input
                type="password"
                className="form-control m-2 p-2"
                placeholder="enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <textarea
                className="form-control m-2 p-2"
                placeholder="enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
              <button className="btn btn-primary m-2 p-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
