import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const TrackShipment = () => {
  // const [selectedTab, setSelectedTab] = useState("tab1");
  const [trackingNo, setTrackingNo] = useState("");
  const [error, setError] = useState(null); // State for tracking errors
  
  const navigate = useNavigate();

  const handleTrackClick = () => {
    if (trackingNo.trim() === "") {
      setError("Please enter a valid tracking number / PIN Code"); // Set error if trackingNo is empty
    } else {
      navigate(`/tracking_details/${trackingNo}`);
      setError(null); // Clear the error if trackingNo is not empty
    }
  };

  // const handleTabChange = (event) => {
  //   setSelectedTab(event.target.value);
  //   setTrackingNo(""); // Clear tracking number when switching tabs
  //   setError(null); // Clear error when switching tabs
  // };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submission behavior (refresh)
      handleTrackClick(); // Call the same function as the track button click
    }
  };
  return (
    <>
      <section className="my-2">
      <div className="track-shipments">
            {/* <label>
              <input
                type="radio"
                value="tab1"
                checked={selectedTab === "tab1"}
                onChange={handleTabChange}
              />
              Tracking Number
            </label> */}

            {/* <label>
              <input
                type="radio"
                value="tab2"
                checked={selectedTab === "tab2"}
                onChange={handleTabChange}
              />
              Pincode Number
            </label> */}
             <div>
                <Form>
                  <div className="tracking_shipment">
                    <input
                      type="text"
                      placeholder="Enter Tracking Number / PIN Code"
                      value={trackingNo}
                      className="form-control "
                      onChange={(e) => setTrackingNo(e.target.value)}
                      onKeyPress={handleKeyPress} // Call handleKeyPress on key press
                      required
                    />
                    <button type="button" className="button-34" onClick={handleTrackClick}>
                      Track
                    </button>
                  </div>
                </Form>
                <br/>
                {error && <p className="error-message">{error}</p>} {/* Show error message */}
              </div>
            {/* {selectedTab === "tab1" && (
             
            )} */}
            {/* {selectedTab === "tab2" && (
              <div>
                <Form>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Six Digit Pincode"
                      className="form-control"
                      required
                    />
                    <button className="button-34" type="submit">
                      Track
                    </button>
                  </div>
                </Form>
              </div>
            )} */}
          </div>
      </section>
    </>
  );
};

export default TrackShipment;
