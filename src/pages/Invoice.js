import React from "react";
import image from "../assets/images/partner/banner/invoice.svg";
import ServicesBanner from "../components/ServicesBanner";

const Invoice = () => {
  return (
    <>

      <ServicesBanner image={image} title="Invoice" />
      <section className="invoice-section ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <form className="invoice-from ">
                <h2>Get Invoice</h2>
                <p>Get your invoice in just few steps</p>
                <div className="form-group ">
                  <input
                    type="text"
                    placeholder="ENTER YOUR GST NUMBER"
                    className="form-control w-75 required  "
                    style={{ margin: "auto" }}
                  />
                </div>
                <div className="form-group mt-3">
                  <button className="button-50" role="button" type="button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Invoice;
