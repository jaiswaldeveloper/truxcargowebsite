import React from "react";


const ApiIntegration = () => {
  return (
    <>

      <div className="">
        <img
          src="/image/solutions/api-09.jpg"
          alt=""
          srcSet=""
          className="w-100"
        />
      </div>

      <section className="weight-reconcillation mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="ndr-mangemnet-part">
                <h2>API Integration</h2>

                <h5>Add Power To Your Business With Our API Integration</h5>
                <p>
                  Integrate your eCommerce store with your TRUXCARGO account and
                  process all orders from one single platform. Sync the
                  inventory and catalog from your website to receive all
                  incoming orders into the panel.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="weight">
                <img
                  src="/image/solutions/patner.png"
                  alt=""
                  srcset=""
                  className="w-100"
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <div className="section_tittle ndr-mangemnet-part">
                <h2 style={{ lineheight: "63px" }}>
                  Quick and easy way of
                  <br />
                  <b className="black"> API Integration</b>
                </h2>
              </div>

              <div className="section_tittle">
                <h3 className="mt-4">Steps Of Integration</h3>
                <p>
                  As per the business needs depending upon the scale and
                  automation which one wants to achieve, classification among
                  APIs are being done,i.e. Must To Have and Can Have
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <h4 className="mt-4">
                      1. Check the pin-code serviceability
                    </h4>
                    <p>
                      API to check whether the pincode for delivery address is
                      serviceable or not.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mt-4">2. Warehouses locations</h4>
                    <p>
                      Pickup location are required to be created from where
                      pickup has to be done. One time pickup location can also
                      be created through Warehouse creation API.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mt-4">3. Order creation</h4>
                    <p>
                      The soft data of the shipment needs to be pushed to
                      Truxcargo system via Order Creation API. While manifesting
                      the order, waybill can be given in response.{" "}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mt-4">4. Shipping label</h4>
                    <p>
                      The packing slip api provides all information required to
                      be on the shipment packing slip and a client can design it
                      as per the requirement.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mt-4">5. Create Pickup Request API</h4>
                    <p>
                      Once the order has been created, pickup request to pick
                      the shipment will be done through this API.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mt-4">6. Track Shipment</h4>
                    <p>
                      Order created in the system can be tracked via tracking
                      API. Waybill will be the required input for this API.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mt-4">7. Cancel the order</h4>
                    <p>
                      You can use cancellation API, but you have to make sure
                      that the order is in right state in order to be cancelled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApiIntegration;
