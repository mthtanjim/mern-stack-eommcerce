import homeimg from "./../img/home.jpg"
import ct1 from "./../img/cat1.png"
import ct2 from "./../img/cat2.png"
import ct3 from "./../img/cat3.jpg"
import ct4 from "./../img/cat4.png"
import Sidebar from "./LeftSidebar"

const Homes = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-5">
        {/* Left Sidebar */}
        <div
          className="col-3 bg-light"
          style={{ height: "70vh", position: "fixed", left: 0 }}
        >
          <Sidebar/>
        </div>

        {/* Right Content */}
        <div className="col-9 offset-3 pb-5">
          <div className="mb-3" >
          <img
            src={homeimg}
            alt="Homepage photos"
            width={800}
            height={400}
            loading="lazy"
            style={{ objectFit: "cover", width: "100%", height: "70%" }}
          />

          </div>
          
          {/* Category View */}
          <div className="row mt-3 d-flex justify-content-evenly">
            <div className="col-3">
              <img
                src={ct1}
                alt="Category img"
                width={100}
                height={100}
              />
              <h6 className="mt-2">Category 1</h6>
            </div>
            <div className="col-3">
              <img
                src={ct2}
                alt="Category img"
                width={100}
                height={100}
              />
              <h6 className="mt-2">Category 2</h6>
            </div>
            <div className="col-3">
              <img
                src={ct3}
                alt="Category img"
                width={100}
                height={100}
              />
              <h6 className="mt-2">Category 3</h6>
            </div>
            <div className="col-3">
              <img
                src={ct4}
                alt="Category img"
                width={100}
                height={100}
              />
              <h6 className="mt-2">Category 4</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
