import React from "react";
import HomeNav from "../components/HomeNav";
import ServicesSlider from "../components/ServicesSlider";
import TimeLine from "../components/TimeLine";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  const trusted = {
    background: `url("/image/aboutus/future.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    // height: "500px",
    backgroundRepeat: "no-repeat",
    padding: "50px",
    borderRadius:"20px"
  };
  const buissines = {
    background: `url("/image/aboutus/buissines.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "450px",
    backgroundRepeat: "no-repeat",
    // padding: "20px",
    borderRadius: "30px",
  };
  return (
    <>
       <Helmet><title>Company - About us</title></Helmet>
      <HomeNav />

      <section className="aboutus_section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="about-top-part">
                <h2>About us</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odio, laboriosam!
                </p>

                <img
                  src="/image/aboutus/company_image.png"
                  className="img-fluid w-100"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="vission_section margin_top_bottom">
        <div className="vission_section_part">
          <img
            src="/image/aboutus/vission.png"
            alt=""
            srcset=""
            className="img-fluid w-100"
          />

          <div className="wrapper_vission">
            <div className="vission_style">
              <div className="vission_count">
                <p>1</p>
              </div>
              <div className="white_bg">
                <p>
                  Maintaining, tracking, and looking after the needs and methods
                </p>
              </div>
            </div>
            <div className="vission_style alternate">
              <div className="vission_count">
                <p>2</p>
              </div>
              <div className="white_bg">
                <p>
                  Maintaining, tracking, and looking after the needs and methods
                </p>
              </div>
            </div>
            <div className="vission_style">
              <div className="vission_count">
                <p>3</p>
              </div>
              <div className="white_bg">
                <p>
                  Maintaining, tracking, and looking after the needs and methods
                </p>
              </div>
            </div>
            <div className="vission_style alternate">
              <div className="vission_count">
                <p>4</p>
              </div>
              <div className="white_bg">
                <p>
                  Maintaining, tracking, and looking after the needs and methods
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vission_section_part step-part">
          <div className="vission_section_who primum-steps">
            <h2>Who we are</h2>
            <p>
              Truxcargo Pvt. Ltd. is an AI-Enabled Shipping Platform (SaaS) with
              decades of knowledge and experience. It is one of the fast-growing
              tech-enabled logistics companies that offers industry-best pricing
              with leading shipping partners for all your shipping needs. With
              Truxcargo, you will get multiple shipping partners with comparable
              rates and much more from a single platform. Truxcargo has been
              using innovative ideas to simplify the eCommerce platform for
              sellers and save essential time and money. We help sellers to
              focus on their business rather than finding reliable shipping
              partners.
            </p>

            <div className="right_side_animation">
              <div className="indiagate">
                <img
                  src="image/aboutus/story/indiagate.png"
                  alt=""
                  srcset=""
                  className="w-100"
                />
              </div>
              <div className="rocket">
                <img src="image/aboutus/story/roket.gif" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TimeLine />
        <div className="container-fluid">
      <div className="future_section margin_top_bottom" style={trusted}>
          <div className="row">
            <div className="col-md-9">
              <h1 className="mb-4">Our Company's Bright Future</h1>
              <div className="wrapper_future">
                <ul>
                  <li><b>New App Launch:</b> We recently launched our app, and it's been a big hit with lots of people liking it.</li>
                  <li> <b>Over 2 Million Shipments:</b>We've shipped more than 2 million packages, which is a huge number!</li>
                  <li><b>Lots of Vehicles: </b>We now have 140 vehicles to make sure we can deliver things to you quickly and safely.</li>
                  <li><b>Going Global Soon: </b>We're planning to start shipping things internationally, so you can send and receive stuff all over the world.</li>
                  <li><b>Partnering with 10,000 Transporters:</b> We've teamed up with 10,000 transporters who are ready to help us get your things where they need to go.</li>
                  <li><b>More than 40 Hubs:</b> We have more than 40 hubs where we can sort and organize your shipments to make sure they get to you on time.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesSlider />
        <div className="container-fluid">
      <div className="seller_section margin_top_bottom" style={buissines}>
          <div className="row ">
            <div className="col-md-10 col-12 ">
              <div className="shiping_now_inside_bussiness ">
                <div>
                  <h4>Let’s help you your business</h4>
                  <p>
                    Transforming the world of shipping by making it accessible
                    to everyone
                  </p>
                </div>
                <button className="btn btn-light w-25 ">
                  Explore{" "}
                  <img
                    src="/featured-icon/diagonal-arrow.png"
                    alt=""
                    style={{ width: "15px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
