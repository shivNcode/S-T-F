import React from "react";
function Hero() {
  return (
    <div className="container text-center p-4 mt-3 mb-3">
      <br></br>
      <br></br>
      <h1 className="fs-3">Zerodha Products</h1>
      <br></br>
      <h3 className="fs-5">Sleek, modern, and intuitive trading platforms</h3>
      <br></br>
      <h5 className="fs-6">
        Check out our investment
        <a href=" " style={{ textDecoration: "none" }}>
          {" "}
          offerings →{" "}
        </a>
      </h5>
    </div>
  );
}

export default Hero;
