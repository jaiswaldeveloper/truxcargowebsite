import React from "react";

const ServicesBanner = (props) => {
    const {image, title} = props
  return (
    <>
      <div className="banners-top">
         <img src={image} alt="" srcSet="" className="w-100" />
          <div className="banner-overlay"></div>
        <div className="banner-title">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
};

export default ServicesBanner;
