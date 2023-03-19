const Homes = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar */}
        <div
          className="col-3 bg-light"
          style={{ height: "70vh", position: "fixed", left: 0 }}
        >
          <ul className="list-unstyled mt-3">
            <li>
              <a>Category 1</a>
            </li>
            <li>
              <a>Category 2</a>
            </li>
            <li>
              <a>Category 3</a>
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="col-9 offset-3" style={{ paddingTop: "50px" }}>
          <img
            src="https://bobbyhadz.com/images/blog/list-stacks-aws-cdk/banner.webp"
            alt="Homepage Image"
            width={800}
            height={400}
            loading="lazy"
            style={{ objectFit: "cover", width: "100%", height: "70%" }}
          />

          {/* Category View */}
          <div className="row mt-3">
            <div className="col-3">
              <img
                src="https://via.placeholder.com/50.png"
                alt="Category img"
                width={50}
                height={50}
              />
              <h6 className="mt-2">Category 1</h6>
            </div>
            <div className="col-3">
              <img
                src="https://bobbyhadz.com/images/blog/react-update-version/banner.webp"
                alt="Category img"
                width={50}
                height={50}
              />
              <h6 className="mt-2">Category 2</h6>
            </div>
            <div className="col-3">
              <img
                src="https://bobbyhadz.com/images/blog/react-update-version/banner.webp"
                alt="Category img"
                width={50}
                height={50}
              />
              <h6 className="mt-2">Category 3</h6>
            </div>
            <div className="col-3">
              <img
                src="https://bobbyhadz.com/images/blog/react-update-version/banner.webp"
                alt="Category img"
                width={50}
                height={50}
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
