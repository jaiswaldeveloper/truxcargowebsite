import React from "react";

import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  const contact = {
    background: `url("/image/contactus/bg_contact.svg")`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "5rem 0",
  };

  const coustomer = {
    background: `url("/image/contactus/customer2.png")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "100%",
    height: "600px",
    backgroundRepeat: "no-repeat",
    padding: "215px",
    borderRadius: "30px"
  };
  const signup = {
    background: `url("/image/contactus/signup.png")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    borderRadius: "30px"
  };
  return (
    <>
      <Navigation />
      
      <section className="contact_section" style={contact}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 step-part">
            <div className="left-side primum-steps">
              <h4>Contact us</h4>
              <p className="text-white">Reduce undelivery with our automated NDR management solution</p>
              <button class="btn btn-outline-light ">Explore</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right_side">
             <img src="/image/contactus/banner.png" alt="" srcset=""  />
            </div>
          </div>
        </div>

    
      </div>
      </section>
      <div className="container-fluid mt-2">
      <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="let_connect ">
              <div className="let_connect_blur">
                <h4>Lets Connet With Us</h4>
              </div>
            </div>
            <div className="contact_number">
              <p><img src="/image/contactus/icon/Vector-1.png" alt="" srcset=""  />+91 9315033113</p>
              <p> <img src="/image/contactus/icon/Vector.png" alt="" srcset="" /> Support@truxcargo.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid margin_top_bottom">
        <h2>Get In Touch</h2>
        <div className="row ">
          <div className="col-md-7">

            <div className="colling"> 
              <p><img src="/image/contactus/icon/Group 1419.png" alt="" srcset=""  /> 801-802, 8th Floor, KLJ Tower, Plot No. B-5, NSP, Pitampura, Delhi - 110034</p>
              <p><img src="/image/contactus/icon/Group 1578.png" alt="" srcset=""  />+91 9315033113</p>
              <p> <img src="/image/contactus/icon/Group 1581.png" alt="" srcset=""  />Support@truxcargo.com</p>
            </div>
            <div className="map " >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13999.799686185928!2d77.1509437!3d28.6911446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0363c3664ebd%3A0xa3f0b3a2b655a4a9!2sTrux%20Cargo!5e0!3m2!1sen!2sin!4v1695639098363!5m2!1sen!2sin"
              title="Google Maps"
              style={{ width: "100%", height: "400px", border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
          </div>
          <div className="col-md-5">
           <ContactForm/>
          </div>
        </div>
      </div>

      <div className="container-fluid" >
        <div className="customer_connect" style={coustomer}>

        </div>
      
      </div>
      <div className="container-fluid" >
        <div className="contact_signup" style={signup}> 
        <div className="row justify-content-center">
          <div className="col-md-8 col-11 ">
          <div className="shiping_now_inside text-white">
            <h1>Ready to begin your growth journey?</h1>
            <p>
            Start with Us
            </p>
            <button className="btn btn-light ">Sign up</button>
          </div>
          </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default ContactPage;
