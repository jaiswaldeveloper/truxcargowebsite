import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      // Less than or equal to 5 pages, show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // More than 5 pages
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        // Show first 5 pages
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
        // Show last 5 pages
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        // Show pages around the current page
        startPage = currentPage - Math.floor(maxPagesToShow / 2);
        endPage = currentPage + Math.ceil(maxPagesToShow / 2) - 1;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, id) => startPage + id
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-md-8">
            <nav aria-label="Page navigation">
          <ul className="pagination  ">
            {/* Show "Previous" button only when currentPage is greater than 1 */}
            {currentPage > 1 && (
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => onPageChange(currentPage - 1)}
                >
                  <i className="fa-solid fa-arrow-left"></i> Prev
                </button>
              </li>
            )}

            {getPageNumbers().map((page) => (
              <li
                className={`page-item ${page === currentPage ? "active" : ""}`}
                key={page}
              >
                <button
                  className="page-link page-design"
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next <i className="fa-solid fa-arrow-right"></i>
              </button>
            </li>
          </ul>
        </nav>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Pagination;
