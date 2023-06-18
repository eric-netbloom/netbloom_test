import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import Helmet from "../components/HelmetTag";
import "../assets/css/seo.scss";
import BannerLanding from "../components/BannerLanding";
import AllBlog from '../components/AllBlog';
import AllTestimonials from "../components/AllTestimonials.js";
import Faqs2 from "../components/Faqs2.js";
import ContactUsForm from "../components/CtaForm.js";
import Banner from "../components/Banner"
import CtaForm from "../components/CtaForm.js";
import Clients from "../components/Clients.js";
import NetbloomOG from "../assets/images/Netbloom-OG.jpg";
import bannerBg from "../assets/images/seo-bg.webp";
import phone from "../assets/images/phone.webp";
import { MdSearch, MdInsights, MdArrowRightAlt } from "react-icons/md";
import { TbTargetArrow, TbLink } from "react-icons/tb";
import { HiOutlineDocumentText, HiOutlineLightBulb } from "react-icons/hi";

const SEOService = () => {
  document.body.classList.remove(
    "home",
    "single-blog",
    "main-case-study",
    "case-study",
    "single-case-study",
    "web-design",
    "portfolio",
    "ecommerce",
    "about",
    "location",
    "blog",
    "main-blog",
    "location"
  );
  document.body.classList.add("seo");

  return (
    <div className='seo page-content'>
      <Helmet
      pageTitle="SEO Services NZ | Search Engine Optimisation | Netbloom"
      title="SEO Services NZ | Affordable SEO Specialist | Netbloom"
      description="New Zealand&#039;s finest SEO services utilise trust &amp; authority metrics to deliver measurable results. We offer proven SEO strategies for Auckland & across NZ."
      robots = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      locale="en_US"
      type="article"
      url="https://netbloom.co.nz/seo-services-nz/"
      site_name="Netbloom"
      updated_time="2023-01-17T06:27:38+00:00"
      image ={NetbloomOG}
      imgsecure_url={NetbloomOG}
      imgwidth="1200"
      imgheight="627"
      imgalt="New Zealand SEO Services"
      imgtype="image/jpeg"
      artpublished_time="2022-08-22T01:04:07+00:00"
      artmodified_time="2023-01-17T06:27:38+00:00"
      twcard="summary_large_image"
      twtitle="SEO Services NZ | Affordable SEO Specialist | Netbloom"
      twdescription="New Zealand&#039;s finest SEO services utilise trust & authority metrics to deliver measurable results. We offer proven SEO strategies for Auckland & across NZ."
      twimage={NetbloomOG}
      twlabel1="Written by"
      twdata1="Jessa L"
      twlabel2="Time to read"
      twdata2="2 minutes"
      />
      <div className="banner bn-landing" style={{backgroundImage: `url(${bannerBg})`}}>
        <BannerLanding 
          pageTitle='SEO Project Support and Consultancy - NZ & AU'
          subHeading = 'Quality Support coupled with a Holistic SEO Approach'
          btnText = 'Schedule a free consultation'
        />
      </div>
      <div className='clients-box default-sec-content' data-aos="fade">
        <div className='shadow-box center'>
          <p>We grow businesses of all shapes and sizes</p>
          <Clients />
        </div>
      </div>
      <Grid container className='services-wrap sticky-wrap' columnSpacing={0}>
        <Grid item md={4} sm={4} xs={12} className='con-left sticky' data-aos="fade-right">
          <h2>The place for all things SEO in New Zealand</h2>
          <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus donec consectetuer ligula vulputate.</p>
          <button className='btn'>Schedule a free consultation</button>
        </Grid>
        <Grid item md={8} sm={8} xs={12} className='con-right'>
          <div className='center'>
            <img src={phone} alt="localseo" />
          </div>
          <Grid container spacing={6} className='seo-for'>
            <Grid item md={6} sm={6} xs={6}>
              <div className='seo-for-item'>
                <h3>Local SEO</h3>
                <p>Local businesses, like a plumber or a boutique store, need more customised SEO services that help them get discovered by customers in the area</p>
                {/* <Link to="#" className="btn outline" title="Learn more">Learn more <MdArrowRightAlt/> </Link> */}
              </div>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <div className='seo-for-item'>
                <h3>SEO for MSMEs</h3>
                <p>Micro, small and medium businesses often don’t have a sizable budget for organic visibility, and need their dollars to go a long way</p>
                {/* <Link to="#" className="btn outline" title="Learn more">Learn more <MdArrowRightAlt/> </Link> */}
              </div>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <div className='seo-for-item'>
                <h3>SEO for enterprises</h3>
                <p>Larger companies need SEO support and at times internal training to ensure they stay at the top of search engine results at all times</p>
                {/* <Link to="#" className="btn outline" title="Learn more">Learn more <MdArrowRightAlt/> </Link> */}
              </div>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <div className='seo-for-item'>
                <h3>International SEO</h3>
                <p>If your business is spread across countries or focused outside of New Zealand, your website will need to be optimised for the respective country or countries</p>
                {/* <Link to="#" className="btn outline" title="Learn more">Learn more <MdArrowRightAlt/> </Link> */}
              </div>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <div className='seo-for-item'>
                <h3>Citations & backlinking</h3>
                <p>An important component of organic visibility is offsite SEO, which includes building directory links and quality backlinks on other websites to bolster your domain authority</p>
                {/* <Link to="#" className="btn outline" title="Learn more">Learn more <MdArrowRightAlt/> </Link> */}
              </div>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <div className='seo-for-item'>
                <h3>eCommerce SEO</h3>
                <p>eCommerce businesses can harness the power of SEO to improve both conversions and overall basket size of orders</p>
                {/* <Link to="#" className="btn outline" title="Learn more">Learn more <MdArrowRightAlt/> </Link> */}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className='default-sec darkblueBg our-services'>
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <Grid container className="textWhite" rowSpacing={4} columnSpacing={4}>
                <Grid item xs={12} className="inner-text-point-left center" >
                  <h3>Our <span className='textGreen'>SEO</span> Services</h3>
                  <p className='textWhite sub-title'>Customized and Tailor-fit SEO Solutions to Cater to your Business Needs.</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='services-item'>
                  <div className='services-item-wrap'>
                    <MdInsights />
                    <h4>Analytics</h4>
                    <p className="textWhite">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='services-item'>
                <div className='services-item-wrap'>
                    <MdSearch />
                    <h4>Site Audit</h4>
                    <p className="textWhite">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='services-item'>
                  <div className='services-item-wrap'>
                    <TbTargetArrow />
                    <h4>Page Optimization</h4>
                    <p className="textWhite">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='services-item'>
                  <div className='services-item-wrap'>
                    <HiOutlineDocumentText />
                    <h4>Content Marketing</h4>
                    <p className="textWhite">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='services-item'>
                  <div className='services-item-wrap'>
                    <TbLink />
                    <h4>Link Building</h4>
                    <p className="textWhite">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='services-item'>
                  <div className='services-item-wrap'>
                    <HiOutlineLightBulb />
                    <h4>Strategies</h4>
                    <p className="textWhite">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                  </div>
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
      <Faqs2 />
      <div className='default-sec'>
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <h2 className='title'>Latest Blog Posts</h2>
              <AllBlog categoryFilter={"all"} showingPost={"limited"} />
            </div>
          </div>
        </div>
      </div>
      <CtaForm />
    </div >
  )
}

export default SEOService