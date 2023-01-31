import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import { Link, NavLink } from "react-router-dom";
import AdminMenu from "../../components/nav/AdminMenu";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment"

const AdminProducts = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      if (data.error) {
      } else {
        setProducts(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Welcome to the Admin dashboard"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 shadow-sm">
            <AdminMenu />
          </div>
          <div className="col-9">
            <div className="p-3 mb-3 mt-3 h4 bg-light">Products</div>

            {products?.length}

            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/update/${p.slug}`}
                className="text-decoration-none"
              >
              <div className="card mb-3 ">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={`${process.env.REACT_APP_API}/products/photo/${p._id}`}
                        alt={p.name}
                        className="img-fluid img-thumbnail"
                      />
                    </div>
                    <div className="col-md-8 ">
                      <div className="card-body">
                        <h5 className="card-title">{p?.name}</h5>
                        <p className="card-text">
                          {p?.description?.substring(0, 160)}...
                        </p>
                        <p className="card-text" >
                        <small className="text-muted" >
                          {moment(p.createdAt).format("MMMM Do YYYY, h:mn:ss a") }
                        </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
