import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Jumbotron from "../../components/cards/Jumbotron";
import { useAuth } from "../../context/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  
  //hook 
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data}  = await axios.post(`${process.env.REACT_APP_API}/login`, {
        email,
        password,
      }
      );
      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data))
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success("Login success");
        navigate("/");
      }
      
    } catch (err) {
      console.log(err);
      toast.error("login failed, Try again");
    }
  };

  return (
    <div>
      <Jumbotron
        title="Login"
        subTitle="Login with your currect information and credentials"
      />
      <div className="container">
        <div classemail="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control p-2 mb-4"
                type="text"
                placeholder="useremail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-control p-2 mb-4"
                type="password"
                placeholder="password "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
