import React from "react";
// import { Link } from "react-router-dom";
import Helmet from "../components/HelmetTag";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AllCaseStudies from "../components/AllCaseStudies.js";
import '../assets/css/case-study.scss';
import NetbloomOG from "../assets/images/Netbloom-OG.jpg"
export default function CaseStudies() {

  document.body.classList.remove(
    "home",
    "single-blog",
    "single-case-study",
    "web-design",
    "seo",
    "ecommerce",
    "about",
    "location",
    "blog",
    "main-blog",
    "portfolio"
  );
  document.body.classList.add('case-study', 'main-case-study');

  return (
    <div className="case-study page-content">
       <Helmet
      pageTitle="Case Studies - Netbloom"
      title="Case Studies - Netbloom"
      description="Learn how online businesses find organic search marketing success with Netbloom. Learn the SEO best practices of companies through insightful SEO case studies."
      robots = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      locale="en_US"
      type="article"
      url="https://netbloom.co.nz/case-studies/"
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
      twtitle="Case Studies - Netbloom"
      twdescription="Learn how online businesses find organic search marketing success with Netbloom. Learn the SEO best practices of companies through insightful SEO case studies."
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
              <h1>Case Studies</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Typography color="text.primary">Case Studies</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec blog-section">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <AllCaseStudies/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}