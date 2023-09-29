import React from "react";
// import Aboutus from './Aboutus';
import HeroBanner from "../components/HeroBanner";
import HeroCard from "../components/HeroCard";
import HeroProcess from "../components/HeroProcess";
import PartnerSlider from "../components/PartnerSlider";
import Testimonials from "../components/Testimonials";

// import HeroAir from './HeroAir';
import RateCalculator from "../components/RateCalculator";
import Integrations from "../components/Integrations";
import ClientlogoImage from "../components/ClientlogoImage";
import OrderStatus from "../components/OrderStatus";
import HeroSpecification from "../components/HeroSpecification";
import ShipingPartners from "../components/ShipingPartners";
import ServicesSlider from "../components/ServicesSlider";
import Dashboard from "../components/Dashboard";
import BenefitsCustomer from "../components/BenefitsCustomer";
import NewsLetter from "../components/NewsLetter";
import LatestThreeBlogs from "../components/LatestThreeBlogs";

import ConversionSlider from "../components/ConversionSlider";
import ServicesComponent from "../components/ServicesComponent";
import HomeNav from "../components/HomeNav";

// import BlogList from "../pages/BlogList";

const HomePage = () => {
  const newsletterProps = {
    background: "linear-gradient( 140deg, rgb(185 150 232), rgb(175 184 228), rgb(104 191 139)",
    content: "Be in the know",
    paragraph: "Stay informed about all developments and product updates at Truxcargo"
    // backgroundImage,
    // content: 'Subscribe to our newsletter for the latest updates!',
  };
  return (
    <>
     <HomeNav />
      <HeroBanner />
      <ShipingPartners />
      <HeroProcess />
      <OrderStatus />
      <ServicesComponent />
      <Dashboard />
      <Integrations />
      <RateCalculator />
      <BenefitsCustomer />
      <ConversionSlider />
      <HeroCard />
      <ClientlogoImage />
      <Testimonials />
      <LatestThreeBlogs />
      <NewsLetter {...newsletterProps} />
    </>
  );
};

export default HomePage;
