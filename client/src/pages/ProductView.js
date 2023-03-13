import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { Badge } from "antd";
import {
  FaProjectDiagram,
  FaRegClock,
  FaCheck,
  FaTimes,
  FaWarehouse,
  FaChessBoard,
  FaRocket,
} from "react-icons/fa";
import ProductCard from "../components/cards/ProductCard";

const ProductView = () => {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
console.log("related => ", related)
  //hooks
  const params = useParams();
  useEffect(() => {
    if (params?.slug) loadProduct();
  }, [params?.slug]);

  const loadProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${params.slug}`);
      setProduct(data);
      loadRelated(data._id, data.category._id);
    } catch (err) {
      console.log(err);
    }
  };

  const loadRelated = async (productId, categoryId) => {
    try {
      const { data } = await axios.get(
        `products/related/${productId}/${categoryId}`
      );
      setRelated(data)
    } catch (err) {
      console.log(err);
    }
  };

  console.log("paraps=> ", params.slug);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-9">
          <div className="card mb-3">
            <Badge.Ribbon text={`${product?.sold} Sold`} color="red">
              <Badge.Ribbon
                text={`${
                  product?.quantity >= 1
                    ? `${product?.quantity - product?.sold} in stock`
                    : "Out of Stock"
                }`}
                placement="start"
                color="green"
              >
                <img
                  className="card-img-top"
                  src={`${process.env.REACT_APP_API}/products/photo/${product._id}`}
                  alt={product.name}
                  style={{ height: "500px", width: "100%", objectFit: "cover" }}
                />
              </Badge.Ribbon>
            </Badge.Ribbon>

            <div className="card-body">
              <h1>{product.name}</h1>
              <p className="card-text lead">{product?.description}</p>
            </div>
            <div className="d-flex justify-content-between lead bg-light p-5">
              <div>
                <p className="fw-bold">
                  <FaChessBoard />
                  {product?.price?.toLocaleString("en-US", {
                    style: "currency",
                    currencyDisplay: "symbol",
                    currency: "BDT",
                    minimumFractionDigits: "0",
                  })}
                </p>
                <p>
                  <FaProjectDiagram /> Category: {product?.category?.name}
                </p>
                <p>
                  <FaRegClock /> Added: {moment(product.createdAt).fromNow()}{" "}
                </p>
                <p>
                  {product?.quantity > 0 ? <FaCheck /> : <FaTimes />}
                  {product?.quantity > 0 ? " in Stock" : " Out of Stock"}
                </p>
                <p>
                  <FaWarehouse /> Available {product?.quantity - product?.sold}
                </p>
                <p>
                  <FaRocket /> Sold {product?.sold}
                </p>
              </div>
            </div>
            <button
              className="btn btn-outline-primary col card-button"
              style={{ borderBottomLeftRadius: "5px" }}
            >
              {" "}
              Add to Card{" "}
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <h4>Related products here</h4>
          <hr/>
          {related?.length < 1 && "No Related Products"}
          {related?.map(p => <ProductCard p={p} key={p._id} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductView;
