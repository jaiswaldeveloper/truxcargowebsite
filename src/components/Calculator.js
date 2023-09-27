import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
const Calculator = () => {
  const rate = {
    background: `url("/image/rate_calculatoe_bg.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // height: "100vh",
  };
  const rate2 = {
    background: `url("/image/rate_calculatoe_bg_inside.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // height: "80vh",
  
  };

  const [validated, setValidated] = useState(false);
  const [userInputLength, setuserInputLength] = useState("");
  const [userInputHeight, setuserInputHeight] = useState("");
  const [userInputWidth, setuserInputWidth] = useState("");

  
  const handleInputChangeLength = (e) => {
    setuserInputLength(e.target.value);
  };
  const handleInputChangeHeight = (e) => {
    setuserInputHeight(e.target.value);
  };
  const handleInputChangeWidth = (e) => {
    setuserInputWidth(e.target.value);
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
    <div className="calculator_section " style={rate}>
   
   <Form noValidate validated={validated} onSubmit={handleSubmit} style={rate2}>
     {/* <h3>Calculate Your Shipping Costs Now </h3> */}

     <div className="form_calcutor" >
       <Form.Group controlId="validationCustom01">
         <Form.Label>Origin Pincode</Form.Label>
         <Form.Control
           required
           maxLength={6}
           type="number"
           placeholder="Enter Origin Pincode"
         />
         <Form.Control.Feedback></Form.Control.Feedback>
         <Form.Control.Feedback type="invalid">
           Please Enter Origin Pincode
         </Form.Control.Feedback>
       </Form.Group>

       <Form.Group controlId="validationCustom02">
         <Form.Label>Destination Pincode</Form.Label>
         <Form.Control
           required
           type="number"
           placeholder="Enter Destination Pincode"
           maxLength={6}
         />
         <Form.Control.Feedback></Form.Control.Feedback>
         <Form.Control.Feedback type="invalid">
           Please Enter Destination Pincode
         </Form.Control.Feedback>
       </Form.Group>
     </div>
     <div className="form_calcutor">
       <Form.Group>
         <Form.Label>Payment Mode</Form.Label>

         <Form.Select>
           <option value="1">Prepaid</option>
           <option value="2">COD</option>
           <option value="3">To Pay</option>
           <option value="4">Frachise-ToPay</option>
         </Form.Select>
         <Form.Control.Feedback></Form.Control.Feedback>
         <Form.Control.Feedback type="invalid">
           Please Select Payment mode
         </Form.Control.Feedback>
       </Form.Group>

       <Form.Group controlId="validationCustom03">
         <Form.Label>Approx Weight(Kg)</Form.Label>
         <Form.Control
           required
           type="number"
           placeholder="Enter Approx Weight"
         />
         <Form.Control.Feedback></Form.Control.Feedback>
         <Form.Control.Feedback type="invalid">
           Please Enter Approx Weight
         </Form.Control.Feedback>
       </Form.Group>
     </div>
     <div className="form_calcutor">
       <Form.Group controlId="validationCustom04">
         <Form.Label>Invoice Value</Form.Label>
         <Form.Control
           required
           type="number"
           placeholder="Enter Invoice Value"
         />
         <Form.Control.Feedback></Form.Control.Feedback>
         <Form.Control.Feedback type="invalid">
           Please Enter Invoice Value
         </Form.Control.Feedback>
       </Form.Group>
       <Form.Group controlId="validationCustom05">
         <Form.Label>Qty</Form.Label>
         <Form.Control required type="number" placeholder="Enter Qty" />
         <Form.Control.Feedback></Form.Control.Feedback>
         <Form.Control.Feedback type="invalid">
           Please Enter Qty
         </Form.Control.Feedback>
       </Form.Group>
     </div>
     <div className="dimension_part">
       <h5>Dimensions (cm)</h5>
       <div className="form_calcutor">
         <Form.Group controlId="validationCustom06">
           <Form.Label>Length</Form.Label>
           <Form.Control
             required
             type="number"
             placeholder="Enter Length"
             value={userInputLength}
             onChange={handleInputChangeLength}
           />
           <Form.Control.Feedback></Form.Control.Feedback>
           <Form.Control.Feedback type="invalid">
             Please Enter Length
           </Form.Control.Feedback>
         </Form.Group>

         <Form.Group controlId="validationCustom07">
           <Form.Label>Width</Form.Label>
           <Form.Control
             required
             type="number"
             placeholder="Enter Width"
             value={userInputWidth}
             onChange={handleInputChangeWidth}
           />
           <Form.Control.Feedback></Form.Control.Feedback>
           <Form.Control.Feedback type="invalid">
             Please Enter Width
           </Form.Control.Feedback>
         </Form.Group>
         <Form.Group controlId="validationCustom02">
           <Form.Label>Height</Form.Label>
           <Form.Control
             required
             type="number"
             placeholder="Enter Height"
             value={userInputHeight}
             onChange={handleInputChangeHeight}
           />
           <Form.Control.Feedback></Form.Control.Feedback>
           <Form.Control.Feedback type="invalid">
             Please Enter Height
           </Form.Control.Feedback>
         </Form.Group>
       </div>
       <div className="text-center dimension-center">
         <img src="/image/box_dimension.png" alt="" srcset="" />
         <p className="userInputLength">{userInputLength}</p>
         <p className="userInputHeight">{userInputHeight}</p>
         <p className="userInputWidth">{userInputWidth}</p>
       </div>
       {/* <button className="btn button-cal">Calculate</button> */}
       <Button type="submit" className="btn button-cal">
         Calculate
       </Button>
     </div>
   </Form>


 </div>
    </>
  );
};

export default Calculator;
