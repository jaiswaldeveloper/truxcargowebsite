import React from "react";

import Navigation from "../components/Navigation";
import NewsLetter from "../components/NewsLetter";

const Media = () => {
  const newsletterProps = {
    background: `url("/image/media/newletter.png") center center / cover no-repeat 
    `,
 
    // backgroundImage,
    
  };
  const media = {
    background: `url("/image/media/bg.png")`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "5rem 0",
    
  };
  const magzine = {
    background: `url("/image/media/magzine_bg.png")`,
    width: "100%",
    // height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "5rem ",
    borderRadius:" 20px",
  };

  return (
    <>
      <Navigation />
      <section className="media_section" style={media}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 step-part">
              <div className="left-side primum-steps">
                <h4>Media Stories</h4>
                <p className="text-white">
                  Reduce undelivery with our automated NDR management solution
                </p>
                <button class="btn btn-outline-light ">Explore</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right_side">
                <img
                  src="/image/media/magzine.png"
                  alt=""
                  srcset=""
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="Innovation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="let_connect ">
                <div className="let_connect_blur">
                  <h4>Redefining logistics with Innovation</h4>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque consectetur voluptas corporis, velit distinctio
                  praesentium accusantium, amet aut voluptatum odit tempora!
                  Aliquid ratione eum dignissimos hic cumque, deleniti deserunt
                  eveniet voluptate distinctio beatae quibusdam ipsum ex
                  sapiente pariatur. Sint laudantium nihil quasi nam voluptatem
                  corrupti quidem aperiam delectus. Ratione iste suscipit
                  expedita iure ipsa eum aspernatur molestias ullam nesciunt, id
                  est voluptate assumenda odio consectetur praesentium similique
                  iusto veniam. <br /> <br />
                  Accusamus nisi alias nihil at nesciunt, iure nobis autem
                  pariatur suscipit minima soluta exercitationem amet ipsa
                  labore, repudiandae ullam, tenetur aperiam? Nihil, veritatis
                  laudantium. Aperiam error distinctio repudiandae quis odit
                  dicta!
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-side text-center">
                <img src="/image/media/circle_image.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="magzine_section margin_top_bottom" style={magzine}>
          <h2>Magazine</h2>
          
          
          <div className="row ">
            <div className="col-md-4">
              <div className="mb-4">
              <div className="magzin_bg">
                <img src="/image/media/business_connect.jpg" alt="" srcSet="" />
              </div>
              <h6>Revolutionsing The Logistic Industry</h6>
             
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="mb-4">
              <div className="magzin_bg">
                <img src="/image/media/insightssuccess.jpg" alt="" srcSet="" />
              </div>
              <h6>Most Admired Transport And Logistics Companies In India</h6>
      
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="mb-4">
              <div className="magzin_bg">
                <img src="/image/media/opinion.jpg" alt="" srcSet="" />
              </div>
              <h6>Young Dynamic Business Leaders In Logistic</h6>
              </div>
             
     
            </div>
            <div className="col-md-4">
              {" "}
              <div className="mb-4">
              <div className="magzin_bg">
                <img src="/image/media/siliconindia.jpg" alt="" srcSet="" />
              </div>
              <h6>TuxCargo: Disrupting Logistics Space </h6>
              </div>
             
            
            </div>
            <div className="col-md-4">
              {" "}
              <div className="mb-4">
              <div className="up_coming_magazine">
                  <h5>upcoming</h5>
              </div>
              </div>
             
            
            </div>
            <div className="col-md-4">
              {" "}
              <div className="mb-4">
              <div className="up_coming_magazine">
                  <h5>upcoming</h5>
              </div>
              </div>
             
            
            </div>
          </div>
        </div>
      </div>
      <NewsLetter {...newsletterProps}/>
    </>
  );
};

export default Media;
