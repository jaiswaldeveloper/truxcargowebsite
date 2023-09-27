import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Navigation from "../components/Navigation";
const NdrMangement = () => {
  const styles = {
    background: `url("/image/Solutionss/ndr/styles1.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width:"100%",
    height: "75vh",
    backgroundRepeat: "no-repeat",

    }
  const trusted = {
    background: `url("/image/Solutionss/ndr/Frame1414.png")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    width:"100%",
    // height: "100vh",
    backgroundRepeat: "no-repeat",
   
    }
  return (
    <>
    <Navigation/>
      <div className="inner-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 step-part">
              <div className="service_top_content primum-steps">
                <h4>NDR Management</h4>
                <p className="text-white">
                  Reduce undelivery with our automated NDR management solution
                </p>
                <button class="btn btn-outline-light ">Explore</button>
              </div>
            </div>
            <div className="col-md-7">
              <div className="text-end">
                <img
                  src="/image/SolutionsS/ndr/1.png"
                  alt=""
                  srcSet=""
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    
        <div className="container-fluid margin_top_bottom">
      <div className="ndr-mangement-section ">
          <div className="ndr-mangemnet-part">
            <div className="row">
            <div className="col-md-6">
              <h2>What is Non-Delivery Report(NDR)</h2>

              <p>
                NDR or Non-Delivery Report is a notification shared by courier
                companies specifying the orders which could not be delivered in
                a certain timeframe. When a delivery agent is unable to
                successfully deliver the order, which might happen for a variety
                of reasons like “incorrect address” or “customer
                unavailability”, the order is marked as an NDR.
              </p>

              <ol>
                <li>Immediate action by courier agent</li>
                <li>Reach out to buyers in real time</li>
                <li>Handle undelivered orders in one place</li>
                <li>Reduce RTO with decreased ND</li>
              </ol>
              <p>
                To process an NDR, you need to respond to the raised NDR with
                “Reattempt” or “Return to Origin” (as per the situation) along
                with the appropriate remarks. A maximum of 3 attempts are done
                by the courier partner to deliver your order to the end customer
                post which is marked as RTO (Return to Origin), and the shipment
                is returned to the pickup location
              </p>
            </div>

            <div className="col-md-6">
              <div className="text-end">
                <img
                  src="/image/Solutionss/ndr/2.png"
                  alt=""
                  srcset=""
                 style={{width: "85%"}}
                />
              </div>
            </div>
            </div>
          </div>
      </div>
        </div>

      <section className="stages_section margin_top_bottom">
        <div className="container-fluid">
          <h4>Stages</h4>
          <div className="row ">
            <div className="col-md-6 step-part ">
              <div className="primum-steps">
                <h2></h2>
                <h5><span>Stage 1:</span> Identify failed delivery attempts (NDR) in real-time</h5>
                <p>
                  ClickPost has deep API integrations with carriers enabling
                  real-time identification and categorization of NDRs. Data is
                  pushed from carriers to Clickpost and ClickPost engine
                  auto-categorises them into 'Address Issue', 'Delivery
                  rescheduled'.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-end">
                <img src="/image/Solutionss/ndr/3.png" alt="" srcset="" />
              </div>
            </div>
          </div>

        
          <div className="row  mt-4 ">
            <div className="col-md-6 step-part ">
              <div className="primum-steps">
          
                <h5><span>Stage 2:</span>  Seek response from customers to ensure delivery</h5>
                <p>
                  ClickPost has deep API integrations with carriers enabling
                  real-time identification and categorization of NDRs. Data is
                  pushed from carriers to Clickpost and ClickPost engine
                  auto-categorises them into 'Address Issue', 'Delivery
                  rescheduled'.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-end">
                <img src="/image/Solutionss/ndr/4.png" alt="" srcset="" />
              </div>
            </div>
          </div>
     
          <div className="row mt-4 ">
            <div className="col-md-6 step-part ">
              <div className="primum-steps">
       
                <h5><span>Stage 3:</span>   Integrated NDR management portal</h5>
                <p>
                  ClickPost has deep API integrations with carriers enabling
                  real-time identification and categorization of NDRs. Data is
                  pushed from carriers to Clickpost and ClickPost engine
                  auto-categorises them into 'Address Issue', 'Delivery
                  rescheduled'.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-end">
                <img src="/image/Solutionss/ndr/5.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </section>
        <div className="container-fluid margin_top_bottom">
      <div className="ndr-mangement-section ">
          
          <div className="ndr-mangemnet-part">
            <h2>REASONS FOR NDR</h2>
            <p>NDR or Non-Delivery Report is a notification shared by courier companies specifying the orders which could not be delivered in a certain timeframe. When a delivery agent is unable to successfully deliver the order, which might happen for a variety of reasons like “incorrect address” or “customer unavailability”, the order is marked as an NDR.</p>
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="resons_ndr_card">
                  <img src="/image/Solutionss/ndr/icons/1.png" alt="" srcset="" />
                  <h5>Wrong address</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempora.z</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="resons_ndr_card">
                  <img src="/image/Solutionss/ndr/icons/2.png" alt="" srcset="" />
                  <h5>Incorrect Phone number</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempora.z</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="resons_ndr_card">
                  <img src="/image/Solutionss/ndr/icons/3.png" alt="" srcset=""/>
                  <h5>Customer rejected delivery</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempora.z</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="resons_ndr_card">
                  <img src="/image/Solutionss/ndr/icons/4.png" alt="" srcset=""/>
                  <h5>Outside of delivery area</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempora.z</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="resons_ndr_card">
                  <img src="/image/Solutionss/ndr/icons/5.png" alt="" srcset="" />
                  <h5>Customer not available</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempora.z</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="resons_ndr_card">
                  <img src="/image/Solutionss/ndr/icons/6.png" alt="" srcset=""/>
                  <h5>NDR Fake Delivery Attempt</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempora.z</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="resons_ndr_card">
                  <img src="/image/Solutionss/ndr/icons/7.png" alt="" srcset="" />
                  <h5> Rescheduled delivery</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempora.z</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="resons_ndr_card">
                  <img src="/image/Solutionss/ndr/icons/8.png" alt="" srcset=""/>
                  <h5>Customer not reachable</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempora.z</p>
                </div>
              </div>
             
            </div>

           
          </div>
      </div>
        </div>
      <section className="ndr_features_section margin_top_bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <h4>
                NDR Management software system in eCommerce should have the
                following
              </h4>
              <ol>
                <li>
                  API integrations with carrier partners to identify NDR issues
                  in real-time
                </li>
                <li>
                  A text analytics engine to automatically categorise NDR cases
                  into specific buckets
                </li>
                <li>
                  Complete Customer communication platform to seek a response
                  from customers on NDR cases via multiple channels such as
                  email, SMS, Whatsapp, IVRS, etc
                </li>
                <li>
                  NDR API integrations with carrier partners to send NDR
                  feedback in real-time
                </li>
                <li>
                  Integrated backend to enable NDR calling team to manually call
                  customers to resolve issues
                </li>
                <li>
                  Deep Integrations with calling tools, and other internal
                  systems
                </li>
                <li>Fake delivery management system</li>
                <li>
                  Complete analytics on the performance of NDR team, 'Reasons
                  for NDR' and 'NDR cases by carrier partner'
                </li>
              </ol>
            </div>
       
            <div className="col-md-4">
              <div className="ndr_features_section_picture">
                <img src="/image/Solutionss/ndr/6.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </section>

        <div className="container-fluid margin_top_bottom">
      <div className="ndr-mangement-section ">
          <div className="ndr-mangemnet-part">
            <div className="row">
            <div className="col-md-7">
              <h2>HOW TO REDUCE - DUE TO NDR?</h2>
              <p>
                Once an NDR happens, you need to take action immediately and not
                leave it to courier partner Here are 5 ways you can reduce RTO
                after a failed delivery:
              </p>

              <ol>
                <li>Implement an NDR Management solution</li>
                <li>
                  React immediately - Any delay in contacting customers after
                  the first delivery attempt increases the chances of RTO
                  multifold
                </li>
                <li>
                  Follow multi-channel approach to reach out to customers in
                  cases of NDRs - manual and IVRS calls, emails, messages,
                  notifications etc.
                </li>
                <li>
                  Incentivise call center teams to convert NDR or failed
                  deliveries to successful deliveries
                </li>
                <li>
                  Use NDR data to select better courier partners for future
                  orders
                </li>
                <li>
                  Incentivise customers to convert cash-on-delivery orders to
                  pre-paid orders before the out-for-delivery attempts
                </li>
              </ol>
            </div>

            <div className="col-md-5">
              <div className="text-end">
                <img
                  src="/image/Solutionss/ndr/7.png"
                  alt=""
                  srcset=""
                  className="w-75"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

        <div className="container-fluid">
      <div className="why_ndr_Choose margin_top_bottom">
          <div className="text-center mb-5">
            <h1>
              Why Choose<b> Truxcargo</b> Over Others{" "}
            </h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="main_difference" style={styles}>
                <h4>Truxcargo Way of Handling Undelivery</h4>
                <p>Courier executive tries to deliver the order to the buyer</p>
                <p>Buyer is unavailable/ cannot accept the order</p>
                <p>
                  Gracious captures non-delivery information in real time and
                  updates you on the panel
                </p>
                <p>
                  Real-time notification to the buyer via SMS and IVR to which
                  buyer responds
                </p>
                <p>Courier partner updated instantaneously</p>
                <p>
                  Courier agent re-attempts shipments same day or the following
                  day
                </p>
                <div className="text-end">
                  <img
                    src="/image/Solutionss/ndr/icon_2.png"
                    alt=""
                    srcset=""
                    className="w-25"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="main_difference" style={styles}>
                <h4>Traditional Means of Handling Undelivery</h4>
                <p>Courier executive tries to deliver the order to the buyer</p>
                <p>Buyer is unavailable/ cannot accept the order</p>
                <p>
                  Courier agent records non-delivery & adds it to list of
                  undelivered orders for the day
                </p>
                <p>
                  Courier partner sends a cumulative excel sheet at EOD & you
                  manually contact buyer asking their return preference
                </p>
                <p>Courier partner updated the following day</p>
                <p>Courier agent re-attempt shipment next day</p>

                <div className="text-end">
                  <img
                    src="/image/Solutionss/ndr/icon_1.png"
                    alt=""
                    srcset=""
                    className="w-25"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="container-fluid ">
      <div className="ndr-mangement-section margin_top_bottom">
          <div className="faq-heading">
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 ">
              <div className="ndr-mangemnet-part">
           <div className="row justify-content-center">
            <div className="col-md-10">
           <div className="text-center my-5">
           <h2>FAQs About NDR Management</h2>
           </div>
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
                    <Accordion.Header>
                      How to book a consignment?
                    </Accordion.Header>
                    <Accordion.Body>
                      Kindly locate and visit the nearest franchisee here.
                      Remember to take a shipper copy after booking the
                      consignment.
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
                      There can be a number of reasons as to why your shipment
                      has not been delivered yet such as approval pending from
                      centre, lack of customers Phone no., discrepancy in
                      address or pincode, excessive load at the centre etc.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      When will my parcel will be picked up from the origin?
                    </Accordion.Header>
                    <Accordion.Body>
                      The usual pickup timings range in 2 slots: 12PM-3PM &amp;
                      3PM-6PM Depending upon the shipment load, your parcel may
                      be picked up earlier or somtimes later than expected
                      arrival.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      What are the billing requirements?
                    </Accordion.Header>
                    <Accordion.Body>
                      Any queries relating to billing, payment or recharge can
                      be found in our Truxcargo dashboard. It&#39;s simple, just
                      register or login to our panel and get access to a lot
                      more features, information and more.
                    </Accordion.Body>
                  </Accordion.Item>
              
                </Accordion>
            </div>
           </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid margin_top_bottom">
        <div className="shiping_now" style={trusted}>
         
        <div className="row justify-content-center">
          <div className="col-md-8 col-11 ">
          <div className="shiping_now_inside">
            <h1>Trusted By Thousands of Online Sellers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              in, quisquam reiciendis, excepturi dolores corporis expedita
              tenetur laborum non architecto voluptas officia omnis incidunt
              neque laboriosam enim commodi, voluptatem odit!
            </p>
            <button className="btn btn-light ">Start Shipping Today</button>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default NdrMangement;
