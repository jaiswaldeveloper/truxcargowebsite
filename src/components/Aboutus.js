import React, { useEffect } from "react";
import backgroundImage from "../assets/images/bg-about.svg";
import { Button } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Aboutus = () => {


  useEffect(() => {
    AOS.init({

    });
  }, []); 
  return (
    <>
      <div className="about-section mt-4 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-5 step-part orderfirst">
                  <div className="primum-steps about-bg  ">
                    <div data-aos="fade-right" >
                      <h1>
                        Trusted Logistic <br /> & Transport
                      </h1>
                      {/* <img src="/image/dilevery_7.png" alt="" srcset="" className="w-50" /> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-7 orderscecond">
                  <div className="about-bg">
                    <h4>Company</h4>
                      <h5>Who We Are </h5>
                    <p>
                      Truxcargo Pvt. Ltd. is an AI-Enabled Shipping Platform
                      (SaaS) with decades of knowledge and experience. It is one
                      of the fast-growing tech-enabled logistics companies that
                      offers industry-best pricing with leading shipping
                      partners for all your shipping needs. With Truxcargo, you
                      will get multiple shipping partners with comparable rates
                      and much more from a single platform. Truxcargo has been
                      using innovative ideas to simplify the eCommerce platform
                      for sellers and save essential time and money. We help
                      sellers to focus on their business rather than finding
                      reliable shipping partners. <br />
                      <br />
                      Our aim is to provide hassle-free and streamlined shipping
                      solutions to make your market presence a smooth ride. It
                      offers an innovative one-stop shop for all logistics
                      services, right from the automatic allocation of the
                      courier to dispatch to the last mile delivery of packages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
