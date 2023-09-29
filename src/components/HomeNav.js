import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import animationmenu from "../assets/images/menu-solution.json"

import Lottie from 'lottie-react';
// import manimg from "../assets/images/123.png";
const HomeNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showResourceDropdown, setShowResourceDropdown] = useState(false);
  // const [activeitem, setactiveitem] = useState("home")

  // const handleClick=(item)=>{
  //   setactiveitem(item)
  // }
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = (isOpen) => {
    setShowDropdown(isOpen);
  };
  const handleResourceDropdownToggle = (isOpen) => {
    setShowResourceDropdown(isOpen);
  };

  return (
    <>
      <section className="navbarSection">
        <Navbar
          expand="lg"
          className={isSticky ? "navbar sticky" : "navbar"}
          onMouseEnter={() => setShowDropdown(false)}
        >
          <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" >
              {/* <p>Menu</p> */}
            </Navbar.Toggle>
            <Navbar.Brand>
              <NavLink to="/">
                <img src={logo} alt="photo-error" className="trux-logo" />
              </NavLink>
            </Navbar.Brand>
           <div className="nav_reg">
           <Link to="https://b2b.truxcargo.com/register/">
                  <button className="btn button-reg">
                   Register
              
                  </button>
                </Link>
           </div>
           
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mx-auto my-2 my-lg-0">
                <NavLink to="/service" className="nav-link">
                  Services
                </NavLink>

                <NavDropdown
                  title="Solutions"
                  id="navbarScrollingDropdown"
                 
                  show={showDropdown}
                  onToggle={handleDropdownToggle}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                {/* <div className="triangle-up"></div> */}
                  <div className="solution_body">
                      <div className="solution_items">
                        <NavDropdown.Item>
                          <Link to="/ndr_managment"> <img src="image/solutions/icons/Frame1.svg" alt="" srcset="" /> NDR Management</Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                          <Link to="/weightReconciliation">
                          <img src="image/solutions/icons/Frame2.svg" alt="" srcset="" />Weight Reconciliation
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/cod_remittance">
                          <img src="image/solutions/icons/Frame4.svg" alt="" srcset="" />
                            Timely COD Remittance
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/multiple_pickup">
                          <img src="image/solutions/icons/Frame6.svg" alt="" srcset="" />
                            Multiple Pickup Locations
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/Multipal_Partner">
                          <img src="image/solutions/icons/Frame5.svg" alt="" srcset="" />
                            Multiple Shipping Partners
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        <img src="image/solutions/icons/Frame3.svg" alt="" srcset="" />
                          <Link to="/api_Integration">API Integration</Link>
                        </NavDropdown.Item>
                      </div>
                      <div className="solution_image">
                      <div className="lottie_animation">
                          <Lottie
                              animationData={animationmenu}
                              loop={true}
                              autoplay={true}
                              style={{ width: '140px'}}
                            />
                          </div>
                          {/* <img src="/image/solutions/solution-nav.svg" alt="" srcSet="" /> */}
                      </div>
                    </div>
                </NavDropdown>
            
                <NavLink to="/media" className="nav-link">
                  Media
                </NavLink>
                
                {/* <NavLink to="/trackpage" className="nav-link" >Track</NavLink> */}
                <NavDropdown
                  title="Resource"
                  id="navbarScrollingDropdownResource"
                  show={showResourceDropdown}
                  onToggle={handleResourceDropdownToggle}
                  onMouseEnter={() => setShowResourceDropdown(true)}
                  onMouseLeave={() => setShowResourceDropdown(false)}
                >
                 
                  <div className="resource_body">
                     
                      <div className="resource_items">
                     
                      <NavDropdown.Item>
                        <Link to="/contactus">
                           <img src="image/solutions/icons/Frame9.svg" alt="" srcset="" />Contact us</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/faq"><img src="image/solutions/icons/Frame10.svg" alt="" srcset="" />FAQ's</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/Carrer"><img src="image/solutions/icons/Frame7.svg" alt="" srcset="" />Carrers</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/invoice"><img src="image/solutions/icons/Frame8.svg" alt="" srcset="" /> Invoice</Link>
                      </NavDropdown.Item>
                      </div>

                      <div className="solution_image">
                      <div className="solution_image">
                      <div>
                        {/* <img src={manimg} alt="" srcSet="" className="w-50" /> */}
                      </div>
                          {/* <img src="/image/solutions/solution-nav.svg" alt="" srcSet="" /> */}
                      </div>
                      </div>
                    </div>
                  
                </NavDropdown>
                <NavLink to="/aboutus" className="nav-link">
                 About us
                </NavLink>
                <NavLink to="/blog" className="nav-link">
                  Blogs
                </NavLink>
              </Nav>

              <div className="logins-buttons">
                <Link
                  to="https://b2b.truxcargo.com/login"
                  
                >
                   <button className="outline-login " role="button">
                   Login
                   
                  </button>
                  
                </Link>
                <Link to="https://b2b.truxcargo.com/register/">
                  <button className=" button-reg" role="button">
                   Register for free
                    {/* <img src="/featured-icon/diagonal-arrow.png" alt="" /> */}
                  </button>
                </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
       
      </section>
    </>
  );
};

export default HomeNav;
