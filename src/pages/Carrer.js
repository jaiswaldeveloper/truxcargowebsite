import React from "react";
import Form from "react-bootstrap/Form";
import image from "../assets/images/we_are_hiring_05.svg";
import ServicesBanner from "../components/ServicesBanner";
import men from "../assets/images/men-carrer-02.svg";

const Carrer = () => {
  return (
    <>
 
      <ServicesBanner image={image} />
      <div className="carrer-form-section">
        <div className="container">
          <div className="row ">
            <div className="col-md-1"> </div>
            <div className="col-md-6">
              <form className="carrer-form">
                <div className="faq-heading">
                  <p>Carrer</p>
                  <h2>Join Us </h2>
                </div>
                <div className="form-group ">
                  <i className="fa-solid fa-paper-plane"></i>
                  <Form.Select
                    aria-label="Default select example"
                    className="job-select"
                  >
                    <option>Select Carrer opportunties</option>
                    <option value="1">Sales</option>
                    <option value="2">Operation</option>
                    <option value="3">Technical</option>
                    <option value="4">Account</option>
                    <option value="5">Developer</option>
                    <option value="6">Graphic Designer</option>
                  </Form.Select>
                </div>

                <div className="form-group">
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group">
                  <i className="fa-solid fa-at"></i>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email Id"
                  />
                </div>

                <div className="form-group">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Enter Contact No."
                  />
                </div>
                <div className="form-group">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <input
                    type="text"
                    name="qual"
                    className="form-control"
                    placeholder="Enter Qualification"
                  />
                </div>

                <div className="form-group">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                  <input
                    type="text"
                    name="exp"
                    className="form-control"
                    placeholder="Enter Experience"
                  />
                </div>
                <div className="form-group">
                  <i className="fa-solid fa-location-dot"></i>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Enter Address"
                  />
                </div>
                <div className="form-group">
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                  <input
                    type="file"
                    name="resume"
                    className="form-control"
                    required="required"
                  />
                </div>
                <div className="text-center mt-5">
                  <button className="button-50 ">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-md-5">
              <div>
                <img src={men} alt="" srcSet="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrer;
