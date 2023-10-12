import React from "react";
import Calculator from "./Calculator";
import { Button } from "react-bootstrap";
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
                
                  
                </p>
                <p> Our advanced Rate Calculator takes into account essential factors such as pin codes, shipment weight, as well as precise pickup and delivery locations. This meticulous approach ensures that you have a clear understanding of your shipping expenses well before your cargo begins its journey.
</p>
                <Button className="btn button-cal">
         Calculate
       </Button>
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
