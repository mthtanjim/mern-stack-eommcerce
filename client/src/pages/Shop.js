import { useEffect, useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import ProductCard from "../components/cards/ProductCard";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { prices } from "./prices";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [Products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]); //for categories
  const [radio, setRadio] = useState([]);

  useEffect(() => {
    if (!checked.length || !radio.length) loadProduct();
  }, []);

  useEffect(() => {
    if (radio.length || checked.length) loadFilterProducts();
  }, [checked, radio]);

  const loadFilterProducts = async () => {
    try {
      const { data } = await axios.post("/products/filterd-product", {
        checked,
        radio,
      });
      console.log("filter respnds data=> ", data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadProduct = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/category");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChecked = (value, id) => {
    console.log(value, id);
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  return (
    <>
      <Jumbotron title="Products" />
      <pre>{JSON.stringify(checked, null, 4)}</pre>
      <pre>{JSON.stringify(radio, null, 4)}</pre>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
              Filter by Category
            </h2>
            <div className="row p-5">
              {categories?.map((c) => (
                <>
                  <Checkbox
                    key={c._id}
                    onChange={(e) => handleChecked(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                </>
              ))}
            </div>
            <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
              Filter by Price
            </h2>
            <div className="row p-5">
              <>
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </>
            </div>
            <div className="p-5 pt-0">
              <button
                className="btn btn-outline-secondary col-12"
                onClick={() => window.location.reload()}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
              {Products?.length} Products
            </h2>
            <div
              className="row"
              style={{ height: "100vh", overflow: "scroll" }}
            >
              {Products?.map((p) => (
                <>
                  <div key={p._id} className="col-md-4">
                    <ProductCard p={p} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
