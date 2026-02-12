import React from "react";
function LeftSection({
  imageURL,
  titel,
  description,
  trydemoURL,
  learnmoreURL,
  playstoreURL,
  appstoreURL,
  m1,
  m2,
}) {
  return (
    <div className="container mt-5 p-5 border-top">
      <div className="row">
        <div className="col-6">
          <img
            src={imageURL}
            style={{ width: "80%" }}
            alt="product"
            className="img-fluid"
          />
        </div>
        <div className="col-5 p-5 mt-4">
          <h1 className="fs-2">{titel}</h1>
          <p className="fs-6">{description}</p>
          <a href={trydemoURL} className="btn btn-primary m-4">
            {m1}
          </a>
          <a href={learnmoreURL} className="btn btn-secondary m-4">
            {m2}
          </a>
          <br></br>
          <a href=" " className="m-4">
            <img src={playstoreURL} alt="playstore" />
          </a>
          <a href=" " className="m-4">
            <img src={appstoreURL} alt="appstore" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
