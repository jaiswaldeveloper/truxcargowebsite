import React, { useEffect } from "react";

import Tracking from "./Tracking";
import $ from "jquery";
import "animate.css";


const HeroBanner = () => {
  const bghome = {
    background: `url("image/bg_home.jpg")`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    position: "relative",
    // borderRadius: " 0 0 20px 20px",
    paddingTop: "7rem",

    top: "0",
  };

  useEffect(() => {
    $(".box").hover(function () {
      $(".box").removeClass("active");
      $(this).addClass("active");
    });

  }, []);

  return (
    <>
      <section className="hero-banner" style={bghome} >
        <div className="container-fluid">
          <div className="row">
            <div className=" col-lg-4 col-md-12 col-12 step-part">
              <div className="primum-steps">
              <h1 className=" animate__fadeInDown">
                <span>Deliver Your Dream Shipment Now.</span>
              </h1>

              <div>
                <Tracking />
              </div>
              </div>
             
            </div>
            {/* <div className="col-md-1"></div> */}
            <div className=" col-lg-8 col-md-12 col-12">
           <div className="home_slider">
              <div class="box-area">
                <div class="box active">
                <p>One Stop Solution For all shipping Needs</p>
                  <img src="/image/slide_1.png" alt="img" />
                  <div className="image_btn"> Shipping</div>


                 
                </div>
                <div class="box">
                  <p>Secure Delivery & Easy Payment</p>
                  <img src="/image/slide_2.png" alt="img" />
                  <div className="image_btn"> Secure Delivery</div>
                </div>
                <div class="box">
                  <p>API Integration & Customer support</p>
                  <img src="/image/slide_3.png" alt="img" />
                  <div className="image_btn">API Integration </div>
                </div>
                <div class="box">
                  <p>User friendly client panel & Advanced Analytics.</p>
                  <img src="/image/slide_4.png" alt="img" />
                  <div className="image_btn">Client panel</div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroBanner;
