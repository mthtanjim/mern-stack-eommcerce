import axios from 'axios'
import React, {useContext, useEffect, useState} from "react";
import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";
import './ProjectList.css'; // import styles
import Scroll from "./Scroll";
import moment from 'moment'


  const Home = () => {
  const [auth, setAuth] = useAuth()
  const [products, setProducts] = useState([])

    useEffect(() => {
      loadProducts()
    }, [])

    const loadProducts = async () => {
      try{
        const {data} = await axios.get('/products')
        setProducts(data)
        console.log("data>", data)
      }catch(err) {
        console.log(err)
      }
    }
    const arr = [...products]

  return (
    <div>
      <Jumbotron title="hello word title" subTitle=""/>
       {products?.map((p) => (
        <div className='bg-light' key={p._id} >
          <p>{p.name}</p>
          <p>{moment(p.createdAt).fromNow()}</p>
          <p>{p.sold}</p>
        </div>
       ))}
      <Scroll/>
    </div>
  );
};

export default Home;

