import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios";

export default function CategoryView() {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);

  console.log("view frorm ca", params);

useEffect(() => {
   if (params?.slug) loadProductsByCategory()
}, [params?.slug]);

const loadProductsByCategory = async () => {
    try {
        const {data} = await axios.get(`/products-by-category/${params.slug}`)
        setProduct(data)
    }catch(err) {
        console.log(err)
    }
}

  return (
    <>
      <Jumbotron title="Category" />
      <h1> {params.slug} Categtory View page</h1>
    </>
  );
}
