import React, {useContext, useState} from "react";
// import Jumbotron from "../component/cards/Jumbotron"
import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";
import './ProjectList.css'; // import styles
import Projectstyle1 from "./Projectstyle1"
import Scroll from "./Scroll";


const Home = () => {
  const [auth, setAuth] = useAuth()
  return (
    <>
    <div>
      <Jumbotron title="hello word title" subTitle="this is the subtitle of every page "/>
      <h1>
        data:..  
       {/* { JSON.stringify(auth)}   */}
      </h1>
    </div>
    <h3 style={{marginTop: "2rem", marginButtom: "2rem"}} >Another section below</h3>

    <Scroll/>
    ok
    {/* <Projectstyle1/> */}
    

    </>
  );
};

export default Home;


// const Home = () => {
//   const [auth, setAuth] = useAuth()
//   return (
//     <div>
//       <Jumbotron title="hello word title" subTitle="this is the subtitle of every page "/>
//       <h1>
//         data:..  
//        { JSON.stringify(auth)}
//       </h1>
//     </div>
//   );
// };

// export default Home;