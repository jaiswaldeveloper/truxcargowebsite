import React from "react";

const NewsLetter = ({ background }) => {
  const newsletterStyle = {
    background,
    // backgroundImage: `url(${backgroundImage})`,
    // Add other styles for layout, padding, etc.
  };
  return (
    <>
      <section className="news_letter_section  margin_top_bottom" >
        <div className="container">
          <div className="row justify-content-center" >
            <div className="col-md-8">
              <div className="newsletterwrapper" style={newsletterStyle}>
                <div className="newsletterinside">
                  <h2>
                  Be in the know
                  </h2>
                  <p>
                  Stay informed about all developments and product updates at Truxcargo
                  </p>
                  <form>
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      className="newsletter_input "
                      required
                    />
                    <button className="btn btn_newletter">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
