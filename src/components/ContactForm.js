import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const rate = {
    background:
      "radial-gradient(139.77% 139.64% at 0% 0%, #4656A3 0%, rgba(121, 57, 204, 0.40) 100%, #7939CC 100%)",

    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // width: "100%",
    padding: "50px",
    borderRadius: "20px",
    // height: "100vh",
  };
  const rate2 = {
    background: `url("/image/rate_calculatoe_bg_inside.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    borderRadius: "10px",
    padding: "20px",
    border: "1px solid #fff",
    // height: "80vh",
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <section style={rate}>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={rate2}
        >
          <h4>Enter Your Query</h4>
          {/* <h3>Calculate Your Shipping Costs Now </h3> */}

          <Form.Group className="mb-2" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Your Name" />
            <Form.Control.Feedback></Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter Origin Pincode
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2" controlId="validationCustom02">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter Your phone number"
              maxLength={10}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter phone number
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2" controlId="validationCustom04">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Your Email"
            />
            <Form.Control.Feedback></Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2" controlId="validationCustom05">
            <Form.Label>Subject</Form.Label>
            <Form.Control required type="number" placeholder="Enter Subject" />
            <Form.Control.Feedback></Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter Subject
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group className="mb-2" controlId="validationCustom06">
            <Form.Label>Message</Form.Label>
            <Form.Control required as="textarea" rows={4}  />
            <Form.Control.Feedback></Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter Message
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="btn button-cal">
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
};

export default ContactForm;
