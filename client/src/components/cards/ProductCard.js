import { Badge } from "antd";
import {useNavigate} from 'react-router-dom'

const ProductCard = ({ p }) => {
  const navigate = useNavigate()
  return (
    <div className="card mb-3 hoverable">
      <Badge.Ribbon text={`${p?.sold} Sold`} color="red">
        <Badge.Ribbon
          text={`${p?.quantity >= 1 ? `${p?.quantity - p?.sold} in stock` : "Out of Stock"}`}
          placement="start"
          color="green"
        >
          <img
            className="card-img-top"
            src={`${process.env.REACT_APP_API}/products/photo/${p._id}`}
            alt={p.name}
            style={{ height: "300px", objectFit: "cover" }}
          />
        </Badge.Ribbon>
      </Badge.Ribbon>

      <div className="card-body">
        <h4 className="fw-bold" >
            {p?.price?.toLocaleString("en-US", {
            style: 'currency',
            currencyDisplay: "symbol",
            currency: "BDT",
            minimumFractionDigits: "0"
        })}
        </h4>
        <h5>{p.name}</h5>
        <p className="card-text">{p?.description?.substring(0, 50)}...</p> 
        {/* <p>{moment(p.createdAt).fromNow()}</p>
      <p>{p.sold}</p> */}
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary col card-button"
          style={{ borderBottomLeftRadius: "5px" }}
          onClick={() => navigate(`/product/${p.slug}`)}
        >
          View Product
        </button>
        <button
          className="btn btn-outline-primary col card-button"
          style={{ borderBottomLeftRadius: "5px" }}
        >
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
