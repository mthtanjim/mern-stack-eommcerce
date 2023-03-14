import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios";
import ProductCard from "../components/cards/ProductCard";

export default function CategoryView() {
  const params = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState({});

  console.log(product);

  useEffect(() => {
    if (params?.slug) loadProductsByCategory();
  }, [params?.slug]);

  const loadProductsByCategory = async () => {
    try {
      const { data } = await axios.get(`/category/products/${params.slug}`);
      console.log("data product by category=> ", data);
      setProduct(data.product);
      setCategory(data.category);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Jumbotron title={category.name} />
    <div className="container-fluid">
    <div className="row mt-3" > 
    {product?.map((p) => (
      <div className="col-md-4" key={p._id}>
        <ProductCard p={p} />
      </div> 
      ))}
    </div>
    </div>

   
    </>
  );
}
