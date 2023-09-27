import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({id, image, content, title, isAlternate, }) => {
  const cardContainerClass = isAlternate
    ? "card-container alternate"
    : "card-container";
  return (
    <>
      <div className={cardContainerClass}>
        <div className="card-image">
          <img src={image} alt="Card Image" srcSet=""  className="w-100"/>
        </div>
        <div className="card-content service-content">
          <h3>{title}</h3>
          <p>{content}</p>
          <button className="button-50" role="button">
             Explore <i className="fa-solid fa-arrow-right"></i>
            </button>
          {/* <Link to={`/serviceDetail/${id}`}>
            <button className="button-50" role="button">
             Explore <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link> */}

        </div>
      </div>
      <hr />
    </>
  );
};

export default ServiceCard;
