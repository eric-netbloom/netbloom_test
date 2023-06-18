import React from "react";
// import { Link } from "react-router-dom";
import Helmet from "../components/HelmetTag";
import { Grid, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import '../assets/css/case-study.scss';
import Clients from "../components/Clients.js";
import AllTestimonials from "../components/AllTestimonials.js";
import CtaForm from "../components/CtaForm.js";
import NetbloomOG from "../assets/images/Netbloom-OG.jpg"
import vid from "../assets/images/vid-placeholder.webp";
import { FaRegHandshake  } from "react-icons/fa";
import { HiOutlineUserGroup  } from "react-icons/hi";
import { AiOutlineCheckCircle  } from "react-icons/ai";
import { TbReportSearch  } from "react-icons/tb";

export default function About() {

  document.body.classList.remove(
    "home",
    "blog",
    "main-blog",
    "single-blog",
    "case-study",
    "main-case-study",
    "single-case-study",
    "web-design",
    "seo",
    "location",
    "ecommerce",
    "portfolio"
  );
  document.body.classList.add('about');

  return (
    <div className="case-study page-content">
    <Helmet
      pageTitle="Digital Marketing Company New Zealand - Netbloom"
      title="Digital Marketing Services NZ | Digital Marketing Consultant | Netbloom"
      description="Netbloom is a digital marketing company in New Zealand. We specialise in innovative &amp; data-driven marketing strategies across SEO, web design and web development."
      robots = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      locale="en_US"
      type="website"
      url="https://netbloom.co.nz/about-us/"
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
              <h1>About Us</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Typography color="text.primary">About</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <Grid container columnSpacing={6}>
                <Grid item md={6} sm={6} xs={12}>
                  <img src={vid} alt="netbloom video" />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <h2><span className="textGreen">Netbloom</span> – Helping Business in NZ and AU</h2>
                  <p><strong>Netbloom</strong> is a Digital Marketing company in New Zealand founded in 2019 by our Director and CEO Matthew Jeffery. We are a mutli-branch business that was built with a vision to provide access to outstanding SEO and Web Development services that can cater to clients all across New Zealand & Australia.
                    <br/>Our mission is to help small to medium businesses find their place in the digital world using reliable, researched, systematic and proven methods to boost their online presence, grow their brand, and put their business in the map.
                    <br/>Our expert team of Digital Marketing and Web Development professionals are armed with decades of experience in formulating tailor-fit SEO Strategies using only the best and the most effective industry tools to deliver quality results and online success.</p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec padd-bot180 darkblueBg">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap max1200">
              <h2 className="textGreen">How We Help</h2>
              <p>At Netbloom, we are experts in search engine optimisation and web development. Our web experience gives us an advantage over other SEO companies as we understand the technical side of SEO. This is fundamental to a successful SEO strategy as aspects like page speed and security are essential and Google places high value on them when ranking websites.</p>
              <p>However, we don’t stop at ranking a website; we also focus on converting visitors to customers. Our expert user experience knowledge helps improve the ease with which visitors interact with your website.</p>
              <p>We achieve this by tracking user patterns which help us understand what elements work and what don’t on the site, increasing your conversion rate.</p>
              <button className='btn'>Schedule a free consultation</button>
            </div>
          </div>
        </div>
      </div>
      <div className='clients-box default-sec-content' data-aos="fade">
        <div className='shadow-box center'>
          <p>We grow businesses of all shapes and sizes</p>
          <Clients />
        </div>
      </div>
      <div className="default-sec what">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap max900">
              <Grid item xs container direction="column" alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={12} md={12}>
                    <h2 className="mb-40">What's In It For You?</h2>
                </Grid>
              </Grid>
              <Grid item xs={12} className="GrayRound40" justifyContent="center" container spacing={2}>  
                <Grid item  xs={12} sm={6} md={6}>
                  <h4><AiOutlineCheckCircle/> Generate Consistent Revenue</h4>
                </Grid>
                <Grid item  xs={12} sm={6} md={6}>
                   <h4><AiOutlineCheckCircle/>Convert Site Users into Customers</h4>
                </Grid>
                <Grid item  xs={12} sm={6} md={6}>
                   <h4><AiOutlineCheckCircle/>Increase Conversion Rates</h4>
                </Grid>
                <Grid item  xs={12} sm={6} md={6}>
                   <h4><AiOutlineCheckCircle/>Increase Website Traffic</h4>
                </Grid>
                <Grid item  xs={12} sm={6} md={6}>
                   <h4><AiOutlineCheckCircle/>Rank Better in Search  Results</h4>
                </Grid>
                <Grid item  xs={12} sm={6} md={6}>
                   <h4><AiOutlineCheckCircle/>Improve User Experience</h4>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className='default-sec darkblueBg our-services'>
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <Grid container className="textWhite" rowSpacing={4} columnSpacing={12}>
                <Grid item xs={12} className="inner-text-point-left center" >
                  <h3>Our <span className='textGreen'>SEO</span> Services</h3>
                  <p className='textWhite sub-header'>Customized and Tailor-fit SEO Solutions to Cater to your Business Needs.</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <HiOutlineUserGroup/>
                  <h4>Client-Focused</h4>
                  <p className="textWhite">Putting your goals and interests first. Tailor-fit and personalised solutions for your brand using only the best up-to-date tools. One-on-one business coaching and advisory.</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FaRegHandshake/>
                  <h4>Reliablility</h4>
                  <p className="textWhite">Consistent performance from start to finish with set timelines and milestones. Tasks and deliverables always on-schedule.</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TbReportSearch/>
                  <h4>Transparency</h4>
                  <p className="textWhite">Open, honest, and straightforward operations. Easy access to personalised and comprehensive reports, strategies and analytics. Clear communication. No hidden fees.</p>
                </Grid>
                <Grid item xs={12} className="inner-text-point-left center" >
                  <button className='btn'>Schedule a free consultation</button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <AllTestimonials />
      <CtaForm />
    </div>
  );
}