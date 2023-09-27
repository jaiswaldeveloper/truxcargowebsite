import React from "react";
import HomeNav from "../components/HomeNav";
import ServicesSlider from "../components/ServicesSlider";
import TimeLine from "../components/TimeLine";

const AboutPage = () => {
  const trusted = {
    background: `url("/image/aboutus/future.png")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
    backgroundRepeat: "no-repeat",
    padding: "20px",
  };
  const buissines = {
    background: `url("/image/aboutus/buissines.png")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    borderRadius: "30px",
  };
  return (
    <>
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
      <div className="future_section margin_top_bottom" style={trusted}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="my-4">Future</h1>
              <div className="wrapper_future">
                <ul>
                  <li>APP Launch</li>
                  <li>Crossed 2 million shipment+</li>
                  <li>Fleet - 140</li>
                  <li>SOON TO BE laughed international shipment</li>
                  <li>10k onboarded transporters</li>
                  <li>Hub count more 40</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesSlider />
      <div className="seller_section margin_top_bottom" style={buissines}>
        <div className="container-fluid">
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
                <button className="btn btn-light ">
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
