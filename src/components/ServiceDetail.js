// import React from "react";
// import { useParams } from "react-router-dom";
// import ServicesBanner from "./ServicesBanner";
// import PartnerSlider from "./PartnerSlider";
// import TruckGif from "./TruckGif";
// import DATA from "../Data";

// const ServiceDetail = () => {
//   const { id } = useParams();
//   const selectedService = DATA.find((service) => service.id === parseInt(id));

//   if (!selectedService) {
//     return <div>Service not found.</div>;
//   }

//   const { image, title, contentfull } = selectedService;

//   return (
//     <>
//       {/* <ServicesBanner image={image} title="Services Detail" /> */}
//       <section className="service-section-page">
//         <div className="container">
//           <div className="row ">
//             <div className="col-md-6">
//               <div className="">
//                 <img src={image} alt="Service Image" srcSet="" />
//               </div>
//             </div>
//             <div className="col-md-6 step-part">
//               <div className="service-title primum-steps">
//               <h4>{title}</h4>
//               </div>
//             </div>
//             <div className="col-md-10">
//               <div className="servicedetail">
                
//                 <div dangerouslySetInnerHTML={{__html:contentfull}}></div>
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <PartnerSlider />
   
//     </>
//   );
// };

// export default ServiceDetail;
