import React from "react";
// import intregraion from "../assets/images/animation_llyzwttj.json";
// import Lottie from "lottie-react";
// import 'react-easy-scroll-effect/dist/index.css'
const HeroProcess = () => {
  return (
    <>
         <section className="process-section margin_top_bottom">
          <div className="container-fluid ">
            <h4>Truxcargo <span>Superiority</span></h4>
            
            <div className="row mt-5 " >
              <div className="col-lg-6 col-md-6  col-12" >
                <div className="row">
                  
                    <div className="client">
                    <div className="working-featured ">
                      <h3>11,000+</h3>
                     <p>Trusted Clients</p>
                    </div>
                    </div>
               
                 
                    <div className="Orders">
                    <div className="working-featured ">
                      <h3>75M+</h3>
                     <p>Orders Fulfilled</p>
                    </div>
                    </div>
                
                
                  <div className="Experts">
                    <div className="working-featured ">
                      <h3>20+</h3>
                     <p>Courier Partners</p>
                    </div>
                    </div>
              
                 
                  <div className="Deliveries">
                    <div className="working-featured">
                      <h3>1 Lakh+</h3>
                     <p>Deliveries per Month </p>
                    </div>
                    </div>
                  
                
                  <div className="Integrations">
                    <div className="working-featured">
                      <h3>3,000+</h3>
                     <p>API Integrations</p>
                    </div>
                    </div>
                  
                
                  <div className="pincodes">
                    <div className="working-featured">
                      <h3>29,500+</h3>
                     <p>Served pincodes</p>
                     </div>
                    </div>
                 
                 
                </div>
              </div>
              <div className="col-lg-6">
                <div className="">
                  <img src="/image/superity_image.png" className="w-100"
                    
                  />
                </div>
                {/* <div className="lottie_animation_superiority">
                <Lottie
                  animationData={intregraion}
                  loop={true}
                  autoplay={true}
                  style={{ width: "350px", height: "100%"}}
                />
              </div> */}
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default HeroProcess;
