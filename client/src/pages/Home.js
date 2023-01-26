import React, {useContext, useState} from "react";
// import Jumbotron from "../component/cards/Jumbotron"
import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";
import './ProjectList.css'; // import styles
import Projectstyle1 from "./Projectstyle1"
import Scroll from "./Scroll";
import { NavLink } from "react-router-dom";

    const Home = () => {
  const [auth, setAuth] = useAuth()
  return (
    <div>
      <Jumbotron title="hello word title" subTitle="this is the subtitle of every page "/>
      <h1>
        data:..  
       { JSON.stringify(auth)}
      </h1>
      <Scroll/>
    </div>
  );
};

export default Home;

