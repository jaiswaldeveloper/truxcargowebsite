import React from "react";
import air from "../assets/images/plan-box2.png";
import AOS from "aos";
// import "aos/dist/aos.css";
const HeroAir = () => {
  // useEffect(() => {
  //   AOS.init({
     
  //   });
  // }, []);
  return (
    <>
    <section className="homeair-section">
      <div className="container mt-5">
        <div className="row justify-content-center  ">

        <div className="col-md-7 col-12 ordersecond">
        <div className="procees-image">

              <img src={air} alt="" srcSet="" className="w-100" />
        </div>
           
          </div>
          <div className="col-md-5">
            <div className="about-bg grow">
              <h4>Bussiness</h4>
              <h5>Grow Your Business </h5>
              <ul>
                <li>Hassle-free Clearance</li>
                <li>Shipping Starts at ₹215/50gm</li>
                <li>11+ Service Partners</li>
                <li>Serviceability Across 2900+ Pincodes</li>
                <li>Minimum Documentation</li>
                <li>24×7 Support</li>
                <li>Two-day Deliveries</li>
                <li>Cargo & Courier Services</li>
                <li>Save Up To 25%* On Shipments</li>

                <li>Key Account Manager Service</li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
      </section>
    </>
  );
};

export default HeroAir;
