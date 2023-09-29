import React from "react";

const TestimonialCard = (props) => {
  const testimonial = {
    background: `url("image/testimonials/bg.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    padding: "2rem",
    // height: "300px"
  };
  return (
    <>
      <div className="testimonal-card" style={testimonial}>
        <div className="testimonal-card_inside ">
          <div className="tes-content">
            <h1>
              <i class="fa-solid fa-quote-left"></i>
            </h1>
           
          </div>
          <div>
            <img src={props.imageurl} alt="" srcSet="" />
          </div>
          {/* <div>
            <h6>{props.name}</h6>
            <small>{props.location}</small>
          </div> */}
        </div>
        <div className="tes-content">
           
            <p>{props.description}</p>
            <h5>{props.title}</h5>
          </div>
      </div>
    </>
  );
};

export default TestimonialCard;
