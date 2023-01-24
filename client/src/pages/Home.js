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
    <div className="dropdown">
      <a 
        className="nav-link pointer dropdown-toggle" 
        data-toggle="dropdown" 
        >
        Dropdown link
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
</div>


another one 

 <div className="dropdown">
            <li>
              <a
                className="nav-link pointer dropdown-toggle"
                data-bs-toggle="dropdown"
              >
              profile
              </a>

              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="nav-link"
                    to={`dashboard`}
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item pointer">
                  <a className="nav-link">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </div>
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