import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Helmet from "../components/HelmetTag";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AllPortfolio from "../components/AllPortfolio.js";
import "../assets/css/portfolio.scss";
import { Button } from "@mui/material";
import NetbloomOG from "../assets/images/Netbloom-OG.jpg"
export default function Portfolio() {
  const [categoryFilter, setCategoryFilter] = useState("all");
 
  document.body.classList.remove(
    "home",
    "single-blog",
    "main-case-study",
    "case-study",
    "single-case-study",
    "web-design",
    "seo",
    "ecommerce",
    "about",
    "location",
    "blog",
    "main-blog",
    "location"
  );
  document.body.classList.add('portfolio');

  return (
    <div className="portfolio page-content">

<Helmet
      pageTitle="Netbloom: SEO Services in NZ | Guaranteed Results"
      title="Digital Marketing Services NZ | Digital Marketing Consultant | Netbloom"
      description="Netbloom is a digital marketing company in New Zealand. We specialise in innovative &amp; data-driven marketing strategies across SEO, web design and web development."
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
      twdescription="Netbloom is a digital marketing company in New Zealand. We specialise in innovative &amp; data-driven marketing strategies across SEO, web design and web development."
      twimage={NetbloomOG}
      twlabel1="Written by"
      twdata1="Jessa L"
      twlabel2="Time to read"
      twdata2="2 minutes"
      />
      <div className="banner">
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>Portfolio</h1>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator="›"
                className="breadcrumb"
              >
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Typography color="text.primary">Portfolio</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className="category-btn">
        <Button variant="contained" onClick={() => setCategoryFilter("all")}>
          All
        </Button>
        <Button
          variant="contained"
          onClick={() => setCategoryFilter("Web Design")}
        >
          Web Design
        </Button>
        <Button variant="contained" onClick={() => setCategoryFilter("SEO")}>
          SEO
        </Button>
      </div>
      <div className="default-sec portfolio-section">
        <div className="default-sec-overlay">
          <div className="default-sec-content fullwidth">
            <div className="default-sec-wrap">
              <AllPortfolio categoryFilter={categoryFilter} showingPost="all" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
