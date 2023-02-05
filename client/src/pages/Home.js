import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";
import "./ProjectList.css"; // import styles
import Scroll from "./Scroll";
import moment from "moment";
import ProductCard from "../components/cards/ProductCard";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
      console.log("data>", data);
    } catch (err) {
      console.log(err);
    }
  };
  const arr = [...products];
  const shortBySold = arr.sort((a, b) => {
    return a.sold > b.sold ? -1 : 1;
  });

  return (
    <div>
      <Jumbotron title="hello word title" subTitle="" />
      <div className="row mx-1">
        <div className="col-md-6 mt-3">
          <h2 className="p-3 h4 bg-light text-center">New Arrival</h2>
         <div className="row" >
         {products?.map((p) => (
            <div className="col-md-6" key={p._id}> <ProductCard p={p} /> </div>
          ))}
         </div>
        </div>
        <div className="col-md-6 mt-3">
          <h2 className="p-3 h4 bg-light text-center">Best Seller</h2>
          <div className="row" >
         {shortBySold?.map((p) => (
            <div className="col-md-6" key={p._id}> <ProductCard p={p} /> </div>
          ))}
         </div>
        </div>
      </div>
      <Scroll />
    </div>
  );
};

export default Home;
