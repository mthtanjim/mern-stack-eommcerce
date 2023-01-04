import React from "react";

const Jumbotron = ({title, subTitle="this is default subtitle"}) => {

  return (
    <div className="container-fluid bg-primary ">
      <div className="row">
        <div className="col text-center p-5 bg-light ">
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
