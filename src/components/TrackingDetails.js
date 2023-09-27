import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TrackShipment from "./Tracking";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import OrderStatus from "./OrderStatus";

const TrackingDetailsPage = () => {
  const tracking = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/image/truck-road-d-rendering.jpg")`,
    padding: "2rem",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "60vh",
    paddingTop: "4rem",
    color: "#fff",
  };
  const map = {
    backgroundImage: ` url("/image/road_scan.jpg")`,
    // backgroundSize: "cover",
    backgroundPosition: "38% 0", // X and Y offset values
    backgroundRepeat: "no-repeat",
  };

  const { trackingNo } = useParams();
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTrackingData = async () => {
      try {
        const response = await fetch(
          `https://b2b.truxcargo.com/api/truxapi/tracking/${trackingNo}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTrackingData(data.data);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(
          "Tracking History is not available for this tracking no. Please try sometime"
        );
        setTrackingData(null);
        setLoading(false);
      }
    };

    fetchTrackingData();
  }, [trackingNo]);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <Skeleton count={5} />
          </div>
        </div>
      </div>
    );
  }

  // const statusToClass = {
  //   Manifested: "manifested",
  //   "In Transit": "transit",
  //   Pickup: "pickup",
  //   Pending: "pending",
  //   Delivered: "delivered",
  //   "Not Picked": "notpicked",
  //   RTO: "rto",
  //   Dispatched: "dispatched",
  // };

  return (
    <>
      <div className="tracking-section" style={tracking}>
        <div className="container">
          <div className="row ">
            <div className="col-md-5">
              <TrackShipment />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {error && <p>{error}</p>}

        {trackingData && (
          <div className="container">
            <div className="row ">
              <div className="col-md-7">
              <div class="breadcrumb flat">
                  {trackingData.status === "Not Picked" ? (
                    <Link
                    to="javascript:void(0)"
                    className={`${
                      trackingData.status === "Not Picked"
                        ? "activenotpicked"
                        : ""
                    }`}
                  >
                    Not Picked
                  </Link> 
                  ): null
                  
                
                }
                  <Link
                    to="javascript:void(0)"
                    className={`${
                      trackingData.status === "Manifested"
                        ? "activeManifested"
                        : ""
                    }`}
                  >
                    Manifiest
                  </Link>
             
                  <Link
                    to="javascript:void(0)"
                    className={`${
                      trackingData.status === "In Transit"
                        ? "activeTransit"
                        : ""
                    }`}
                  >
                    In Transit    
                  </Link>
                  <Link
                    to="javascript:void(0)"
                    className={`${
                      trackingData.status === "Pending" ? "activePending" : ""
                    }`}
                  >
                    Pending
                  </Link>
                  <Link
                    to="javascript:void(0)"
                    className={`${
                      trackingData.status === "Dispatched"
                        ? "activeDispatched"
                        : ""
                    }`}
                  >
                    Dispatched
                  </Link>
                  <Link
                    to="javascript:void(0)"
                    className={`${
                      trackingData.status === "Delivered"
                        ? "activeDelivered"
                        : ""
                    }`}
                  >
                    Delivered
                  </Link>
                 {/* Show RTO link conditionally if the status is RTO then show RTO Link otherwise hide the link */ }
                 {trackingData.status === "RTO" ? (
                    <Link
                      to="javascript:void(0)"
                      className={`${
                        trackingData.status === "RTO" ? "activeRTO" : ""
                      }`}
                    >
                      RTO
                    </Link>
                  ) : null}
                </div>
                {/* <div className="order-details scan_tracking" style={map}>
                  {trackingData.scaninfo.map((scan, index) => (
                    <div key={index}>
                      <div className="scan_details d-flex justify-content-around">
                        <p
                          className="status_scan"
                          dangerouslySetInnerHTML={{ __html: scan.status }}
                        ></p>
                        
                        <div
                          className={` tracking_icon ${
                            statusToClass[trackingData.status]
                          }`}
                        >
                          <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div
                          className="tracking_action"
                          style={{ width: "300px" }}
                        >
                          <p>{scan.remark}</p>
                          <p>{scan.location}</p>
                          <p>{scan.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div> */}
                <div className="order-details scan_tracking" style={map}>
                  {trackingData.scaninfo.map((scan, index) => (
                    <div key={index}>
                      <div className="scan_details d-flex justify-content-around">
                        <p
                          className="status_scan"
                          dangerouslySetInnerHTML={{ __html: scan.status }}
                        ></p>
                        <div
                          className= {`tracking_icon ${scan.status} ${scan.status !== trackingData.status ? "mismatched_status": ""} `} 
                            
                        >
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div
                          className="tracking_action"
                          style={{ width: "300px" }}
                        >
                          <p>{scan.remark}</p>
                          <p>{scan.location}</p>
                          <p>{scan.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-5 mb-4">
                <div className="order-details tracking-orders">
                  <div className="d-flex justify-content-between">
                    <p>
                      <img
                        src={trackingData.image}
                        alt="Carrier Logo"
                        style={{ width: "200px" }}
                      />
                     
                    
                    </p>
                    <div>
                      <p className="master_no">{trackingData.masterNo}</p>
                      
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>
                      <h6>LR No.</h6> {trackingData.tracking_no}
                    </p>

                    <p style={{ width: "170px" }}>
                      <h6>No. of Boxes</h6> {trackingData.boxCount}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p>
                      <h6>Pickup Date</h6> {trackingData.deliveredDate}
                    </p>
                    <p style={{ width: "170px" }}>
                      <h6>Order ID</h6> {trackingData.orderId}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                  <p>
                    <h6>Expected Date of Delivery</h6>{" "}
                    {trackingData.promisedDate}
                  </p>
                  <p style={{ width: "170px" }}>
                  <h6>Status</h6>   {trackingData.status}
                      </p >
                      </div>
                  {/* {trackingData.master_waybill && (
                    <p>
                      <h6>Master Waybill:</h6>{" "}
                      {trackingData.master_waybill}
                    </p>
                  )} */}

                  <p>
                    <h6>Payment Mode</h6> {trackingData.mode}
                  </p>
                  {/* <p>
                    <h6>Pickup Date:</h6> {trackingData.manifestDate}
                  </p> */}
                  {/* <p>
                      <h6>Pickup Date:</h6>{" "}
                      {trackingData.pickupDate || "Not available"}
                    </p> */}
                  <h6>Receiver</h6>
                  <p>
                    {trackingData.consignee.name}
                    <br />
                    {trackingData.consignee.address}
                    <br />
                    {trackingData.consignee.city}
                    <br />
                    {trackingData.consignee.state}
                    <br />
                    {trackingData.consignee.pincode}
                  </p>
                </div>

                <div>
                  <img
                    src="/image/ads.jpg"
                    alt=""
                    srcset=""
                    className="w-100 mt-3"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7"></div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5">
        <OrderStatus />
      </div>
    </>
  );
};

export default TrackingDetailsPage;
