import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Helmet from "./components/HelmetTag";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.js";
import SingleBlog from "./pages/SingleBlog.js";
import AllBlog from "./components/AllBlog.js";
import AllTestimonials from "./components/AllTestimonials.js";
import CaseStudies from "./pages/CaseStudies.js";
import AllCaseStudies from "./components/AllCaseStudies.js";
import AllCaseStudiesCarousel from "./components/AllCaseStudiesCarousel.js";
import SingleCaseStudy from "./pages/SingleCaseStudy.js";
import Faqs from "./components/Faqs.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./assets/css/global.scss";
import "./assets/js/common.js";
import SEOService from "./pages/SEOService.jsx";
import WebDesign from "./pages/WebDesign.jsx";
import AboutUs from "./pages/About.jsx";
import EcommercePage from "./pages/EcommercePage.jsx";
import PortfolioPage from "./pages/Portfolio.jsx";
import ContactUs from "./pages/ContactUs.js";
import NetbloomOG from "./assets/images/Netbloom-OG.jpg"
import Location from "./pages/Location.jsx";
import CarePlan from "./pages/CarePlan.jsx";
import { Typography } from "@mui/material";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  document.body.classList.add("page");
  // console.log = console.warn = console.error = () => {};
  return (
    <div className="App">
      <Helmet
      pageTitle="Netbloom: SEO Services in NZ | Guaranteed Results"
      title="Digital Marketing Services NZ | Digital Marketing Consultant | Netbloom"
      description="One of the leading Digital Marketing Services in NZ. Netbloom offers advanced digital marketing solutions for all your digital channels. Get a free consultation today!"
      robots = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      locale="en_US"
      type="website"
      url="https://netbloom.co.nz/"
      site_name="Netbloom"
      updated_time="2023-01-17T06:27:38+00:00"
      image ={NetbloomOG}
      imgsecure_url={NetbloomOG}
      imgwidth="1200"
      imgheight="627"
      imgalt="seo"
      imgtype="image/jpeg"
      artpublished_time="2022-08-22T01:04:07+00:00"
      artmodified_time="2023-01-17T06:27:38+00:00"
      twcard="summary_large_image"
      twtitle="Digital Marketing Services NZ | Digital Marketing Consultant | Netbloom"
      twdescription="One of the leading Digital Marketing Services in NZ. Netbloom offers advanced digital marketing solutions for all your digital channels. Get a free consultation today!"
      twimage={NetbloomOG}
      twlabel1="Written by"
      twdata1="Jessa L"
      twlabel2="Time to read"
      twdata2="2 minutes"
      />
      <Router>
        <ScrollToTop />
        <Header />
        <Routes forceRefresh={true}>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="about-us" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<AllBlog />} />
          <Route element={<SingleBlog />} path="/blog/:slug" />
          <Route element={<AllTestimonials />} path="/testimonials" />
          <Route element={<CaseStudies />} path="/case-studies" />
          <Route element={<AllCaseStudies />} />
          <Route element={<AllCaseStudiesCarousel />} />
          <Route element={<SingleCaseStudy />} path="/case-study/:slug" />
          <Route element={<SEOService />} path="/seo-services-nz" />
          <Route element={<WebDesign />} path="/web-design-nz" />
          <Route element={<Location />} path="/:slug" />
          <Route element={<CarePlan />} path="/care-plan" />
          <Route element={<Faqs />} />
          <Route element={<AboutUs />} path="/about-us"/>
          <Route element={<EcommercePage />} path="/e-commerce-website-nz"/>
          <Route element={<PortfolioPage />} path="/portfolio"/>
          <Route element={<ContactUs />} path="/contact-us"/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
