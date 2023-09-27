import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const LatestThreeBlogs = () => {
  const [latestBlogCard, setLatestBlogCard] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://b2b.truxcargo.com/api/truxapi/blog"
      );
      const datajson = await response.json();
      // Slice the data and update the state
      const latestBlogData = datajson.data.slice(0, 3);
      setLatestBlogCard(latestBlogData);
      setloading(false);
    } catch (error) {
      console.log("error blog cards");
      setError(true);
      setloading(false);
    }
  };

  const createTruncatedMarkup = (text, maxWords) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= maxWords) {
      return { __html: text };
    }
    const truncatedText = words.slice(0, maxWords).join(" ") + "...";
    return { __html: truncatedText };
  };

  return (
    <>
      <section className="blog-section margin_top_bottom">
        <div className="container-fluid">
        <h4>Latest <span>Blogs</span> </h4>
    
          <div className="row ">
            {latestBlogCard.map((items) => (
              <div className="col-md-4" key={items.id}>
                <div className="blog-card">
                  <div className="blog_main_image">
                    <img src={items.pic} alt="" className="w-100" />
                  </div>
                  <div className="blog-content">
                    {/* <h4>{items.title}</h4> */}
                    <Link to={`/blogPost/${items.id}`}>
                          <h4>{items.title}</h4>
                          </Link> 
                    <div
                      className="limit"
                      dangerouslySetInnerHTML={createTruncatedMarkup(
                        items.desc,
                        20
                      )}
                    />
                    <div className="read-blog">
                      <small>{format(new Date(items.date), "MMM dd, yyyy")}</small>
     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestThreeBlogs;
