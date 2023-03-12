import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";

const ProductView = () => {
    const [product, setProduct] = useState("")
  const params = useParams();
  console.log("single product => ", product)

    useEffect(() => {
      if (params?.slug)  loadProduct()
    }, [params?.slug])

    const loadProduct = async () => {
        try {
            const {data} = await axios.get(`/products/${params.slug}`)
            setProduct(data)
        }catch(err) {
            console.log(err)
        }

    }

  console.log("paraps=> ", params.slug)
  return (
    <>
    <Jumbotron/>
      <h2>this is params {product.name} </h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <pre> {JSON.stringify(product, null, 4)} </pre>
    </>
  );
};

export default ProductView;
