import React from "react";

const HomeStage = () => {
  const stage = {
    background: `url("/stage/bg-stage.svg")`,
    width: "100%",
    height: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

  };

  return (
    <>
      <div className="cargo-stage" style={stage}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div>
                <img src="/stage/1.svg" alt="" srcSet=""  />
                <div className="tooltip-bottom">
                  <h5>Choose Shipment</h5>
                  
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src="/stage/2.svg" alt="" srcSet=""  />
                <div className="tooltip-bottom">
                  <h5>Select Courier</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src="/stage/3.svg" alt="" srcSet=""  />
                <div className="tooltip-bottom">
                  <h5>Pack And Ship</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src="/stage/4.svg" alt="" srcSet=""  />
                <div className="tooltip-bottom">
                  <h5>Package Track</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStage;
