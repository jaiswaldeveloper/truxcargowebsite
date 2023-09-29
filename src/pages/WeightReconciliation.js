import React from "react";
import YouTube from "react-youtube";
import HomeNav from "../components/HomeNav";
import Navigation from "../components/Navigation";
import NewsLetter from "../components/NewsLetter";

const WeightReconciliation = () => {
  const newsletterProps = {
    background: `url("/image/Solutionss/weight/newletter.png") center center / cover no-repeat`,
    content: "Stay In the touch",
    paragraph:
      "Keep up with what’s happening at Truxcargo and never miss a update.",
  };
  const videoId = "FQb_RmBoItY";
  <YouTube videoId={videoId} />;
  return (
    <>
      <Navigation />
      <div className="inner-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 step-part">
              <div className="service_top_content primum-steps">
                <h4>Weight Reconciliation</h4>
                <p className="text-white">
                  Reduce undelivery with our automated NDR management solution
                </p>
                <button class="btn btn-outline-light ">Explore</button>
              </div>
            </div>
            <div className="col-md-7">
              <div className="text-end">
                <img
                  src="/image/SolutionsS/weight/1.png"
                  alt=""
                  srcSet=""
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid margin_top_bottom">
        <div className="ndr-mangement-section ">
          <div className="ndr-mangemnet-part">
            <div className="row">
              <div className="col-md-6">
                <h2>Weight Reconcillation</h2>

                <p>
                  It is vital to ensure that the appropriate amount is charged
                  during the shipping process by ensuring that the weight of all
                  types of goods is accurately estimated. Vee Technologies'
                  weight reconciliation services ensure that there are no
                  disparities in shipping weight, preventing revenue loss due to
                  excessive charges.
                  <br />
                  <br />
                  Our weight reconciliation for freight services helps all
                  parties engaged in freight forwarding transactions by
                  guaranteeing that carriers receive the precise amount that
                  they are owed.
                </p>
                <h6>Benefits of Truxcargo’s Weight Reconciliation</h6>
                <ul>
                  <li>
                    <b>Get a Speedy Resolution</b> -Once the dispute has been
                    raised at the ‘seller’s end, the weight reconciliation
                    manager ensures that one gets a quick resolution. Also, the
                    amount under dispute gets freeze.
                  </li>
                  <li>
                    <b>Save Both Time And Cost</b>- The weight reconciliation
                    manager thus helps in saving time and costs for sellers.
                    While is can get messy and time consuming as it can take an
                    entire day searching for a list of your orders that were
                    being over charged.{" "}
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <div className="text-end">
                  <img
                    src="/image/Solutionss/weight/2.png"
                    alt=""
                    srcset=""
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="ndr-mangement-section margin_top_bottom">
          <div className="ndr-mangemnet-youtube ">
            <div className="">
              <h2>Weight Capturing Process</h2>
              <p>It is vital to ensure that the appropriate amount is charged during the shipping process by ensuring that the weight of all types of goods is accurately estimated. Vee Technologies' weight reconciliation services ensure that there are no disparities in shipping weight, preventing revenue loss due to excessive charges.</p>
              <div className="text-center mt-5">
              <YouTube
                videoId={videoId}
                opts={{
                  height: "390",
                  width: "640",
                  playerVars: {
                    autoplay: 1,
                  },
                }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter {...newsletterProps} />
    </>
  );
};

export default WeightReconciliation;
