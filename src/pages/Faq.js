import React from "react";
import Accordion from "react-bootstrap/Accordion";


const Faq = () => {
  return (
    <>


      <div className="container">
        <div className="faq-heading">
          <p>FAQs</p>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How should I track my consignment?
                </Accordion.Header>
                <Accordion.Body>
                  You can track your consignment here
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How to book a consignment?</Accordion.Header>
                <Accordion.Body>
                  Kindly locate and visit the nearest franchisee here. Remember
                  to take a shipper copy after booking the consignment.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What are your delivery timings?
                </Accordion.Header>
                <Accordion.Body>
                  Our delivery timings are 10am to 8pm.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Why is my shipment not delivered yet?
                </Accordion.Header>
                <Accordion.Body>
                  There can be a number of reasons as to why your shipment has
                  not been delivered yet such as approval pending from centre,
                  lack of customers Phone no., discrepancy in address or
                  pincode, excessive load at the centre etc.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  When will my parcel will be picked up from the origin?
                </Accordion.Header>
                <Accordion.Body>
                  The usual pickup timings range in 2 slots: 12PM-3PM &amp;
                  3PM-6PM Depending upon the shipment load, your parcel may be
                  picked up earlier or somtimes later than expected arrival.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  What are the billing requirements?
                </Accordion.Header>
                <Accordion.Body>
                  Any queries relating to billing, payment or recharge can be
                  found in our Truxcargo dashboard. It&#39;s simple, just
                  register or login to our panel and get access to a lot more
                  features, information and more.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  What are your COD Remittance cycle?
                </Accordion.Header>
                <Accordion.Body>
                  At Truxcago, we make sure that our partners and clients get
                  their remmitances on or before time. We process any and all
                  remittances every Friday.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  My shipment is damaged, how do i claim my shipment insurance?
                </Accordion.Header>
                <Accordion.Body>
                  You can contact your assigned SPOC or our Customer Care.
                  Moreover it depends if you have taken shipment insurance or
                  not.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  Why is my parcel stuck at a centre for many days?
                </Accordion.Header>
                <Accordion.Body>
                  There can be many reasons as to why your parcel is stuck at a
                  centre such as vehicles not being available at that particular
                  point, transport way blockage. In such rare cases it can take
                  2-3 days to get your package delivered.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  How can i recharge my wallet for payments?
                </Accordion.Header>
                <Accordion.Body>
                  You can easily recharge your wallet through our dashboard.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  How can i track my consignments?
                </Accordion.Header>
                <Accordion.Body>
                  You can track your consignement effortlessly by going to our
                  site and inputting your tracking or LR number.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  How do i manage my Non-Delivery Report (NDR)?
                </Accordion.Header>
                <Accordion.Body>
                  We have an automated NDR management system which allows you
                  the user to act on it immediately. This can be accessed
                  through our dashboard.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-5">
            <div>
              <img src="/image/faq.svg" alt="" srcSet="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
