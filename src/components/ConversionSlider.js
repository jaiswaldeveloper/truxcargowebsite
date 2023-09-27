import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ConversionSlider = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>

     <section className="conversionslider margin_top_bottom">
      <div className="container-fluid">
      <h4>Customer   <span>Initiative</span> </h4>
      </div>
     <Carousel
      
        arrows={false}
        infinite={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        <div class="box_conversion_slider Power">
          <div className="wrapper_conversion">
            <img src="/image/gif/Power.gif" alt="power" />
          </div>
          <div className="conversion_content"> <h6>Customer engagement</h6> 
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quidem dolore fuga at</p>
            </div>
        </div>
        <div class="box_conversion_slider scan">
          <div className="wrapper_conversion">
            <img src="/image/gif/Scan-png.gif" alt="power" />
           
          </div>
          <div className="conversion_content">
             <h6>Checkout optimisation</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quidem dolore fuga at</p>
        </div>
        </div>
        <div class="box_conversion_slider rating ">
          <div className="wrapper_conversion">
            <img src="/image/gif/Review.gif" alt="power" />
           
          </div>
          <div className="conversion_content"> <h6>Customer retention</h6> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quidem dolore fuga at</p>
          </div>
        </div>
        <div class="box_conversion_slider truck">
          <div className="wrapper_conversion">
            <img src="/image/gif/Truck-png.gif" alt="power" />
            
          </div>
          <div className="conversion_content"><h6>best management </h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quidem dolore fuga at</p>
          </div>
        </div>
        <div class="box_conversion_slider email">
          <div className="wrapper_conversion ">
            <img src="/image/gif/Email.gif" alt="power" />
          </div>
          <div className="conversion_content"><h6>Best User interface</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quidem dolore fuga at</p></div>
        </div>
       
      </Carousel>
     </section>
    </>
  );
};

export default ConversionSlider;
