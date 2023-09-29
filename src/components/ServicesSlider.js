import React, { useEffect } from "react";
import $ from "jquery";
import "animate.css";

const ServicesSlider = () => {

  const trusted = {
    background: `url("/image/aboutus/seller_bg.png")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "100%",
    height: "400px",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    borderRadius: "30px"
  };


  useEffect(() => {
    $(".boxes").hover(function () {
      $(".boxes").removeClass("active");
      $(this).addClass("active");
    });
  }, []);
  return (
    <>
      <div className="service_slider  margin_top_bottom">
        <div className="container-fluid">
          <h4>World-class team</h4>
          <p>
            NDR or Non-Delivery Report is a notification shared by courier
            companies specifying the orders which could not be delivered in a
            certain timeframe. When a delivery agent is unable to successfully
            deliver the order, which might happen for a variety of reasons like
            “incorrect address” or “customer unavailability”, the order is
            marked as an NDR.
          </p>
          <div className="row">
            <div className="col-md-12">
              <div class="box-area">
                <div class="boxes active">
                  <img src="/image/service_slider/slide_1.jpeg" alt="img" />
                </div>
                <div class="boxes">
                  <img src="/image/service_slider/slide_2.jpeg" alt="img" />
                </div>
                <div class="boxes">
                  <img src="/image/service_slider/slide_3.jpeg" alt="img" />
                </div>
                <div class="boxes">
                  <img src="/image/service_slider/slide_4.jpeg" alt="img" />
                </div>
                <div class="boxes">
                  <img src="/image/service_slider/slide_5.png" alt="img" />
                </div>
                <div class="boxes">
                  <img src="/image/service_slider/slide_6.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="seller_section" style={trusted}>
        <div className="row justify-content-center">
          <div className="col-md-5 col-11 ">
          <div className="shiping_now_inside_about">
            <h4>Trusted By Thousands of Online Sellers</h4>
            <p>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, praesentium.
            </p>
            <button className="btn btn-light ">Start Shipping Today</button>
          </div>
          </div>
        </div>
          </div>
          
        </div>
 


   
      </div>
    </>
  );
};

export default ServicesSlider;
