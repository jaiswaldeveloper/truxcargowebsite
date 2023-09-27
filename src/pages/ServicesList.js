import React, { useEffect } from "react";
// import ServiceCard from "../components/ServiceCard";
// import ServicesBanner from "../components/ServicesBanner";
// import DATA from "../Data";
import AOS from "aos";
import NewsLetter from "../components/NewsLetter"
import "aos/dist/aos.css"; // Import the CSS for AOS
import { Link } from "react-scroll";

import HomeNav from "../components/HomeNav";
const ServicesList = () => {
  const newsletterPropsService = {
    background: "linear-gradient(107deg, rgb(200 157 255) 0%, rgb(186 193 229) 45.83%, rgb(220 208 242) 103.26%)",


    // backgroundImage,
    // content: 'Subscribe to our newsletter for the latest updates!',
  };


  const shape = {
    background: `url("/image/gif/shape.gif")`,
    width: "100%",
    height: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "5rem",
  };
  const bgGredientt = {
    background: `url("/image/services_page/icons/Rectangle_back.png")`,
    width: "100%",
    height: "100vh",
    backgroundSize: "contain",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    paddingTop: "2rem",
  };
  const bgalternate = {
    background: `url("/image/services_page/icons/Rectangle_left.png")`,
    width: "100%",
    height: "100vh",
    backgroundSize: "contain",

    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    paddingTop: "2rem",
  };
  const bgAirFright = {
    background: `url("/image/services_page/icons/air_freght_rectangle.png")`,
    width: "100%",
    height: "100vh",
    backgroundSize: "contain",
    backgroundSize: "600px 600px",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    paddingTop: "2rem",
  };
  const bgalternateFullTruck = {
    background: `url("/image/services_page/icons/fulll_truck_rectangle.png")`,

    width: "100%",
    height: "100vh",
    // backgroundSize: "contain",
    backgroundSize: "600px 700px",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    paddingTop: "2rem",
  };
  const bgPartTruck = {
    background: `url("/image/services_page/icons/bg_parttruck2.png")`,
    width: "100%",
    height: "100vh",
    backgroundSize: "500px 500px",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  };
  const bgalternatefleet = {
    background: `url("/image/services_page/icons/fleet_bg.png")`,
    width: "100%",
    height: "100vh",
    backgroundSize: "500px 500px",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    marginBottom: "2rem",
    paddingTop: "2rem",
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <HomeNav/>
      <section className="our_services" style={shape}>
        <div className="">
          <div className="hello_services step-part">
            <div className="service_top_content primum-steps">
              <h4>Services</h4>
             
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                iusto voluptates eos sed, harum adipisci tempore? Odit a quidem
                nihil repudiandae eveniet id velit quos omnis magnam
                necessitatibus error explicabo, atque beatae voluptate nesciunt
                placeat sint dicta saepe excepturi? Esse voluptatem culpa
                dignissimos vel veniam quidem numquam quod deserunt aliquid.
              </p>
              <button
                class="button-56 btn_service_page"
                role="button"
                type="button"
              >
                Explore
              </button>
            </div>

            <div className="">
              {/* <div className="services_page_bgone_section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="750"
                  height="600"
                  viewBox="0 0 913 836"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M0 -413.5L1186 -535L1560.5 716L665.836 832.167C462.951 858.51 272.89 727.515 225.302 528.538L0 -413.5Z"
                    fill="url(#paint0_linear_308_14035)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_308_14035"
                      x1="85.5"
                      y1="-101"
                      x2="914.5"
                      y2="785"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF0000" />
                      <stop offset="1" stop-color="#FF9E6E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="services_page_bgtwo_section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="630"
                  height="600"
                  viewBox="0 0 712 858"
                  fill="none"
                >
                  <path
                    opacity="0.7"
                    d="M105.742 -349L841.385 26L841.385 858L340.718 782.039C122.749 748.969 -27.3674 545.77 5.07252 327.707L105.742 -349Z"
                    fill="url(#paint0_linear_308_14036)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_308_14036"
                      x1="133"
                      y1="687.5"
                      x2="843"
                      y2="29.0001"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#396ECC" />
                      <stop offset="0.46385" stop-color="#C7CDF0" />
                      <stop offset="1" stop-color="#FFE585" />
                    </linearGradient>
                  </defs>
                </svg>

                <div></div>
              </div> */}
              <div className="main_picture">
                <img src="/image/services_page/1.png" class="img-fluid" alt="" srcset=""  />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="all_services ">
          <div className="all_serives_white">
          <div className=" ">
            <Link
              to="Ecommerce"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="barrier ecom_barrier_none">
                <div className="all_services_card slide-fwd-center">
                  <img
                    src="/image/services_page/icons/1.png"
                    alt=""
                    srcset=""
                  />
                  <h5>Ecommerce-Retail</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem, similique?
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="Document">
              <div className="barrier">
                <div className="all_services_card ">
                  <img
                    src="/image/services_page/icons/2.png"
                    alt=""
                    srcset=""
                  />
                  <h5>Document Courier</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem, similique?
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className=" ">
            <div className="barrier  ">
              <Link to="B2C">
                <div className="all_services_card">
                  <img
                    src="/image/services_page/icons/3.png"
                    alt=""
                    srcset=""
                  />
                  <h5>B2C Air Freight</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem, similique?
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="barrier">
              <Link to="Full_Truck">
                <div className="all_services_card">
                  <img
                    src="/image/services_page/icons/4.png"
                    alt=""
                    srcset=""
                  />
                  <h5>Full Truck Load</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem, similique?
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="barrier">
              <Link to="Part_Truck">
                <div className="all_services_card">
                  <img
                    src="/image/services_page/icons/5.png"
                    alt=""
                    srcset=""
                  />
                  <h5>Part Truck Load</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem, similique?
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="barrier">
              <Link to="Hire_fleet">
                <div className="all_services_card ">
                  <img
                    src="/image/services_page/icons/6.png"
                    alt=""
                    srcset=""
                  />
                  <h5>Hire a Fleet</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem, similique?
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* <div className="service-section">
        <div className="container-fluid-fluid">
          <div className="row ">
            <div className="col-md-12">

              {DATA.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  image={service.image}
                  title={service.title}
                  content={service.content}
                  isAlternate={service.id % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <div id="Ecommerce" className="service-section " style={bgGredientt}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_content">
                <h2>
                  <span>E</span>commerce Retails
                </h2>
                <p>
                  In the dynamic world of Ecommerce-Retail, optimizing shipment
                  costs is a pivotal consideration, as it constitutes a
                  substantial proportion of your expenses. Our distinctive value
                  proposition lies in not only cost reduction but also in
                  offering early Cash-On-Delivery (COD) options, extensive
                  coverage of serviceable pin codes, and expedited shipment
                  processing – all geared toward enhancing your business&#39;s
                  competitiveness.{" "}
                </p>
                <h6>Navigating Complex Logistics with Innovation</h6>
                <p>
                  Navigating the intricacies of logistics presents an ongoing
                  challenge for Ecommerce enterprises, particularly within a
                  vast and diverse landscape like India. The evolution of
                  eCommerce has propelled the logistics industry to innovate and
                  integrate technological solutions to meet the surging demands
                  effectively.
                </p>

                <h6>Real-Time Tracking: Transparency Every Step of the Way</h6>
                <p>
                  In today&#39;s digital era, online buyers can now seamlessly
                  trace their consignments from the moment they depart the
                  factory or warehouse until they reach their intended
                  destinations. This capability becomes increasingly crucial
                  during inclement weather conditions, such as the monsoon
                  season or widespread flooding, which can impose additional
                  complexities on the delivery process due to compromised
                  transportation routes and infrastructure.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_image">
                <div data-aos="zoom-in">
                  <img
                    src="/image/services_page/icons/ecommerce.png"
                    alt=""
                    srcset=""
                    className="ecomm1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="Document"
        className="service-section Ecommerce"
        style={bgalternate}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_image">
                <div data-aos="zoom-in">
                  <img
                    src="/image/services_page/icons/document.png"
                    alt=""
                    srcset=""
                    className="document"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_content">
                <h2>
                  <span>D</span>ocument Courier
                </h2>
                <p>
                  In today&#39;s fast-paced business world, efficient document
                  delivery is of paramount importance, especially within the
                  legal and accountancy sectors. At TRUXCARGO, we recognize the
                  unique requirements of these industries and have tailored our
                  courier services to meet their specific needs. With a focus on
                  reliability, security, and convenience, our Document Courier
                  Services offer a seamless solution for sending crucial papers
                  and documents directly to your clients.
                </p>
                <h3>
                  Specialized Courier Solutions for Legal and Accountancy
                  Sectors
                </h3>
                <h6>Understanding Industry Demands</h6>
                <p>
                  We comprehend the intricacies of the legal and accountancy
                  sectors, where time-sensitive and confidential document
                  exchanges are the norm. Our specialized courier services are
                  designed with these demands in mind, ensuring that your
                  documents reach their intended recipients promptly and
                  securely.
                </p>
                <h6>Global Envelope Deliveries with Signature Confirmation</h6>
                <p>
                  Our comprehensive courier network enables us to facilitate
                  worldwide envelope deliveries. Each delivery is accompanied by
                  a signature confirmation upon reception, adding an extra layer
                  of security and accountability to the process. Regardless of
                  the destination, you can trust that your documents will be
                  delivered with the utmost professionalism and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="B2C" className="service-section" style={bgAirFright}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_content">
                <h2>
                  <span>B2C</span>Air fright
                </h2>
                <p>
                  B2C Air Freight, also known as Business-to-Consumer Air
                  Freight, is a sophisticated and efficient solution for
                  transporting goods through air carriers. This method of cargo
                  transportation is especially beneficial for express shipments
                  that require swift and reliable delivery across the global
                  landscape. Just like commercial airlines that transport
                  passengers, air freight operates through the same gateways,
                  ensuring seamless connectivity.
                </p>

                <h3>Key Features of B2C Air Freight</h3>
                <p>
                  <span>Priority Air Freight Services:</span> When time is of
                  the essence for your shipment, B2C Air Freight offers a
                  priority service that ensures your cargo reaches its
                  destination swiftly and on schedule. This service is designed
                  to cater to urgent delivery needs.
                </p>
                <p>
                  <span>Daily Deliveries:</span> Our commitment to timely
                  deliveries is underscored by our daily shipping schedule. This
                  feature guarantees that your goods are transported promptly,
                  minimizing delays and meeting your delivery expectations.
                </p>
                <p>
                  {" "}
                  <span>First-Class Airline Choice:</span> We understand the
                  importance of partnering with reliable and reputable carriers.
                  That&#39;s why we collaborate with first-class airlines to
                  ensure the safety and efficiency of your cargo&#39;s journey.
                </p>
                {/* <p> <span>Connecting Flight Options: </span> For destinations with multiple flight connections, our B2C Air
Freight service offers seamless connectivity. This option enhances the efficiency of your cargo&#39;s
route and reduces transit times.</p> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_image">
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <img
                    src="/image/services_page/icons/air_freght.png"
                    alt=""
                    srcset=""
                    className="air_fright"
                  />
                </div>
                {/* <div  data-aos="fade-down">
                 
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="Full_Truck"
        className="service-section"
        style={bgalternateFullTruck}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_image">
                <div data-aos="fade-down-right">
                  <img
                    src="/image/services_page/icons/fulltruck.png"
                    alt=""
                    srcset=""
                    className="FullTruck"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_content">
                <h2>
                  <span>F</span>ull Truck Load
                </h2>
                <p>
                  Full Truck Load (FTL) shipping, a prominent mode of
                  transportation in logistics, involves the exclusive use of an
                  entire truck to transport a single shipment from its origin to
                  its destination. This shipping method offers distinct
                  advantages due to its direct route and dedicated capacity,
                  although it tends to be relatively pricier compared to other
                  options.
                </p>
                <p>
                  {" "}
                  <span>Effortless Transportation of Large Items:</span> FTL
                  shipping is ideal for transporting sizable items or bulk
                  quantities. This mode ensures that your shipment occupies the
                  entire truck, allowing for efficient movement of substantial
                  cargo.
                </p>
                <p>
                  <span>Leveraging an Experienced Delivery Network:</span> FTL
                  shipping services often come with an extensive network of
                  skilled delivery partners. These partners possess the
                  expertise required to handle diverse freight and ensure timely
                  deliveries.
                </p>

                <p>
                  <span>Enhanced Security Against Pilferage:</span> By occupying
                  the entire truck, FTL shipments remain isolated and less
                  susceptible to unauthorized access. This significantly reduces
                  the risk of pilferage and tampering at various touchpoints.
                </p>

                <p>
                  <span>Accelerated Delivery Speed: </span>Due to its direct
                  route from origin to destination, FTL shipments generally
                  enjoy faster transit times compared to alternatives like
                  consolidated or less-than- truckload shipments. This swifter
                  movement is particularly advantageous for time-sensitive
                  freight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Part_Truck" className="service-section " style={bgPartTruck}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_content">
                <h2>
                  <span>P</span>art Truck Load
                </h2>
                <p>
                  Part Truck Load (PTL) freight logistics offer a specialized
                  solution for transporting goods that occupy a portion of a
                  truck&#39;s capacity. This mode of transportation bridges the
                  gap between Less Than Truckload (LTL) and Full Truckload (FTL)
                  shipments, providing a flexible and cost- effective option for
                  businesses with shipments larger than LTL but not enough to
                  fill an entire truck. PTL allows businesses to share freight
                  space with others on the same route, optimizing resources and
                  minimizing costs.
                </p>
                <h3>Key Features of Part Truck Load (PTL)</h3>

                <p>
                  <span>Flexible Payment Structure</span>:With PTL, businesses
                  pay only for the space they occupy within the truck. This
                  cost-effective pricing model ensures that you&#39;re not
                  overpaying for unused space, making it ideal for shipments
                  that don&#39;t require a full truck&#39;s capacity.
                </p>

                <p>
                  <span>Enhanced Delivery Efficiency: </span>PTL offers
                  door-to-door services, streamlining the delivery process and
                  reducing transit times. This is particularly advantageous for
                  businesses looking to expedite their shipments and meet tight
                  deadlines.
                </p>
                <p>
                  <span>Nationwide Secure Deliveries:</span> Despite occupying
                  only a portion of the truck, PTL shipments are delivered
                  securely across the country. This reliability ensures that
                  your goods reach their destination intact and on time.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_image parttruck_section">
                <div
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img
                    src="/image/services_page/icons/parttruckload.png"
                    alt=""
                    srcset=""
                    className="parttruck"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Hire_fleet" className="service-section" style={bgalternatefleet}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_image">
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img
                    src="/image/services_page/icons/hire_fleet.png"
                    alt=""
                    srcset=""
                    className="hirefleet"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_content">
                <h2>
                  <span>H</span>ire Fleet
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  asperiores corporis quas modi repellendus odio odit nobis
                  minus, voluptatibus corrupti nulla molestiae culpa dolorem
                  pariatur, dignissimos commodi molestias consequuntur quis. At
                  dolore deleniti consectetur aliquid fuga, doloremque iusto
                  obcaecati, consequatur officia facere enim, ratione eveniet.
                  Ex voluptatibus corporis unde eos blanditiis sunt, dicta
                  porro? Quisquam atque nostrum blanditiis vero earum fuga
                  deserunt numquam possimus magni, hic ipsa nesciunt. Pariatur
                  voluptas accusantium voluptate explicabo consequuntur ducimus
                  error est, sapiente blanditiis tenetur modi fugiat quas, amet
                  tempora sint eaque? Nemo veritatis, aut reiciendis, alias
                  molestiae cum, ducimus excepturi velit perspiciatis nobis
                  recusandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter {...newsletterPropsService}/>
    </>
  );
};

export default ServicesList;
