import React, { useEffect } from "react";
// import ServiceCard from "../components/ServiceCard";
// import ServicesBanner from "../components/ServicesBanner";
// import DATA from "../Data";
import AOS from "aos";
import NewsLetter from "../components/NewsLetter";
import "aos/dist/aos.css"; // Import the CSS for AOS
import { Link } from "react-scroll";

import HomeNav from "../components/HomeNav";
import { Helmet } from "react-helmet";
const ServicesList = () => {
  const newsletterPropsService = {
    background:
      "linear-gradient(107deg, rgb(200 157 255) 0%, rgb(186 193 229) 45.83%, rgb(220 208 242) 103.26%)",
      content: "Get the Latest News",
      paragraph: "Subscribe for Truxcargo Exclusive Updates and Developments."

  };

  const shape = {
    background: `url("/image/gif/shape.gif")`,
    width: "100%",
    height: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "10rem 0",
  };

  const bgAirFright = {
    // display: "none"
  };
  const bgalternateFullTruck = {
    // display: "none"
  };
  const bgPartTruck = {
    // display: "none"
  };
  const bgalternatefleet = {
    // display: "none",
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
     <Helmet><title>Our Services</title></Helmet>
      <HomeNav />
      <section className="our_services" style={shape}>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-6">
              <div className="service_top_content ">
                <h4>Experience Excellence Through Our Diverse Services</h4>

                <p>
                  Experience the difference with our services. We go above and
                  beyond to elevate your experience, offering a seamless and
                  comprehensive solution that anticipates your needs and exceeds
                  your expectations.
                </p>
                <p>
                  At Truxcargo, we take pride in offering a range of
                  comprehensive services designed to elevate your experience to
                  new heights. Our commitment to excellence ensures that every
                  interaction with us is a step toward a more enriched and
                  fulfilling journey.
                </p>
                <button
                  class="button-56 btn_service_page"
                  role="button"
                  type="button"
                >
                  Explore
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="main_picture">
                <img
                  src="/image/services_page/1.png"
                  class="img-fluid"
                  alt=""
                  srcset=""
                />
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

      <div id="Ecommerce" className="service-section ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_content">
                <h2>
                  <span>E</span>commerce shipping
                </h2>
                <h5>
                  {" "}
                  <b>Key Features</b>
                </h5>
                <p>
                  In the dynamic world of Ecommerce-Retail, optimizing shipping
                  costs is paramount. Our unique solution not only reduces
                  expenses but also offers early Cash-On-Delivery (COD),
                  extensive service coverage, and swift shipment processing to
                  enhance your competitiveness.
                </p>
                <ul>
                  <li>
                    <b>Navigating Complex Logistics with Innovation:</b>{" "}
                    <p>
                      Logistics complexities persist in India&#39;s diverse
                      Ecommerce landscape. The surge in Ecommerce has driven the
                      logistics sector to integrate tech solutions effectively.
                    </p>
                  </li>
                  <li>
                    <b> Real-Time Tracking: Enhanced Transparency: </b>
                    <p>
                      Buyers can effortlessly track orders from the factory to
                      their doorstep, ensuring transparency, especially in
                      challenging conditions like monsoons or floods.
                    </p>
                  </li>
                  <li>
                    <b>
                      {" "}
                      Direct Supplier-to-End-User Connection: Cutting Out
                      Intermediaries:{" "}
                    </b>
                    <p>
                      Online platforms eliminate intermediaries, fostering
                      direct connections between suppliers and buyers, reducing
                      costs.
                    </p>
                  </li>
                  <li>
                    <b>Return Management:</b>{" "}
                    <p>
                      Streamlined returns and exchanges processes, enhancing
                      customer satisfaction and reducing return-related costs.
                    </p>
                  </li>
                  <li>
                    <b> Sustainability Initiatives: </b>
                    <p>
                      Commitment to eco-friendly practices, including efficient
                      route planning and eco-conscious packaging, reducing the
                      environmental impact of logistics.
                    </p>
                  </li>
                  <li>
                    <b>International Shipping Expertise:</b>
                    <p>
                      Extensive knowledge and experience in handling
                      international shipments, including customs clearance and
                      compliance with international regulations.
                    </p>
                  </li>
                  <li>
                    <b>Robust Security Measures:</b>{" "}
                    <p>
                      Implement state-of-the-art security protocols to protect
                      shipments from theft, damage, or loss, ensuring the safety
                      of goods in transit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_image">
                <img
                  src="/image/gif/ecommerce.gif"
                  alt=""
                  srcset=""
                  className="ecomm1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Document" className="service-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_image">
                <img
                  src="/image/gif/document.gif"
                  alt=""
                  srcset=""
                  className="document"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_content">
                <h2>
                  <span>S</span>ecure Docs Delivery Service
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
                <h5>
                  {" "}
                  <b>Key Features</b>
                </h5>
                <ul>
                  <li>
                    <b>Specialized Solutions: </b>
                    <p>
                      Our services are meticulously tailored to meet the unique
                      demands of the legal and accountancy sectors, where
                      time-sensitive and confidential documents are commonplace.
                    </p>
                  </li>
                  <li>
                    <b>Global Envelope Deliveries:</b>We offer worldwide
                    envelope deliveries. Each delivery comes with signature
                    confirmation to enhance security and accountability, whether
                    it&#39;s a local or international destination.
                  </li>
                  <li>
                    <b>Last-Minute Pick-Up:</b>
                    <p>
                      TRUXCARGO offers last-minute pick-up options to ensure
                      swift collection and on-time dispatch, even in
                      time-critical scenarios.
                    </p>
                  </li>
                  <li>
                    <b>Expert Management:</b>
                    <p>
                      Our seasoned experts handle every aspect, from meticulous
                      pick-ups to accurate and reliable deliveries. This allows
                      you to concentrate on your core business responsibilities
                      with confidence.
                    </p>
                  </li>
                  <li>
                    <b>End-to-End Tracking:</b>
                    <p>
                      Access real-time updates via our digital tracking tool,
                      and unique tracking numbers, provided by our trusted
                      logistics partners, for accurate and up-to-date
                      information on your deliveries.
                    </p>
                  </li>
                  <li>
                    <b>Reliability:</b>
                    <p>
                      We prioritize the utmost care and attention for sensitive
                      and confidential documents throughout the delivery
                      journey. This ensures that your documents reach their
                      destination securely and precisely.
                    </p>
                  </li>
                </ul>
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
                  <span>C</span>onsumer Air Cargo Service
                </h2>
                <p>
                  B2C Air Freight, also known as Business-to-Consumer Air
                  Freight, provides a highly efficient and dependable solution
                  for global cargo transportation via air carriers. Tailored for
                  urgent deliveries, it seamlessly connects shipments through
                  well-established gateways, offering businesses a reliable and
                  speedy delivery option.
                </p>
                <h5>
                  {" "}
                  <b>Key Features</b>
                </h5>
                <ul>
                  <li>
                    <b>Priority Deliveries:</b><p>Swift, on-time for urgent
                    shipments, ensuring reliability. B2C Air Freight prioritizes
                    swift, on-time deliveries, ensuring that urgent shipments
                    meet crucial timelines reliably and efficiently, addressing
                    time-sensitive demands with precision and confidence.</p>
                  </li>
                  <li>
                    <b>Daily Schedules:</b><p>Consistent, prompt transportation,
                    minimizing delays and meeting expectations. With
                    meticulously planned daily shipping schedules, businesses
                    benefit from consistent, punctual transportation services
                    that minimize delays, consistently meeting and even
                    exceeding customer expectations, fostering trust and
                    loyalty.</p>
                  </li>
                  <li>
                    <b>Reputable Carriers:</b><p>Trusted airlines ensure cargo
                    safety and efficient journeys. B2C Air Freight establishes
                    partnerships with globally recognized airlines and carriers,
                    guaranteeing not only the safety but also the utmost
                    efficiency of cargo. This commitment to excellence and
                    reliability instills confidence in the entire shipping
                    process.</p>
                  </li>
                  <li>
                    <b>Seamless Connections:</b>
                    <p>Efficient multi-stop links
                    reduce transit times, optimizing deliveries. The service
                    optimizes deliveries with a network of efficient multi-stop
                    connections, effectively reducing transit times and
                    enhancing overall delivery efficiency. This streamlined
                    approach ensures that goods reach their destinations
                    promptly and intact.</p>
                  </li>
                </ul>
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
                  <span>F</span>ull Load Transport Service
                </h2>
                <p>
                  Full Truck Load (FTL) shipping is a comprehensive logistics
                  solution designed to meet the transportation needs of
                  businesses with substantial cargo volumes. This method
                  involves dedicating an entire truck to transport a single
                  shipment directly from the point of origin to the final
                  destination.
                </p>
                <h5>
                  {" "}
                  <b>Key Features</b>
                </h5>
                <ul>
                  <li>
                    <b>Dedicated Routing:</b>
                    <p>
                      FTL shipments follow custom routes, reducing transit time,
                      enhancing delivery predictability, and increasing supply
                      chain control.
                    </p>
                  </li>
                  <li>
                    <b>Maximized Capacity:</b>
                    <p>
                      FTL optimizes truck space, proving cost-effective for
                      larger shipments, eliminating the need for multiple
                      less-than-truckload (LTL) shipments.
                    </p>
                  </li>
                  <li>
                    <b>Reduced Handling:</b>
                    <p>
                      FTL involves minimal handling, reducing the risk of cargo
                      damage or loss, making it ideal for fragile or high-value
                      goods.
                    </p>
                  </li>
                  <li>
                    <b>Customization:</b>
                    <p>
                      FTL offers transportation flexibility, allowing for
                      specialized equipment like refrigerated or
                      climate-controlled trailers, ensuring safe transport of
                      temperature-sensitive cargo.
                    </p>
                  </li>
                  <li>
                    <b>Security:</b>
                    <p>
                      FTL ensures enhanced security with sealed shipments,
                      minimizing theft, tampering, or unauthorized access during
                      transit.
                    </p>
                  </li>
                  <li>
                    <b>Efficiency and Cost Savings:</b>
                    <p>
                      Despite a higher per-mile cost for small shipments
                      compared to LTL, FTL&#39;s efficiency and reduced handling
                      result in overall cost savings, especially for businesses
                      with regular, sizable shipments.
                    </p>
                  </li>
                  <li>
                    <b>Reliability:</b>
                    <p>
                      FTL shipping is renowned for reliability, with dedicated
                      trucks minimizing delays and disruptions often associated
                      with LTL consolidation and deconsolidation processes.
                    </p>
                  </li>
                </ul>
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
                  <span>P</span>artial Load Freight Services
                </h2>
                <p>
                  Part Truck Load (PTL) Shipping Services offer a flexible and
                  cost-effective solution for shipping goods that occupy a space
                  between Less-Than-Truckload (LTL) and Full Truckload (FTL).
                  PTL streamlines logistics by optimizing cargo space, making it
                  ideal for a wide range of shipment sizes.
                </p>
                <h5>
                  {" "}
                  <b>Key Features</b>
                </h5>
                <ul>
                  <li>
                    <b>Cost Efficiency:</b>
                    <p>
                      PTL optimizes shipping costs through load consolidation
                      and efficient space utilization, ensuring you get the most
                      value for your transportation budget.
                    </p>
                  </li>
                  <li>
                    <b>Flexibility:</b>
                    <p>
                      Enjoy the flexibility to adapt to varying shipment sizes
                      and schedules, accommodating your dynamic logistics
                      requirements with ease.
                    </p>
                  </li>
                  <li>
                    <b>Customization:</b>
                    <p>
                      Tailor PTL services to your cargo&#39;s unique
                      specifications, ensuring that your goods are handled and
                      transported with the utmost care and precision.
                    </p>
                  </li>
                  <li>
                    <b>Dynamic Load Optimization:</b>
                    <p>
                      PTL uses advanced algorithms to dynamically optimize the
                      arrangement of shipments within a truck, maximizing space
                      utilization and reducing costs.
                    </p>
                  </li>
                  <li>
                    <b>Shared-Cargo Network:</b>
                    <p>
                      PTL services offer access to a shared-cargo network,
                      allowing shippers to tap into available truck space within
                      a broader ecosystem.
                    </p>
                  </li>
                  <li>
                    <b>Timely Delivery:</b>{" "}
                    <p>
                      PTL&#39;s streamlined processes, efficient routing, and
                      reduced handling guarantee reliable and punctual
                      deliveries, enhancing customer satisfaction and supply
                      chain efficiency.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service_perticular_image parttruck_section">
                <div data-aos="fade-left">
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
      <div
        id="Hire_fleet"
        className="service-section margin_top_bottom"
        style={bgalternatefleet}
      >
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
                  <span>F</span>leet Rental Solutions
                </h2>
                <p>
                  We at Truxcargo offer a diverse and adaptable fleet of
                  vehicles to meet your every shipping requirement. Our
                  commitment to excellence ensures that whether you need a
                  single vehicle or an entire fleet, we deliver the flexibility,
                  reliability, and efficiency you demand.
                </p>
                <h5>
                  {" "}
                  <b>Key Features</b>
                </h5>
                <ul>
                  <li>
                    <b>Versatile Fleet Selection:</b>
                    <p>
                      Choose from a wide range of vehicles tailored to your
                      specific shipping needs, from compact vans to heavy-duty
                      trucks, all meticulously maintained for optimal
                      performance.
                    </p>
                  </li>
                  <li>
                    <b>Flexible Rental Options:</b>
                    <p>
                      Enjoy the freedom to rent vehicles for short-term or
                      long-term projects, with customizable rental durations to
                      accommodate your ever-changing logistics requirements.
                    </p>
                  </li>
                  <li>
                    <b>24/7 Availability:</b>
                    <p>
                      Our on-demand fleet rentals are available around the
                      clock, ensuring that you have access to the vehicles you
                      need precisely when you need them, even for last-minute
                      shipments.
                    </p>
                  </li>
                  <li>
                    <b>Reliable Maintenance:</b>
                    <p>
                      Count on our expert technicians to keep our fleet in
                      top-notch condition, reducing downtime and ensuring the
                      safe and efficient transportation of your goods.
                    </p>
                  </li>
                  <li>
                    <b>Advanced Tracking and Support:</b>
                    <p>
                      Benefit from real-time vehicle tracking and support
                      services, giving you complete visibility into your
                      shipments and peace of mind throughout the journey.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter {...newsletterPropsService} />
    </>
  );
};

export default ServicesList;
