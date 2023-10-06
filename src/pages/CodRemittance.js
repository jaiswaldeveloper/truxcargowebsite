import React from "react";
import Navigation from "../components/Navigation";
import Accordion from "react-bootstrap/Accordion";
import { bg } from "date-fns/locale";
const CodRemittance = () => {
  const bg_early = {
    borderRadius: "30px",
    background:
      " linear-gradient(98deg, #4656A3 0%, #7939CC 100%, rgba(121, 57, 204, 0.40) 100%)",
    padding: "6rem",
    position: "relative",
    color: "#fff",
    overflow: "hidden",
  };

  const trusted_cod = {
    background: `url("/image/Solutionss/cod/Frame1603.png")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "100%",
    // height: "100vh",
    backgroundRepeat: "no-repeat",
  };
  // const bg_cod_connect = {
  //   background: `url("/image/Solutionss/cod/9.png")`,
  //   backgroundSize: "contain",
  //   backgroundPosition: "center",
  //   width: "100%",
  //   // height: "100vh",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <>
      <Navigation />
      <div className="inner-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 step-part">
              <div className="service_top_content primum-steps">
                <h4>COD Remittance</h4>
                <p className="text-white">
                  Take control of your cash flow and receive payments own time
                </p>
                <button class="btn btn-outline-light ">Explore</button>
              </div>
            </div>
            <div className="col-md-7">
              <div className="text-end">
                <img
                  src="/image/SolutionsS/cod/1.png"
                  alt=""
                  srcSet=""
                  className="w-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="cod">
        <div className="container-fluid margin_top_bottom">
          <div className="ndr-mangement-section ">
            <div className="ndr-mangemnet-part">
              <div className="row">
                <div className="col-md-6">
                  <h2>COD Remittance- Overview</h2>

                  <p>
                    COD (Cash on Delivery) is a payment method in which
                    customers pay for a product at the time of delivery.
                    Customers have the option to pay in cash or use digital
                    payment methods upon receiving the order.
                    <br />
                    <br />
                    Once the payment is done by the customer, the delivery agent
                    has to deposit this amount at their office. This amount is
                    later transferred to the client or seller’s bank account
                    within a stipulated time. This process of collecting money
                    from the customer and depositing it to the seller’s bank
                    account is known as COD Remittance.
                  </p>
                  <h6>Sign up for free</h6>
                  <ul>
                    <li>
                      <b>Unrestricted cash flow</b>
                    </li>
                    <li>
                      <b>Guaranteed Remittance in 1 days*</b>
                    </li>
                    <li>
                      <b>Improved business cash cycle</b>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <div className="over_view text-end">
                    <img
                      src="/image/Solutionss/cod/2.png"
                      alt=""
                      srcset=""
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid margin_top_bottom">
        <div className="early_cod" style={bg_early}>
          <h1>How does Early COD work</h1>
          <p>Time to make your business bigger and better</p>
          <div className="row justify-content-center mt-5">
            <div className="col-md-10">
              <div className="early-numbers">
                <div>
                  <h5>1</h5>
                </div>
                <div>
                  <h4>Select Early COD Plan</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptate, reiciendis beatae pariatur officiis explicabo,
                    eum sequi totam repudiandae maiores delectus quas nisi
                    fugiat reprehenderit veniam. Ratione magnam sunt, beatae
                    unde itaque porro similique rem ex modi impedit nulla
                    perspiciatis harum aperiam quidem vero illo animi deserunt?
                    Minus tempore esse qui.
                  </p>
                </div>
              </div>

              <div className="early-numbers_pic">
                <img
                  src="/image/Solutionss/cod/3.png"
                  alt=""
                  srcset=""
                 
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-10">
              <div className="early-numbers">
                <div>
                  <h5>2</h5>
                </div>
                <div>
                  <h4>Activate Early COD</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam assumenda deleniti, repellat saepe pariatur illum ex
                    omnis! Odit illum pariatur ea a, ex nemo nam, quidem
                    dignissimos ipsa nihil officiis? Ullam reprehenderit
                    quibusdam at exercitationem ut sunt atque natus consequuntur
                    non quisquam, quidem ad nihil voluptate doloribus libero,
                    quas molestias!''
                  </p>
                </div>
              </div>

              <div className="early-numbers_pic">
                <img
                  src="/image/Solutionss/cod/4.png"
                  alt=""
                  srcset=""
                 
                />
              </div>
            </div>
          </div>
          <div className="row  justify-content-center mt-5">
            <div className="col-md-10">
              <div className="early-numbers">
                <div>
                  <h5>3</h5>
                </div>
                <div>
                  <h4>Ordered Delivered Successfully </h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam illo hic quibusdam mollitia eum doloremque magni,
                    dolor labore quo soluta adipisci facere ab assumenda vel
                    facilis temporibus, voluptatibus maiores expedita
                    voluptates. Impedit voluptatum, corrupti amet a labore
                    inventore, sint eum ut necessitatibus expedita, delectus
                    aliquam placeat blanditiis. Eos, et mollitia!
                  </p>
                </div>
              </div>

              <div className="early-numbers_pic">
                <img
                  src="/image/Solutionss/cod/5.png"
                  alt=""
                  srcset=""
                  className="w-75"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-10">
              <div className="early-numbers">
                <div>
                  <h5>4</h5>
                </div>
                <div>
                  <h4>Remittance Received</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates doloremque corporis ea at et tempora consequuntur
                    in fugiat necessitatibus enim voluptatum similique
                    asperiores incidunt natus, magni reiciendis nulla quaerat
                    veniam dolorem sit. Minima architecto temporibus dolor
                    quibusdam eos nesciunt esse soluta, animi alias sapiente
                    quidem aut tempora dolores tenetur aperiam.
                  </p>
                </div>
              </div>

              <div className="early-numbers_pic">
                <img
                  src="/image/Solutionss/cod/6.png"
                  alt=""
                  srcset=""
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="cod-connect margin_top_bottom"> 
          <div className="inside_connect step-part">
          <div className="primum-steps">
            <p>Connect With our Team to know more About COD Remittance </p>
            <button className="btn btn-outline-light">Connect Now</button>
          </div>

          <div className="text-end">
            <img
              src="/image/Solutionss/cod/8.png"
              alt=""
              srcset=""
             
            />
          </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <section className="cod_features_section margin_top_bottom">
          <div className="Remittance_process">
            <div className="">
              <h4>How we handles the COD Remittance process?</h4>
              <ol>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem ad fugit reprehenderit laborum, corrupti corporis
                  adipisci est enim facere! Quis velit cum id. Consequatur
                  voluptatum repellat ab at, atque non reiciendis beatae
                  praesentium voluptas voluptatibus laborum doloribus rerum
                  nesciunt excepturi?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  nam a, enim sunt consectetur et optio porro quae libero odio?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  nam a, enim sunt consectetur et optio porro quae libero odio?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  nam a, enim sunt consectetur et optio porro quae libero odio?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  nam a, enim sunt consectetur et optio porro quae libero odio?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  nam a, enim sunt consectetur et optio porro quae libero odio?
                </li>
                <li>Fake delivery management system</li>
                <li>
                  Complete analytics on the performance of NDR team, 'Reasons
                  for NDR' and 'NDR cases by carrier partner'
                </li>
              </ol>
            </div>

            <img src="/image/Solutionss/cod/7.png" alt="" srcset="" />
          </div>
        </section>
      </div>

      <section className="cod_faqs">
        <div className="container-fluid ">
          <div className="ndr-mangement-section margin_top_bottom">
            <div className="faq-heading"></div>
            <div className="row justify-content-center">
              <div className="col-md-12 ">
                <div className="ndr-mangemnet-part">
                  <div className="row justify-content-center">
                    <div className="col-md-10">
                      <div className="text-center my-5">
                        <h2>FAQs About COD Remittance</h2>
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
                            There can be a number of reasons as to why your
                            shipment has not been delivered yet such as approval
                            pending from centre, lack of customers Phone no.,
                            discrepancy in address or pincode, excessive load at
                            the centre etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>
                            When will my parcel will be picked up from the
                            origin?
                          </Accordion.Header>
                          <Accordion.Body>
                            The usual pickup timings range in 2 slots: 12PM-3PM
                            &amp; 3PM-6PM Depending upon the shipment load, your
                            parcel may be picked up earlier or somtimes later
                            than expected arrival.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                          <Accordion.Header>
                            What are the billing requirements?
                          </Accordion.Header>
                          <Accordion.Body>
                            Any queries relating to billing, payment or recharge
                            can be found in our Truxcargo dashboard. It&#39;s
                            simple, just register or login to our panel and get
                            access to a lot more features, information and more.
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
      </section>

      <div className="container-fluid margin_top_bottom">
        <div className="shiping_now" style={trusted_cod}>
          <div className="row justify-content-center">
            <div className="col-md-8 col-11 ">
              <div className="shiping_now_inside">
                <h1>Trusted By Thousands of Online Sellers</h1>
                <p>An all-in-one eCommerce Solution for your shipping needs</p>
                <button className="btn btn-light ">Connect Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodRemittance;
