import React from "react";
import YouTube from "react-youtube";

const WeightReconciliation = () => {
  const videoId = "FQb_RmBoItY";
  <YouTube videoId={videoId} />;
  return (
    <>

      <div className="">
        <img
          src="/image/solutions/weight-02.jpg"
          alt=""
          srcSet=""
          className="w-100"
        />
      </div>

      <section className="weight-reconcillation mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="ndr-mangemnet-part">
                <h2>Weight Reconcillation</h2>

                <p>
                  The Weight Reconciliation tab shows you all the shipments
                  where a weight discrepancy has been raised by the courier.
                </p>

                <p>
                  <span>New Discrepancy:</span> New weight discrepancy generates
                  when there's a difference between your shipment's applied and
                  actual weight.
                </p>
                <p>
                  <span>Dispute Raised:</span> For every new weight discrepancy,
                  a seller has the option to either reject or accept the courier
                  claim. We raise a dispute on your behalf when you reject the
                  applied weight discrepancy.
                </p>
                <p>
                  <span>Discrepancy Accepted:</span> We change the status of
                  your weight discrepancy when you accept the new weight applied
                  by the courier.
                </p>
                <p>
                  <span>Dispute Rejected by Courier:</span> When the respective
                  courier rejects the dispute raised by the seller.
                </p>
                <p>
                  <span>Dispute Accepted by Courier:</span> When the respective
                  courier partner accepts the dispute raised by the seller.
                </p>
                <p>
                  <span>Auto Accept: </span>If a seller doesn't take action, we
                  accept the final weight shared by the courier.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="weight">
                <img
                  src="/image/solutions/6455352.png"
                  alt=""
                  srcset=""
                  className="w-100"
                />
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-7">
              <div className="">
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
            <div className="col-md-5">
              <div className="ndr-mangemnet-part">
                <h2>Weight Capturing Process</h2>

                <p>
                  Our Pickup team is Mentioning Approximate weight and
                  Dimensions and again we are calculating your weight and
                  Dimensions automatically with Highest Technology weight
                  Capturing Shorter Machine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeightReconciliation;
