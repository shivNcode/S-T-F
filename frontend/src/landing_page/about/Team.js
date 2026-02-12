import React from "react";
function Team() {
  return (
    <div className="container  border-top">
      <div className="row  mt-5 p-2">
        <h1 className="text-center fs-3 text-muted">People</h1>
      </div>
      <div className=" fs-6 row  mt-3 p-5 ">
        <div className="col-1"></div>
        <div className="col-5 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ width: "70%", borderRadius: "50%" }}
            alt="Nitin Kamath"
          />
          <br></br>
          <h3 className="mt-1 fs-4">Nithin Kamath</h3>
          <h4 className="text-muted mtt-1 mb-2 fs-6">Founder, CEO</h4>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-3 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <br></br>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <br></br>
          <p>Playing basketball is his zen.</p>
          <br></br>
        </div>
         <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Team;
