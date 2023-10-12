import React from "react";

const Shimmer = () => {
  const shimmerCards = Array(15).fill(null)
  return (
    <>
      <section className="blog-section mt-5">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-8">
              <div className="row">
                  {
                    shimmerCards.map((_, index)=>(
                      <div className="col-md-6"  key={index}>
                      <div class="card-shimmer">
                      <div class="shimmerBG media"></div>
                      <div class="p-32">
                        <div class="shimmerBG title-line"></div>
                        <div class="shimmerBG title-line end"></div>
  
                        <div class="shimmerBG content-line m-t-24"></div>
                        <div class="shimmerBG content-line"></div>
                        <div class="shimmerBG content-line"></div>
                        <div class="shimmerBG content-line"></div>
                        <div class="shimmerBG content-line end"></div>
                      </div>
                    </div>
                  </div>
                    ))
                  }
               
                </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Shimmer;
