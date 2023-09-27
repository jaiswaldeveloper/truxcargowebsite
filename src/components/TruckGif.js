import React from "react";

const TruckGif = () => {
  const styles = {
    backgroundImage: `url('/image/road.png')`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    height: "58px",
    overflow: "hidden",
  };
  return (
    <>

     
      <div className="road-section-divider mt-5" style={styles}>
        <div className="contoiner-fluid">
          <div className="road-divider-content">
            <div className="road-border">
              <img
                src="/image/truck1.png"
                alt="car-item"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
      <div className="row">
        <img src="/videos/truckgif.gif" alt="My GIF"  className="w-100" style={{padding:"0"}}/>
      </div>
    </div> */}
    </>
  );
};

export default TruckGif;
