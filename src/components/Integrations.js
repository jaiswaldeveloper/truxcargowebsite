import React from "react";
// import intregraion from "../assets/images/NjFZoBSBuR.json";
// import Lottie from "lottie-react";

const Integrations = () => {
  return (
    <>
      <section className="integration margin_top_bottom">
        <div className="container-fluid">
              <h4>Ecommerce  <span>Integrations</span></h4>
          <div className="row">
            <div className="col-md-5">
            <div className="integration_picture ">
                <div className="integration_logo">
                  <img src="/image/shopify.svg" className="w-100" />

                  <img src="/image/amazon-web-services.svg" className="w-100" />
                <img src="/image/magento-1.svg" className="w-100" />
                  <img src="/image/woocommerce.svg" className="w-100" />
                </div>
              </div>
              <div className="integration_picture_magento mt-5">
                <p>"Elevate Your Ecommerce Game: Seamlessly Sync Multiple Channel Orders with TRUXCARGO's Dashboard. Say Goodbye to Coding Hassles and Unlock a World of Powerful Insights at Your Fingertips."</p>
                <ul>
                  <li>Elevate Ecommerce Efforts: TRUXCARGO's Magic Dashboard empowers ecommerce businesses effortlessly.</li>
                  <li>Simplified Order Synchronization: No coding complexities; synchronize multiple channel orders seamlessly.</li>
                  <li>User-Friendly Integration: Transform your website into a well-coordinated hub, merging data from various sources.</li>
                  <li>Insights at Your Fingertips: The dashboard provides invaluable insights for smarter decision-making.</li>
                  <li>Effortless Integration: Bid farewell to manual integration hassles with TRUXCARGO.</li>
                  <li>Enhanced Efficiency: Enjoy a smarter and more efficient ecommerce experience.</li>
                  <li>Magic in Operations: TRUXCARGO adds magic to your online business operations.</li>
                
                </ul>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
            <div>
              <img src="/image/ecomerce_intregation.png" alt="" srcset="" style={{width:"90%"}} />
            </div>
            <div className="intrgation_gif">
              <img src="/image/gif/intregation.gif" alt="" srcset=""style={{width:"60%"}} />
            </div>
            </div>
            
          
          </div>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-md-1">
              
            </div>
            {/* <div className="col-md-11">
              <div className="lottie_animation">
                <Lottie
                  animationData={intregraion}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100", height: "100%" }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Integrations;
