import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 2,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 767 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  const [TestimonialData, setTestimonialData] = useState([
    {
      id: 1,
      name: "Rohit Yadav",
      location: "Export, New Delhi",
      title: "Secure Delivery",
      description:
        "We try best services from our side for the delivery so that product can be delivered securely and timely.",
      imageurl: "/image/testimonials/person1.png",
    },
    {
      id: 2,
      imageurl: "/image/testimonials/person2.png",
      name: "Rohit Yadav",
      location: "Export, New Delhi",
      title: "Fast and Fascious",
      description:
        "We try best services from our side for the delivery so that product can be delivered securely and timely.",
    },
    {
      id: 3,
      imageurl: "/image/testimonials/person1.png",
      name: "Rohit Yadav",
      location: "Export, New Delhi",
      title: "Secure Delivery",
      description:
        "We try best services from our side for the delivery so that product can be delivered securely and timely.",
    },
    {
      id: 4,
      imageurl: "/image/testimonials/person2.png",
      name: "Rohit Yadav",
      location: "Export, New Delhi",
      title: "Secure Delivery",
      description:
        "We try best services from our side for the delivery so that product can be delivered securely and timely.",
    },
    {
      id: 5,
      imageurl: "/image/testimonials/person1.png",
      name: "Rohit Yadav",
      location: "Export, New Delhi",
      title: "Secure Delivery",
      description:
        "We try best services from our side for the delivery so that product can be delivered securely and timely.",
    },
    {
      id: 6,
      imageurl: "/image/testimonials/person1.png",
      name: "Rohit Yadav",
      location: "Export, New Delhi",
      title: "Secure Delivery",
      description:
        "We try best services from our side for the delivery so that product can be delivered securely and timely.",
    },
    {
      id: 7,
      imageurl: "/image/testimonials/person1.png",
      name: "Rohit Yadav",
      location: "Export, New Delhi",
      title: "Secure Delivery",
      description:
        "We try best services from our side for the delivery so that product can be delivered securely and timely.",
    },
    {
      id: 8,
      imageurl: "/image/testimonials/person1.png",
      name: "Rohit Yadav",
      location: "Export, New Delhi",
      title: "Secure Delivery",
      description:
        "We try best services from our side for the delivery so that product can be delivered securely and timely.",
    },
  ]);

  const TestimonialCards = TestimonialData.map((item) => (
    <TestimonialCard
      key={item.id}
      imageurl={item.imageurl}
      name={item.name}
      description={item.description}
      title={item.title}
      location={item.location}
    />
  ));

  const sliderSettings = {
    centerMode: true,
    arrows: false,
    autoplay: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "20px",
    draggable: true,
    infinite: true,
    pauseOnHover: true,
    swipe: true,
    touchMove: false,
    vertical: true,
    verticalScrolling: true,
    speed: 700,
    autoplaySpeed: 1500,
    useTransform: true,

    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    responsive: [
      {
        breakpoint: 768,
        settings: {},
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    // autoplay: true,
    // arrows: false,
    // dots: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // centerPadding: "20px",
    // draggable: true,
    // infinite: true,
    // pauseOnHover: true,
    // swipe: true,
    // touchMove: false,
    // vertical: true,
    // verticalScrolling: true,
    // speed: 700,
    // autoplaySpeed: 1500,
    // useTransform: true,
    // centerMode: true,
    // cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

    // responsive: [

    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
    // adaptiveHeight: true
  };
  return (
    <>
      <section className="testimonials-section margin_top_bottom">
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-md-5 step-part">
              <div className="primum-steps">
                <div className="">
                  <img
                    src="/image/qoutes.svg"
                    alt=""
                    srcset=""
                    className="w-25"
                  />
                </div>
                <h4>Our Customers Love what we do</h4>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  fugit iure magni. Eius ipsam praesentium vel magnam laboriosam
                  possimus cumque.
                </span>
              </div>
            </div>
            <div className="col-md-2 "></div>
            <div className="col-md-5">
              <Slider {...sliderSettings}>{TestimonialCards}</Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
