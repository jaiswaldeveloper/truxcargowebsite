import React from "react";

function OrderStatus() {
  const bgone={
    background: `url("/image/process_icon/rectangle1.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

  }
  const bgone2={
    background: `url("/image/process_icon/rectangle2.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

  }
  return (
    <>
      <section className="order-status-section margin_top_bottom">
        <div className="container-fluid ">
          <h4>
          Order <span>Status</span>{" "}
          </h4>

          <div className="order-status-parts">
            <div style={bgone}>
              <img src="image/process_icon/1.svg" alt="" srcset="" />
              <h6>Order Received</h6>
              <p>Your order has been received by your courier partner</p>
            </div>

            <div style={bgone2}>
              <img src="image/process_icon/2.svg" alt="" srcset="" />
              <h6>Order Picked</h6>
              <p>Your order has been picked up by your courier partner</p>
            </div>
            <div style={bgone}>
              <img src="image/process_icon/3.svg" alt="" srcset="" />
              <h6>Order In Transit</h6>
              <p>Your order is on it’s way to your customer’s address</p>
            </div>
            <div style={bgone2}>
              <img src="image/process_icon/4.svg" alt="" srcset="" />
              <h6>Out For Delivery</h6>
              <p>
                The courier executive is on its way to deliver the order at your
                doorstep
              </p>
            </div>
            <div style={bgone}>
              <img src="image/process_icon/5.svg" alt="" srcset="" />
              <h6>Delivered</h6>
              <p>Your order has reached our customer’s city</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderStatus;
