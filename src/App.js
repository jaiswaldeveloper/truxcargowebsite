import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import TrackingDetailsPage from "./components/TrackingDetails";
import BlogList from "./pages/BlogList";

const Footer = lazy(() => import("./components/Footer"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServicesList = lazy(() => import("./pages/ServicesList"));
// const ServiceDetail = lazy(() => import("./components/ServiceDetail"));
const Faq = lazy(() => import("./pages/Faq"));
const Media = lazy(() => import("./pages/Media"));
const Invoice = lazy(() => import("./pages/Invoice"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const RefundandCancellation = lazy(() =>
  import("./pages/RefundandCancellation")
);
const TermandCondition = lazy(() => import("./pages/TermandCondition"));
const Carrer = lazy(() => import("./pages/Carrer"));
const NdrMangement = lazy(() => import("./pages/NdrMangement"));
const WeightReconciliation = lazy(() => import("./pages/WeightReconciliation"));
const CodRemittance = lazy(() => import("./pages/CodRemittance"));
const PickupLocation = lazy(() => import("./pages/PickupLocation"));
const MultipalPartner = lazy(() => import("./pages/MultipalPartner"));
const ApiIntegration = lazy(() => import("./pages/ApiIntegration"));
// const BlogList = lazy(() => import('./pages/BlogList'));
const Blogdetails = lazy(() => import("./pages/Blogdetails"));
// const TrackPage = lazy(() => import('./components/TrackPage'));
// const TrackingDetailsPage = lazy(() => import('./components/TrackingDetails'));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="loading-main">
            <div class="custom-loader"></div>
          </div>
        }
      >
       
       

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/Service" element={<ServicesList />} />
          {/* <Route path="/serviceDetail/:id" element={<ServiceDetail />} /> */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/media" element={<Media />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route
            path="/refundandcancellation"
            element={<RefundandCancellation />}
          />
          <Route path="/termandcondition" element={<TermandCondition />} />
          <Route path="/Carrer" element={<Carrer />} />
          <Route path="/ndr_managment" element={<NdrMangement />} />
          <Route
            path="/weightReconciliation"
            element={<WeightReconciliation />}
          />
          <Route path="/cod_remittance" element={<CodRemittance />} />
          <Route path="/multiple_pickup" element={<PickupLocation />} />
          <Route path="/Multipal_Partner" element={<MultipalPartner />} />
          <Route path="/api_Integration" element={<ApiIntegration />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blogPost/:id" element={<Blogdetails />} />
          {/* <Route path="/trackpage" element={<TrackPage />} /> */}
          <Route path="/tracking_details/:trackingNo" element={<TrackingDetailsPage />}
          />
        </Routes>

        <Footer />
       
      </Suspense>
      
    </BrowserRouter>
  );
};

export default App;
