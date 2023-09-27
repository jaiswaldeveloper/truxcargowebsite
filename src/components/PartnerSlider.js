import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
import Slide1 from "../assets/images/partner/amazon.png";
import Slide2 from "../assets/images/partner/bluedart.png";
import Slide3 from "../assets/images/partner/delhivery-1.png";
import Slide4 from "../assets/images/partner/ecomexpress.png";
import Slide5 from "../assets/images/partner/oxyxen1.png";
import Slide6 from "../assets/images/partner/ekart-01.png";
import Slide7 from "../assets/images/partner/rivigo1.png";
import Slide8 from "../assets/images/partner/expressbees.png";
import Slide9 from "../assets/images/partner/gati.png";
import Slide11 from "../assets/images/partner/dtdc1.png";
import Slide12 from "../assets/images/partner/shadowfax.png";
import TruckGif from './TruckGif';

const PartnerSlider = () => {
  const settings = {
    
    infinite: true,
    verticalSwiping: true, // Enable vertical swiping on touch devices
    slidesToShow: 10, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll when using arrows/dots
    arrows: false, // Display navigation arrows
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: 'linear'
  };

   // Adjust slidesToShow based on screen width
   if (window.innerWidth <= 576) {
    settings.slidesToShow = 3;
  } else if (window.innerWidth <= 768) {
    settings.slidesToShow = 4;
  } else if (window.innerWidth <= 992) {
    settings.slidesToShow = 6;
  } else {
    settings.slidesToShow = 10;
  }
  return (
    <section className="logo-partner-section ">
      <Container>
        <h4>Trusted Shipping Partners</h4>
        <h5>Your Reliable Solution for Seamless Delivery Services</h5>
        <Row >
          <Col md={12} className="mt-5">
          <Slider {...settings}>
            {/* Your slide content goes here */}
          
              <div>
                <img src={Slide1} alt="err" />
              </div>
              <div>
                <img src={Slide2} alt="err" />
              </div>
              <div>
                <img src={Slide6} alt="err" />
              </div>
              <div>
                <img src={Slide3} alt="err" />
              </div>
              <div>
                <img src={Slide4} alt="err" />
              </div>
              <div>
                <img src={Slide5} alt="err" />
              </div>
              
              <div>
                <img src={Slide7} alt="err" />
              </div>

              <div>
                <img src={Slide8} alt="err" />
              </div>
              <div>
                <img src={Slide9} alt="err" />
              </div>

              <div>
                <img src={Slide11} alt="err" />
              </div>
              <div>
                <img src={Slide12} alt="err" />
              </div>
            
          </Slider>
            
          </Col>
        </Row>
      </Container>
      <TruckGif />
    </section>
  );
};

export default PartnerSlider;
