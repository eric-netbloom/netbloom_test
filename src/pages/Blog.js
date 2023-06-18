import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Helmet from "../components/HelmetTag";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Banner from "../components/Banner"
import Link from "@mui/material/Link";
import AllBlog from "../components/AllBlog.js";
import "../assets/css/blog.scss";
import { Button } from "@mui/material";
import NetbloomOG from "../assets/images/Netbloom-OG.jpg"
export default function Blog() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  document.body.classList.remove(
    "home",
    "single-blog",
    "case-study",
    "main-case-study",
    "single-case-study",
    "web-design",
    "seo",
    "ecommerce",
    "about",
    "location",
    "portfolio"
  );
  document.body.classList.add("blog", "main-blog");

  return (
    <div className="blog page-content">
      <Helmet
      pageTitle="Digital Marketing Blog - Netbloom"
      title="Digital Marketing Blog - Netbloom"
      description="Check out Netbloom's Digital Marketing blog. We talk about the importance of SEO and some of the best strategies to use."
      robots = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      locale="en_US"
      type="website"
      url="https://netbloom.co.nz/blog/"
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
      twtitle="Digital Marketing Blog - Netbloom"
      twdescription="Check out Netbloom's Digital Marketing blog. We talk about the importance of SEO and some of the best strategies to use."
      twimage={NetbloomOG}
      twlabel1="Written by"
      twdata1="Jessa L"
      twlabel2="Time to read"
      twdata2="2 minutes"
      />
       <Banner 
      pageTitle="Digital Marketing Blog"
      />
      <div className="default-sec blog-section">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <AllBlog categoryFilter={categoryFilter} showingPost="all" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
