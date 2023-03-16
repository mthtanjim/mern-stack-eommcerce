import Jumbotron from "../components/cards/Jumbotron";
import { useCard } from "../context/card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import moment from "moment";
import toast from "react-hot-toast";

export default function Card() {
  const [card, setCard] = useCard();
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const remoteFromCard = (productid) => {
    let myCard = [...card];
    let index = myCard.findIndex((item) => item._id === productid);
    myCard.splice(index, 1);
    setCard(myCard);
    localStorage.setItem("card", JSON.stringify(myCard));
  };

  const cardTotal = () => {
    let total = 0;
    card.map((item) => {
      total += item.price;
    });
    return (
      total.toLocaleString("en-US", {
        style: 'currency',
        currencyDisplay: "symbol",
        currency: "BDT",
        minimumFractionDigits: "0"
    }))
  };

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.token && auth?.user?.name}`}
        subTitle={
          card?.length >= 1
            ? `${card?.length} item in your Card ${
                auth?.token ? "" : "plase login to checkout"
              }`
            : "Card is Empty"
        }
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="p-3 mt-2 mb-2 h4 bg-light">
              {card?.length >= 1 ? (
                "My Card"
              ) : (
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/")}
                  >
                    Conticue Shopping
                  </button>{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {card?.length >= 1 && (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {card?.map((p) => (
                  <div
                    key={p._d}
                    className="card mb-3"
                    style={{ maxWidth: 540 }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4 d-flex">
                        <img
                          src={`${process.env.REACT_APP_API}/products/photo/${p._id}`}
                          alt={p.name}
                          style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                      </div>
                      <div className="col-md-8 ">
                        <div className="card-body">
                          <h5 className="card-title">
                            {p?.name}
                            {p?.price?.toLocaleString("en-US", {
                              style: "currency",
                              currencyDisplay: "symbol",
                              currency: "BDT",
                              minimumFractionDigits: "0",
                            })}
                          </h5>

                          <p className="card-text">
                            {`${p?.description?.substring(0, 50)}...`}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="card-text">
                          <small className="text-muted">
                            Listed {moment(p.createdAt).fromNow()}
                          </small>
                        </p>
                        <p
                          className="text-danger mb-2 pointer"
                          onClick={() => {
                            remoteFromCard(p._id);
                            toast.success(`Item Removed`);
                          }}
                        >
                          remove
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <h4>Cart Summay</h4>
              Address / payment Option
              <hr/>
              <h4>Total: {cardTotal()}</h4>
              <hr/>
                <input type="textarea" className="textarea" placeholder="shipping address" ></input>
                <hr/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
