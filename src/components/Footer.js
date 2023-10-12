import React from "react";
import footerlogo from "../assets/images/footer-logo.svg";
import Facebook from "../assets/images/socialmedia/facebook.png";
import Insta from "../assets/images/socialmedia/instagram.png";
import Linkdin from "../assets/images/socialmedia/linkedin.png";
import Twitter from "../assets/images/socialmedia/twitter.png";
// import manimg from "../assets/images/partner/man.png";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";
import NewsLetter from "./NewsLetter";



const Footer = () => { 
  return (
    <>

      <section className="footer-section  margin_top_bottom"  >
   <img src="image/monuments.png" alt="" srcset=""  className="w-100"/>
        <div className="container-fluid mt-5">
         
          <div className="row">
            <div className="col-md-3">
              <div>
                <h3>
                  {" "}
                  <img
                    src={footerlogo}
                    alt=""
                    srcSet=""
                    className="footer-logo"
                  />
                </h3>
              </div>
              <ul>
                <p>Welcome to TruxCargo! We are a pioneering logistics technology company with a mission to transform the way goods are moved, managed, and delivered. Our AI-enabled platform is designed to optimize supply chain operations, streamline transportation processes, and enhance overall efficiency.</p>
              </ul>
        
            </div>
            <div className="col-md-2 col-6">
              <h3>Services</h3>
              <ul>
                <li>Ecommerce-Retail</li>
                <li>B2C Air Freight</li>
                <li>Full Truck Load</li>
                <li>Document Courier</li>
                <li>Part Truck Load</li>
                <li>Hire a Fleet</li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <h3>Information</h3>
              <ul>
                <li>FAQ</li>
                <li>Career</li>
                <li>
                  {" "}
                  <Link to="/blog"> Blog</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/termandcondition"> Terms & Conditions</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/privacypolicy">Privacy Policy </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/refundandcancellation">
                    Refund & Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12">
              <h3>Solutions</h3>
              <ul>
                <li>Weight Reconciliation</li>
                <li>NDR Management</li>
                <li>Truxcargo Packaging</li>
                <li>Timely COD Remittance</li>
                <li>Multiple Shipping Partners</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div className="col-md-3">
              <div>
                <h3>
                Get In Touch
                </h3>
              </div>
              <ul>
              <div className="d-flex">
              <i className="fa-solid fa-location-dot"></i>
                <p>
                  01-802, 8th Floor,
                  KLJ Tower, Plot No. B-5, NSP, Pitampura, Delhi - 110034
                </p>
              </div>

              <div className="d-flex">
              <i className="fa-solid fa-envelope"></i>
                <p>
                support@truxcargo.com
                </p>
              </div>
              <div className="d-flex">
              <i className="fa-solid fa-phone"></i>
                <p>
                +91-9315033113
                </p>
              </div>
              
             
              </ul>
          
            </div>
          </div>

          <div className="row justify-content-end">
          <div className="col-md-4"></div>
            <div className="col-md-4">


            <div className=" button-85 social-media ">
              <h5>Follow us</h5>
                <img src="/image/social_media/twiter.svg"/>
                <img src="/image/social_media/facebook.svg"/>
                <img src="/image/social_media/instagram.svg"/>
                <img src="/image/social_media/linkdin.svg"/>
              </div>
            </div>
            <div className="col-md-4">
            <ScrollToTopButton/>
            </div>
          
          </div>
          <div className="row justify-content-end">
          
          </div>
          <hr />
          <div className="row justify-content-center">
            <div className="col-md-8">
             <div className="footer_term">
             <p>
                Copyright © 2023 Truxcargo Pvt. Ltd. All rights reserved.
              </p>
              <div >
                <p>Made In  <img src="/image/flag.svg" className="flag"/> with <i class="fa-solid fa-heart"></i> </p>
              </div>
             </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
