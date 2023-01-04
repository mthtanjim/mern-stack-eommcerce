import React, { useState, useEffect } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      const {data} = await axios.post(`${process.env.REACT_APP_API}/register`, {name, email, password})
      console.log(data) 

      if(data?.error) {
        toast.error(data.error) 
      } else {
        
         toast.success("Registration success")
      } 

    }catch(err) {
      toast.error("Registration faild, Try again ")
      console.log(err)
    }
  };

  return (
    <div>
      <Jumbotron title="Register " />
      <Toaster/>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 ">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Name "
                className="mb-4 p-2 form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Your Email "
                className="mb-4 p-2 form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Your Password"
                className="mb-4 p-2 form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
              className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
