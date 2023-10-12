import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import HomeNav from "../components/HomeNav";
import { Helmet } from "react-helmet";

const BlogList = ({ id }) => {
  const [blogCard, setBlogCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const itemsPerPage = 6; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://b2b.truxcargo.com/api/truxapi/blog"
      );
      const datajson = await response.json();
      console.log(datajson)
      setBlogCard(datajson.data);

      setLoading(false);
    } catch (error) {
      console.log("error blog cards");
      setLoading(false);
      setError(true);
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

  function truncateTitle(title, wordCount) {
    const words = title.split(" ");
    const truncatedTitle = words.slice(0, wordCount).join(" ") + "...";
    return truncatedTitle;
  }

  if (loading) {
    return <Shimmer />;
  }

  if (Error) {
    return <p>Error fetching data.</p>;
  }
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const totalItems = blogCard.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedBlogCards = blogCard.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <><Helmet><title>Top Blogs</title></Helmet>
      <HomeNav />
      {/* <div className="blog-banner" style={styes}></div> */}
      <section className="blog-section mt-5">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-8">
              <div className="row">
                {paginatedBlogCards.map((item) => (
                  <div className="col-md-6" key={item.id} >
                      <div className="blog-card"  >
                        <div className="blog_main_image">
                          <img src={item.pic} srcSet="" alt="" className="w-100" />
                        </div>
                        <div className="blog-content">
                    <Link to={`/blogPost/${item.id}`}>
                          <h4  >{truncateTitle(item.title, 9)}</h4>

                          </Link>
                          <div
                            className="limit"
                            dangerouslySetInnerHTML={createTruncatedMarkup(
                              item.desc,
                              20
                            )}
                          />
                          <div className="read-blog">
                            <small>
                              {format(new Date(item.date), "MMMM dd, yyyy")}
                            </small>
                            <small>
                              {" "}
                              {item.view } view <i class="fa-solid fa-eye"></i>
                            </small>
                           
                          </div>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-ads-banner">
                <img
                  src="/image/Website Blog Banner.png"
                  alt=""
                  className="w-100"
                />
                <img
                  src="/image/Website Blog Banner.png"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>

      {/* <BlogDetails topLatestBlogs={topLatestBlogs}/> */}
    </>
  );
};

export default BlogList;
