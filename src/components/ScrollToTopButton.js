import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Button onClick={scrollToTop} className="scroltotop" style={{float: "right"}} >
        <i class="fa-solid fa-arrow-up"></i>
      </Button>
    </>
  );
};

export default ScrollToTopButton;
