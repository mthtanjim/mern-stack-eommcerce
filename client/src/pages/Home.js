import axios from "axios";
import React, { useEffect, useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import ProductCard from "../components/cards/ProductCard";
import { useAuth } from "../context/auth";
import "./ProjectList.css"; // import styles
import Scroll from "./Scroll";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  console.log("products.length =>", products.length);

  useEffect(() => {
    loadProducts();
    getTotal();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("products/products-count");
      setTotal(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`products/list-products/${page}`);
      console.log("dataload product =>", data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/products/list-products/${page}`);
      setProducts([...products, ...data]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
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

          <div className="row">
            {products?.map((p) => (
              <div className="col-md-6" key={p._id}>
                {" "}
                <ProductCard p={p} />{" "}
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <h2 className="p-3 h4 bg-light text-center">Best Seller</h2>
          <div className="row">
            {shortBySold?.map((p) => (
              <div className="col-md-6" key={p._id}>
                {" "}
                <ProductCard p={p} />{" "}
              </div>
            ))}
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          {products?.length < total && (
            <button
              className="btn btn-warning"
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? "loading..." : "load more"} {products?.length}
            </button>
          )}
        </div>
      </div>
      <Scroll />
    </div>
  );
};

export default Home;
