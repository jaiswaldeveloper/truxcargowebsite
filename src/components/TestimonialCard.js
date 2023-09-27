import React from "react";

const TestimonialCard = (props) => {
  const testimonial = {
    background : `url("image/testimonials/bg.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    padding: "2rem"
  }
  return (
    <>
    
      <div className="testimonal-card" style={testimonial} >
        <div className="d-flex gap-5 ">
         
        <div className="tes-content">
        <h1><i class="fa-solid fa-quote-left"></i></h1>
          <p>{props.description}</p>
          <h5>{props.title}</h5>
        </div>
        <div>
            <img src={props.imageurl} alt="" srcSet="" />
          </div>
          {/* <div>
            <h6>{props.name}</h6>
            <small>{props.location}</small>
          </div> */}
        </div>

      </div>
    </>
  );
};

export default TestimonialCard;
