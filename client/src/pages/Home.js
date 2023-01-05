import React from "react";
// import Jumbotron from "../component/cards/Jumbotron"
import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";
const Home = () => {
  const [auth, setAuth] = useAuth()
  console.log("auth =>", )

  return (
    <div>
      <Jumbotron title="hello word title" subTitle="this is the subtitle of every page "/>
      
      <h1>
        {auth.token}{JSON.stringify(auth, null, 4)}
      </h1>
    </div>
  );
};

export default Home;
