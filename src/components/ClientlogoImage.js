import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ClientlogoImage = () => {
  
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(() => {
  fetchData()

  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://b2b.truxcargo.com/api/truxapi/client"
      );
      const jsonData = await response.json();
      setdata(jsonData.data);
      setloading(false)
    } catch (error) {
      console.log("Error fetching data", error);
      setloading(false)
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <section className="partner-trust margin_top_bottom">
      <div className="container-fluid">
       <div className="text-center">
       <h4>Multiple Partners</h4>
        <h5>Partners who trust us</h5>
       </div>
        <div className="row mt-5"> 
          <div className="col-md-12">
            <div className="row">
            <Carousel
                arrows={true}
                infinite={true}
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={5000}
              >
              
             
              {data.map((item, index) => (
                <div key={index} className="col-md-2" >
                 <div className="client-logo">
                  <div className="circle-border">
                  <div className="logo_bg">
                  <img src={item.pic} className="w-100"  />
                  </div>
                  </div>
                </div>
                </div>
               
              ))}
               </Carousel>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default ClientlogoImage;
