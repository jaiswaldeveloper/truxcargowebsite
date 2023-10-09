import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ShipingPartners = () => {
  const bg_partners = {
    background : `url("/image/partner_bg.jpg")`,
    // background: "linear-gradient(93deg, rgb(90, 145, 233) 0%, rgb(115 44 207) 100%)",
 
    // clipPath: "polygon(0% 0%, 14.65% 0%, 47.63% 12.51%, 80.54% 0%, 100% 0%, 100% 100%, 80.54% 100%, 47.63% 86.09%, 14.73% 100%, 0% 100%)",

    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover ",
    width: "100%",
    textAlign: "center",
    height:"50vh",
    padding: "4rem 0",
    
  };
//   const settings = {
//     infinite: true,
//     verticalSwiping: true, 
//     slidesToShow: 7, 
//     slidesToScroll: 2, 
//     arrows: false, 
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 4000,
//     cssEase: "linear",
//   };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 8,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <>
      <section className="shiping_partner margin_top_bottom " style={bg_partners}>
        <h4 >Our Delivery Partners</h4>
        <Carousel
          style={bg_partners}
          swipeable={false}
  draggable={false}

          arrows={false}
          infinite={true}
          responsive={responsive}
          autoPlay={true}
      
        >
          <div>
            <img src="/image/partner_logo/xpessbees.jpg" className="w-100" alt="" />
          </div>
          <div>
            <img src="/image/partner_logo/deliverey.png" className="w-100" alt="" />
          </div>
          <div>
            <img src="/image/partner_logo/dtdc.png" className="w-100" alt="" />
          </div>
          <div>
            <img src="/image/partner_logo/ecom_express.png" className="w-100" alt=""/>
          </div>
          <div> 
            <img src="/image/partner_logo/ekart.jpg"  className="w-100"  alt=""/>
          </div>
          <div>
            <img src="/image/partner_logo/gati.png" className="w-100" alt="" />
          </div>
          <div>
            <img src="/image/partner_logo/smarter.png" className="w-100" alt="" />
          </div>
          <div>
            <img src="/image/partner_logo/borzo.png" className="w-100"  alt=""/>
          </div>
          <div>
            <img src="/image/partner_logo/Oxygen.png" className="w-100" alt="" />
          </div>
        </Carousel>
        
      </section>
    </>
  );
};

export default ShipingPartners;
