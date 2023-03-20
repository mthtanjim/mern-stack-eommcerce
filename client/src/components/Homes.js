import homeimg from "./../img/home.jpg";
import ct1 from "./../img/cat1.png";
import ct2 from "./../img/cat2.png";
import ct3 from "./../img/cat3.jpg";
import ct4 from "./../img/cat4.png";
import Sidebar from "./LeftSidebar";

const Homes = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-5">
        {/* Left Sidebar */}
        <div className="col-3 col-md-2 bg-light">
          <Sidebar />
        </div>

        {/* Right Content */}
        <div className="col-9 col-md-10 pb-5">
          <div className="mb-3 bg-light px-3 pb-3">
            <img
              src={homeimg}
              alt="Homepage photos"
              width={100}
              loading="lazy"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          {/* Category View */}
          <div
            className="d-flex flex-wrap product-cat-row"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className="cat_item" style={{ flex: 1 }}>
              <a style={{ textDecoration: "none" }}>
                <div
                  className="cat_item_img d-flex align-items-center justify-content-center"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "150px",
                  }}
                >
                  <img
                    className="img-fluid"
                    src="https://admina.khetkhamar.org/public//uploads/all/SpiJBC2RaabhvR4Ssvc8cXEPurk5G7N6FyvHRNlI.png"
                    alt="img"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
                <div
                  className="cat_item_name text-center"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  Organic &amp; Natural
                </div>
              </a>
            </div>
            <div className="cat_item" style={{ flex: 1 }}>
              <a style={{ textDecoration: "none" }}>
                <div
                  className="cat_item_img d-flex align-items-center justify-content-center"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "150px",
                  }}
                >
                  <img
                    className="img-fluid"
                    src="https://admina.khetkhamar.org/public//uploads/all/oZTP0jGxQHGPuQ4bsrTUVJzzjrLAAd6BULqsJAjF.png"
                    alt="img"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
                <div
                  className="cat_item_name text-center"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  Daily Express
                </div>
              </a>
            </div>
            <div className="cat_item" style={{ flex: 1 }}>
              <a style={{ textDecoration: "none" }}>
                <div
                  className="cat_item_img d-flex align-items-center justify-content-center"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "150px",
                  }}
                >
                  <img
                    className="img-fluid"
                    src="https://admina.khetkhamar.org/public//uploads/all/oZTP0jGxQHGPuQ4bsrTUVJzzjrLAAd6BULqsJAjF.png"
                    alt="img"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
                <div
                  className="cat_item_name text-center"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  Daily Express
                </div>
              </a>
            </div>
            <div className="cat_item" style={{ flex: 1 }}>
              <a style={{ textDecoration: "none" }}>
                <div
                  className="cat_item_img d-flex align-items-center justify-content-center"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "150px",
                  }}
                >
                  <img
                    className="img-fluid"
                    src="https://admina.khetkhamar.org/public//uploads/all/oZTP0jGxQHGPuQ4bsrTUVJzzjrLAAd6BULqsJAjF.png"
                    alt="img"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
                <div
                  className="cat_item_name text-center"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  Daily Express
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
