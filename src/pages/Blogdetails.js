import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import HomeNav from "../components/HomeNav";
import { Helmet } from "react-helmet";
const BlogDetails = () => {
  const { id: urlId } = useParams();
  // const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [topLatestBlogs, setTopLatestBlogs] = useState([]);

  const navigate = useNavigate();

  const handleOnClick = (blogId) => {
    navigate(`/blogPost/${blogId}`);
  };
  useEffect(() => {
    fetchData(urlId); // Fetch data based on the URL ID
  }, [urlId]); // Re-fetch data when the URL ID changes

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async (id) => {
    try {
      const response = await fetch(
        `https://b2b.truxcargo.com/api/truxapi/bloginfo/${id}`
      );
      const datajson = await response.json();
      console.log(datajson);
      setBlogPost(datajson.data[0]); // Update the state with the first item from the 'data' array
      setLoading(false);
    } catch (error) {
      console.log("Error fetching blog post:", error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchTopLatestBlogs();
  }, []);
  const fetchTopLatestBlogs = async () => {
    try {
      const response = await fetch(
        "https://b2b.truxcargo.com/api/truxapi/blog"
      );
      const datajson = await response.json();
      const topLatestBlogs = datajson.data.slice(0, 6);
      setTopLatestBlogs(topLatestBlogs);
    } catch (error) {
      console.log("Error fetching top latest blog posts:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !blogPost) {
    return <p>Error fetching blog post.</p>;
  }
  const createTruncatedMarkup = (text, maxWords) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= maxWords) {
      return { __html: text };
    }
    const truncatedText = words.slice(0, maxWords).join(" ") + "...";
    return { __html: truncatedText };
  };

  function truncateTitle(title, wordCount) {
    const words = title.split(" ");
    const truncatedTitle = words.slice(0, wordCount).join(" ") + "...";
    return truncatedTitle;
  }

  const { pic, date, title, desc } = blogPost;

  return (
    <>
    <Helmet><title>Blogs Details</title></Helmet>
      <HomeNav />
      <div className="container-fluid margin_top_bottom">
        <div className="row">
          <div className="col-md-9">
            <div className="blog-details">
              <h2>{title}</h2>
              <h6>{format(new Date(date), "MMMM dd, yyyy")}</h6>
              <img src={pic} srcset="" alt={title} />

              <p>
                <div dangerouslySetInnerHTML={{ __html: desc }}></div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <h2>Our Latest Blogs</h2>
        <div className="row">
          {topLatestBlogs.map((blog) => (
            <div className="col-md-4" key={blog.id}>
              <div className="blog-card">
                <div className="blog_main_image">
                  <img
                    src={blog.pic}
                    alt={blog.title}
                    srcset=""
                    className="w-100"
                  />
                </div>
                <div className="blog-content">
                  <h4 onClick={() => handleOnClick(blog.id)}>
                    {truncateTitle(blog.title, 8)}
                  </h4>

                  <div
                    dangerouslySetInnerHTML={createTruncatedMarkup(
                      blog.desc,
                      20
                    )}
                  />
                  <div className="read-blog">
                    <small>
                      {format(new Date(blog.date), "MMMM dd, yyyy")}
                    </small>
                    <small>
                      {" "}
                      {blog.view} view <i class="fa-solid fa-eye"></i>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
