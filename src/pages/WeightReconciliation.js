import React from "react";
import YouTube from "react-youtube";
import HomeNav from "../components/HomeNav";
import Navigation from "../components/Navigation";
import NewsLetter from "../components/NewsLetter";
import { Helmet } from "react-helmet";

const WeightReconciliation = () => {
  const newsletterProps = {
    background: `url("/image/Solutionss/weight/newletter.png") center center / cover no-repeat`,
    content: "Stay In the touch",
    paragraph:
      "Keep up with what’s happening at Truxcargo and never miss a update.",
  };

  const bg_weight = {
    borderRadius: "30px",
    background: "linear-gradient(278deg, #7939CC 0%, rgba(0, 0, 136, 0.53) 47.04%, #4656A3 100%)",
 
    padding: "6rem",
    position: "relative",
    color: "#fff",
    overflow: "hidden",
  };
  const videoId = "FQb_RmBoItY";
  <YouTube videoId={videoId} />;
  return (
    <>
      <Helmet>
        <title>weight Reconciliation</title>
      </Helmet>
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

        <div className="container-fluid margin_top_bottom">
      <section className="weight_stages" style={bg_weight}>
          <h2>
            The Weight Reconciliation tab shows you all the shipments where a
            weight discrepancy has been raised by the courier.
          </h2>
          <div className="row my-5">
            <div className="col-md-6">
              <div className="weight-stage_content">
                <h5>New Discrepancy</h5>
                <p>
                  New weight discrepancy generates when there's a difference
                  between your shipment's applied and actual weight. The new
                  weight reconciliation module on dashboard gives you a one stop
                  solution to manage all your weight discrepancies and disputes.
                </p>
                <ul>
                  <li>
                    Identify incorrect weight charges faster: You can
                    automatically check the orders where a higher weight is
                    charged by the courier company. We highlight all new
                    discrepancies and discrepancies where your action is
                    required.
                  </li>
                  <li>
                    Quickly resolve disputes: You can upload the product and
                    package images while raising the disputes on the charged
                    weight leading to quicker resolution. In case of a dispute,
                    the amount difference is put on hold until the dispute is
                    resolved.
                  </li>
                  <li>
                    Dispute History: Logs of all the weight discrepancies and
                    disputes create rich insights into product and packaging
                    optimizations leading to long term impact.
                  </li>
                  <li>
                    Increased Transparency: You have access to the exact updates
                    in the weight on every order removing any mismatches in the
                    wallet deduction.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="weight-stages_pic">
              <img  src="/image/SolutionsS/weight/NewDiscrepancy.png" alt="" srcset=""  />

              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-6">
            <div className="weight-stage_content">
                <h5>Dispute Raised</h5>
                <p>
                  New weight discrepancy generates when there's a difference
                  between your shipment's applied and actual weight. The new
                  weight reconciliation module on dashboard gives you a one stop
                  solution to manage all your weight discrepancies and disputes.
                </p>
                <ul>
                  <li>
                    Identify incorrect weight charges faster: You can
                    automatically check the orders where a higher weight is
                    charged by the courier company. We highlight all new
                    discrepancies and discrepancies where your action is
                    required.
                  </li>
                  <li>
                    Quickly resolve disputes: You can upload the product and
                    package images while raising the disputes on the charged
                    weight leading to quicker resolution. In case of a dispute,
                    the amount difference is put on hold until the dispute is
                    resolved.
                  </li>
                  <li>
                    Dispute History: Logs of all the weight discrepancies and
                    disputes create rich insights into product and packaging
                    optimizations leading to long term impact.
                  </li>
                  <li>
                    Increased Transparency: You have access to the exact updates
                    in the weight on every order removing any mismatches in the
                    wallet deduction.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="weight-stages_pic">
              <img  src="/image/SolutionsS/weight/DisputeRaised.png" alt="" srcset="" />
              </div>
             
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-6">
            <div className="weight-stage_content">
                <h5>Discrepancy Accepted</h5>
                <p>
                  New weight discrepancy generates when there's a difference
                  between your shipment's applied and actual weight. The new
                  weight reconciliation module on dashboard gives you a one stop
                  solution to manage all your weight discrepancies and disputes.
                </p>
                <ul>
                  <li>
                    Identify incorrect weight charges faster: You can
                    automatically check the orders where a higher weight is
                    charged by the courier company. We highlight all new
                    discrepancies and discrepancies where your action is
                    required.
                  </li>
                  <li>
                    Quickly resolve disputes: You can upload the product and
                    package images while raising the disputes on the charged
                    weight leading to quicker resolution. In case of a dispute,
                    the amount difference is put on hold until the dispute is
                    resolved.
                  </li>
                  <li>
                    Dispute History: Logs of all the weight discrepancies and
                    disputes create rich insights into product and packaging
                    optimizations leading to long term impact.
                  </li>
                  <li>
                    Increased Transparency: You have access to the exact updates
                    in the weight on every order removing any mismatches in the
                    wallet deduction.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="weight-stages_pic">
              <img  src="/image/SolutionsS/weight/DiscrepancyAccepted.png" alt="" srcset="" />
              </div>
             
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-6">
            <div className="weight-stage_content">
                <h5>Dispute Rejected</h5>
                <p>
                  New weight discrepancy generates when there's a difference
                  between your shipment's applied and actual weight. The new
                  weight reconciliation module on dashboard gives you a one stop
                  solution to manage all your weight discrepancies and disputes.
                </p>
                <ul>
                  <li>
                    Identify incorrect weight charges faster: You can
                    automatically check the orders where a higher weight is
                    charged by the courier company. We highlight all new
                    discrepancies and discrepancies where your action is
                    required.
                  </li>
                  <li>
                    Quickly resolve disputes: You can upload the product and
                    package images while raising the disputes on the charged
                    weight leading to quicker resolution. In case of a dispute,
                    the amount difference is put on hold until the dispute is
                    resolved.
                  </li>
                  <li>
                    Dispute History: Logs of all the weight discrepancies and
                    disputes create rich insights into product and packaging
                    optimizations leading to long term impact.
                  </li>
                  <li>
                    Increased Transparency: You have access to the exact updates
                    in the weight on every order removing any mismatches in the
                    wallet deduction.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="weight-stages_pic">
              <img  src="/image/SolutionsS/weight/DisputeRejected.png" alt="" srcset="" />
              </div>
             
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-6">
            <div className="weight-stage_content">
                <h5>Auto Accept</h5>
                <p>
                  New weight discrepancy generates when there's a difference
                  between your shipment's applied and actual weight. The new
                  weight reconciliation module on dashboard gives you a one stop
                  solution to manage all your weight discrepancies and disputes.
                </p>
                <ul>
                  <li>
                    Identify incorrect weight charges faster: You can
                    automatically check the orders where a higher weight is
                    charged by the courier company. We highlight all new
                    discrepancies and discrepancies where your action is
                    required.
                  </li>
                  <li>
                    Quickly resolve disputes: You can upload the product and
                    package images while raising the disputes on the charged
                    weight leading to quicker resolution. In case of a dispute,
                    the amount difference is put on hold until the dispute is
                    resolved.
                  </li>
                  <li>
                    Dispute History: Logs of all the weight discrepancies and
                    disputes create rich insights into product and packaging
                    optimizations leading to long term impact.
                  </li>
                  <li>
                    Increased Transparency: You have access to the exact updates
                    in the weight on every order removing any mismatches in the
                    wallet deduction.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="weight-stages_pic">
              <img  src="/image/SolutionsS/weight/AutoAccept.png" alt="" srcset="" />
              </div>
             
            </div>
          </div>
      </section>
        </div>


     <div className="container-fluid margin_top_bottom">
      <div className="section" >
         <img src="/image/SolutionsS/weight/costomer.png" alt="" srcset="" className="w-100" />
      </div>
     </div>


      <div className="container-fluid">
        <div className="ndr-mangement-section margin_top_bottom">
          <div className="ndr-mangemnet-youtube ">
            <div className="">
              <h2>Weight Capturing Process</h2>
              <p>
                It is vital to ensure that the appropriate amount is charged
                during the shipping process by ensuring that the weight of all
                types of goods is accurately estimated. Vee Technologies' weight
                reconciliation services ensure that there are no disparities in
                shipping weight, preventing revenue loss due to excessive
                charges.
              </p>
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
