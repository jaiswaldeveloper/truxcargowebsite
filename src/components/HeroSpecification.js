import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
import partner from "../assets/images/logistics.svg";

const HeroSpecification = () => {
  // const settings2 = {

  //   infinite: true,
  //   vertical: true,
  //   verticalSwiping: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true,
  //   rtl: true,
  // };

  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="row hero-specification">
              <div className="col-md-2">
                <div className="hero-points">
                  <img
                    src="/featured-icon/home-icon/1-01.svg"
                    alt=""
                    srcSet=""
                  />
                  <p> All-in-One Shipping</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="hero-points ">
                  <img
                    src="/featured-icon/home-icon/1-05.svg"
                    alt=""
                    srcSet=""
                  />
                  <p>Reach Over 29,000 Pincodes</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="hero-points dis">
                  <img
                    src="/featured-icon/home-icon/1-03.svg"
                    alt=""
                    srcSet=""
                  />
                  <p>Multiple Courier Partners</p>
                </div>
              </div>

              <div className="col-md-2">
                <div className="hero-points dis">
                  <img
                    src="/featured-icon/home-icon/1-02.svg"
                    alt=""
                    srcSet=""
                  />
                  <p>Fast COD Remittance</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="hero-points dis">
                  <img
                    src="/featured-icon/home-icon/1-04.svg"
                    alt=""
                    srcSet=""
                  />
                  <p>Expert Support Team</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="hero-points dis">
                  <img
                    src="/featured-icon/home-icon/1-04.svg"
                    alt=""
                    srcSet=""
                  />
                  <p>Expert Support Team</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSpecification;
