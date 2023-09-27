import React from "react";


const HeroCard = () => {
  return (
    <>
      <section className="herocard-section margin_top_bottom">
        <div className="container-fluid">
          <div>
            <h4>
            Platform <span>Attributes</span>
            </h4>
          </div>
          <div className="row ">
            <div className="col-lg-3 col-md-3 col-6 ">
             <div className="choose_wrapper">
              <img src="image/why_choose/1.png" alt="" srcset="" />
              <h5>Secure Delivery</h5>
              <p>We try best services from our side for the delivery so that product can be delivered securely and timely.</p>
             </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 ">
             <div className="choose_wrapper">
              <img src="image/why_choose/2.png" alt="" srcset="" />
              <h5>Payment Mode</h5>
              <p>We Offer to our customers to choose multiple mode of payment Prepaid, COD, ToPay and Franchise ToPay.</p>
             </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 ">
             <div className="choose_wrapper">
              <img src="image/why_choose/3.png" alt="" srcset="" />
              <h5>Smart Label</h5>
              <p>You can generate your shipping labels for multiple shipments with your brand name in a professional format.</p>
             </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 ">
             <div className="choose_wrapper">
              <img src="image/why_choose/4.png" alt="" srcset="" />
              <h5>Billing Accounts</h5>
              <p>You can check each transaction cost details any time easily so you can get idea of each shipment cost. </p>
             </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 ">
             <div className="choose_wrapper">
              <img src="image/why_choose/5.png" alt="" srcset="" />
              <h5>Early COD Remittance</h5>
              <p>We transfer weekly COD remittance which improve your business cash flow with Truxcargo.!</p>
             </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 ">
             <div className="choose_wrapper">
              <img src="image/why_choose/6.png" alt="" srcset="" />
              <h5>Insurance Cover</h5>
              <p>Ship stress-free with Trux Cargo, We provide Maximum insurance coverage for lost & damaged shipments.!</p>
             </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 ">
             <div className="choose_wrapper">
              <img src="image/why_choose/7.png" alt="" srcset="" />
              <h5>API Integration</h5>
              <p>We provide API that allows to process single or bulk shipments at single platform as well as track all shipments.</p>
             </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 ">
             <div className="choose_wrapper">
              <img src="image/why_choose/8.png" alt="" srcset="" />
              <h5>Best Support</h5>
              <p>We are committed to providing best customer care for shipping-related, tech related and other problems. </p>
             </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
