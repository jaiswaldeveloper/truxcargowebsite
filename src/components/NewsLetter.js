import React from "react";

const NewsLetter = ({ background, content, paragraph }) => {
  const newsletterStyle = {
    background,
    content,
    // backgroundImage: `url(${backgroundImage})`,
    // Add other styles for layout, padding, etc.
  };
  return (
    <>
      <section className="news_letter_section  margin_top_bottom" >
        <div className="container-fluid">
        <div className="newsletterwrapper" style={newsletterStyle}>
                <div className="newsletterinside">
                  <h2>
                     {content}
                  </h2>
                  <p>
                 {paragraph}
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
      </section>
    </>
  );
};

export default NewsLetter;
