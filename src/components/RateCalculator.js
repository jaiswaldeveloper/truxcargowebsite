import React from "react";
import Calculator from "./Calculator";
const RateCalculator = () => {
  const calculator = {
    background: `url("/image/rate_section_bg.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <>
      <section
        className="rate-calculator2 margin_top_bottom"
        style={calculator}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 ">
              <div className="rate-content ">
                <div className="rate-calculator">
                  <h4>
                    Rate <span>Calculator</span>{" "}
                  </h4>
                  <h6>“Your Transparent Shipping Cost Estimation Tool”</h6>
                </div>

                <p>
                  Welcome to the Truxcargo Shipping Rate Calculator, your
                  reliable partner in cost transparency for shipping services.
                  We understand the importance of precise financial planning in
                  logistics, and our calculator is here to provide you with
                  accurate shipping cost estimates in a professional manner.
                  <br /> <br />
                  <ul>
                    <li>
                      Our advanced Rate Calculator considers crucial factors:
                      pin codes, shipment weight, pickup, and delivery
                      locations.
                    </li>
                    <li>
                      This meticulous approach ensures clarity on shipping
                      expenses before your cargo begins its journey.
                    </li>
                    <li>
                      Truxcargo offers a distinct advantage: access to rate
                      comparisons from trusted shipping partners.
                    </li>
                    <li>
                      This professional, data-driven approach empowers you to
                      optimize shipping costs through informed decisions.
                    </li>
                    <li>
                      Embrace the Truxcargo Shipping Rate Calculator for
                      professionalism, transparency, and cost-effectiveness in
                      logistics.
                    </li>
               
                  </ul>
                </p>
              </div>
              {/* <div className="text-center">
                <img src={rate} alt="" srcSet="" className="w-100" />
              </div> */}
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <Calculator />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RateCalculator;
