import React from "react";
import image from "../assets/images/partner/banner/tracking-01.svg";
import ServicesBanner from "../components/ServicesBanner";
import TrackShipment from "../components/Tracking";
import TrackTimeLine from "./TrackTimeLine";
import Slide1 from "../assets/images/partner/amazon.png";

const TrackPage = () => {
  const styles = {
    background: " #a7a7ff",
    padding: "1rem",
    textAlign: "center",
  };

  return (
    <>


      {/* <ServicesBanner image={image}  /> */}
      <div className="tracking-page-sections" style={styles}>
        <TrackShipment />
      </div>

      <div className="section track-page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="order-details">
                <h4>Order Details</h4>
                <div className="order-flex">
                  <div className="order-left-side" style={{ width: "60%" }}>
                    <dl>
                      <dt>LR No.</dt>
                      <dd>356589252</dd>

                      <dt>Payment Mode</dt>
                      <dd>Prepaid</dd>
                      <dt>Recipient</dt>
                      <dd>INDHU GOWTHAM</dd>
                      <dd>
                        89 PLS Nagar Phase 2, Chinniyampalayam, (po) Coimbatore,
                        Neelambur
                      </dd>
                      <dd>Tamil Nadu -641062</dd>
                      <dt>Email</dt>
                      <dd>parasolinservice@gmail.com</dd>
                      <dt>Phone</dt>
                      <dd>9335528880</dd>
                    </dl>
                  </div>
                  <div className="order-right-side" style={{ width: "40%" }}>
                    <dl>
                      <dd>
                        <img src={Slide1} alt="err" className="w-75" />
                      </dd>
                      <dt>Order Id</dt>
                      <dd>UFSSG549/23-24</dd>

                      <dt>Shipment created on</dt>
                      <dd>27 Jun, 2023, 16:31 IST </dd>
                      <dt>Deliver by</dt>
                      <dd>11 July, 2023, 18:30 IST </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="order-details">
                <h4>Package Details</h4>
                <div className="order-flex">
                  <div className="order-left-side" style={{ width: "60%" }}>
                    <dl>
                      <dt>Shipping to</dt>
                      <dd>INDHU GOWTHAM</dd>
                      <dd>
                        89 PLS Nagar Phase 2, Chinniyampalayam, (po) Coimbatore,
                        Neelambur
                      </dd>
                      <dd>Tamil Nadu -641062</dd>
                      <dt>Email</dt>
                      <dd>parasolinservice@gmail.com</dd>
                      <dt>Phone</dt>
                      <dd>9335528880</dd>
                    </dl>
                  </div>
                  <div className="order-right-side" style={{ width: "40%" }}>
                    <dl>
                      <dt>Tracking Id</dt>
                      <dd>3245364843</dd>
                      <dt>Shipping speed </dt>
                      <dd>Standard - Rs 114.00</dd>
                      <dt>Package Weight </dt>
                      <dd>2Kg</dd>
                      <dt>Item </dt>
                      <dd>1</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="order-details">
                <h4>Shipment Tracker</h4>
                <p className="mb-3">Tracking Id: 3245364843</p>
                <TrackTimeLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackPage;
