import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Helmet from '../components/HelmetTag';
import Logo from "../assets/Logo-1.webp";
import AllTestimonials from "../components/AllTestimonials.js";
import AllCaseStudiesCarousel from "../components/AllCaseStudiesCarousel.js";
import CtaForm from "../components/CtaForm.js";
import Faqs2 from "../components/Faqs2.js";
import ModalChecklist from "../components/ModalChecklist.jsx";
import NetbloomOG from "../assets/images/Netbloom-OG.jpg";
import bannerBg from "../assets/images/home-banner-bg.webp";
import whyBg from "../assets/images/background.webp";
import vid from "../assets/images/vid-placeholder.webp";
import google from "../assets/images/google reviews.webp";
import el9 from "../assets/elements/Polygon 4 (2).webp";
import el10 from "../assets/elements/Polygon 3 (2).webp";
import el11 from "../assets/elements/Polygon 7.webp";
import el12 from "../assets/elements/Polygon 12.webp";
import el13 from "../assets/elements/Polygon 9.webp";
import el15 from "../assets/elements/Polygon 8.webp";
import deadline from "../assets/icons/deadline.webp";
import computer from "../assets/icons/computer.webp";
import smartphone from "../assets/icons/smartphone.webp";
import magnifying from "../assets/icons/magnifying-glass.webp";
import Slogos1 from "../assets/images/solution-logo-1.png";
import Slogos2 from "../assets/images/solution-logo-2.png";
import Slogos3 from "../assets/images/solution-logo-3.png";
import Slogos4 from "../assets/images/solution-logo-4.png";
import Slogos5 from "../assets/images/solution-logo-5.png";
import Slogos6 from "../assets/images/solution-logo-6.png";
import Slogos7 from "../assets/images/solution-logo-7.png";
import Slogos8 from "../assets/images/solution-logo-8.png";
import Slogos9 from "../assets/images/solution-logo-9.png";
import Slogos10 from "../assets/images/solution-logo-10.png";
import Slogos11 from "../assets/images/solution-logo-11.png";
import { FaLightbulb, FaChartBar, FaPaintBrush, FaHandHoldingUsd } from "react-icons/fa";

export default function Home() {
  document.body.classList.remove(
    "blog",
    "main-blog",
    "single-blog",
    "case-study",
    "main-case-study",
    "single-case-study",
    "seo",
    "web-design",
    "about",
    "ecommerce",
    "contact",
    "location"
  );
  document.body.classList.add("home");

  return (
    <div className="home page-content">
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
      <div className="banner" style={{backgroundImage: `url(${bannerBg})`}}>
        <div className="banner-overlay">
          <div className="main-content" data-aos="fade">
            <div className="banner-con">
              <h1>Business Smells the Sweetest when it blooms<span className="textGreen">.</span></h1>
              <p>
                Reach Your Target Audience & Increase Your Enterprise Value With
                High-Impact <span className="textGreen">SEO Services & Converting Web Design</span>
              </p>
              <div className="flex-left btns">
                <Link to="#" className="greenButton btn">
                  Get a Quote
                </Link>
                <Link
                  to="https://www.google.com/search?q=netbloom&rlz=1C1ONGR_enPH1012PH1012&oq=netbloom&aqs=chrome..69i57j46i10i131i433i512j69i60l3j69i61j69i65l2.1752j0j7&sourceid=chrome&ie=UTF-8#lrd=0xa82ea9ecc91883d3:0xe045a8ae841b57ff,1,,,,"
                  target="_blank"
                  title="Netbloom Google Reviews"
                  rel="noreferrer"
                >
                  <img src={google} alt="Google Reviews" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec about">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content" data-aos="fade">
            <div className="default-sec-wrap">
              <Grid
                container
                rowSpacing={{ xs: 2, sm: 2, md: 0 }}
                columnSpacing={{ xs: 8, sm: 8, md: 8 }}
                className="stretch"
              >
                <Grid item xs={12} sm={12} md={6}>
                  <img src={vid} alt="netbloom video" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="flex-v-center">
                  <h2>We know how to make your Business <span className="textGreen">Bloom.</span></h2>
                  {/* <h3 className="textGreen">Praesent dapibus neque id</h3> */}
                  <p>Growing a business isn't a simple thing. In fact, it could be quite a complex process. Good thing Netbloom is here to remove the complexities and move your business on to the festivities! Partner with a company that has a proven track record of online success and get your brand the organic visibility it needs! Get in touch with us now, so we can organise your SEO strategies and get quality leads going your way.</p>
                  <Link to="#" className="greenButton btn">Get a Quote</Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="why-trust center" style={{backgroundImage: `url(${whyBg})`}}>
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content" data-aos="fade">
            <div className="default-sec-wrap">
              <h2 className="whiteTxt">Why Trust <span className="textGreen">Netbloom</span> For Your Digital Operations?</h2>
              <p className="whiteTxt">Quality Leads. <span className="textGreen">Better Conversions.</span></p>
              <Grid
                container
                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                className="stretch grid"
              >
                <Grid item xs={12} sm={12} md={6} className="stretch">
                  <div className="grid-item">
                    <FaLightbulb className="icons textGreen"/>
                    <h4>Work With Technical SEO Masters</h4>
                    <p>
                      Thanks to their experience as Web Developers, our Netbloom
                      professionals can take your technical SEO game to the next
                      level, working with a wide range of online platforms,
                      instead of being limited to the basics, like other
                      marketing agencies.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="stretch">
                  <div className="grid-item">
                    <FaChartBar className="icons textGreen"/>
                    <h4>Access Personalised Dashboard Reports</h4>
                    <p>
                      The more you know about your business, the better you can
                      operate to maximise its value. Connected to multiple data
                      sources, our dashboard reports will offer you all the
                      analytics you need, including keyword position tracking,
                      phone calls from Google Maps, Google analytics, and many
                      more.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="stretch">
                  <div className="grid-item">
                    <FaPaintBrush className="icons textGreen"/>
                    <h4>Enjoy A Service Package Tailored To You</h4>
                    <p>
                      Every customer is unique, and so is their business. At
                      Netbloom, we customise our services to your requirements,
                      dreams, and goals, offering fully personalised packages
                      designed to respond to your specific needs.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="stretch">
                  <div className="grid-item">
                    <FaHandHoldingUsd className="icons textGreen"/>
                    <h4>Find The Solution That Fits Your Budget</h4>
                    <p>
                      Why waste your money on overpriced marketing services that
                      don’t work? Benefit from our flexible pricing offers,
                      choose the package that suits your budget criteria and
                      save valuable time and money.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <AllTestimonials />
      <div className="default-sec case-studies lightGrayBg">
        <div className="default-sec-overlay">
          <div className="default-sec-content" data-aos="fade">
            <div className="default-sec-wrap">
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 6, sm: 6, md: 6 }}
                className="content-top flex-center"
              >
                <Grid item xs={12} sm={12} md={3}>
                  <div className="grid-item left-con">
                    <Link to="/">
                      <img src={Logo} alt="Netbloom Logo" className="logo" />
                    </Link>
                    <h2>Case Studies</h2>
                    <p className="sub-head textGreen">Proven results.</p>
                    <p>
                      We're proud to deliver results to a range of different
                      industries.
                    </p>
                    <Link to="/case-studies" className="greenButton btn">
                      See more Case Studies
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                  <div className="grid-item right-con">
                    <AllCaseStudiesCarousel />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec ready left">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content max1200" data-aos="fade">
            <div className="default-sec-wrap">
              <Grid
                container
                rowSpacing={2}
                columns={{ xs: 6, sm: 6, md: 12 }}
                columnSpacing={{ xs: 6, sm: 6, md: 6 }}
                className="content-top"
              >
                <Grid item xs={6}>
                  <div className="grid-item left-con">
                    <h2>
                      Are You Ready To Establish Your <span className="textGreen">Presence</span> In The Digital
                      World?
                    </h2>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="grid-item right-con">
                    <p>
                      Now you don’t have to settle for inefficient SEO plans
                      that fail to deliver the flow of leads you wish or
                      short-term solutions that don’t align with your business
                      goals. At Netbloom, we use industry tools tailored to your
                      brand identity to help you grow your business and build a
                      robust online presence.
                    </p>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                rowSpacing={2}
                className="content-bot flex-center"
              >
                <Grid item xs={12} sm={6} md={3} className="center flex-center">
                  <div className="grid-item">
                    <img src={deadline} alt="Fast" />
                    <h4 className="darkblueBgTxt">Fast</h4>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="center flex-center">
                  <div className="grid-item">
                    <img src={computer} alt="Modern" />
                    <h4 className="darkblueBgTxt">Modern</h4>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="center flex-center">
                  <div className="grid-item">
                    <img src={smartphone} alt="Mobile-Friendly" />
                    <h4 className="darkblueBgTxt">Mobile-Friendly</h4>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="center flex-center">
                  <div className="grid-item">
                    <img src={magnifying} alt="Optimised for Search" />
                    <h4 className="darkblueBgTxt">Optimised for Search</h4>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="elements">
            <img className="el-9" src={el9} alt="Polygon" />
            <img className="el-10" src={el10} alt="Polygon" />
            <img className="el-11" src={el11} alt="Polygon" />
          </div>
        </div>
      </div>
      <div className="default-sec checklist left">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content" data-aos="fade">
            <div className="default-sec-wrap bluePurpleGradient">
              <Grid
                container
                columns={{ xs: 6, sm: 6, md: 12 }}
                columnSpacing={{ xs: 6, sm: 6, md: 6 }}
                className="content"
              >
                <Grid item xs={6}>
                  <div className="grid-item left-con">
                    <h2>Take Your SEO To New Heights With Our <span className="textGreen">Free Checklist</span></h2>
                    <ModalChecklist/>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="grid-item right-con">
                    <p>
                      Want to enhance your SEO knowledge and uncover more
                      efficient optimisation tactics? Fill out our form and
                      receive our free SEO checklist! This has been developed to
                      introduce you to the world of search engine optimisation
                      and help you use SEO-focused initiatives to drive traffic
                      to your website, increasing revenue.
                    </p>
                  </div>
                </Grid>
              </Grid>
              <div className="elements">
                <img className="el-13" src={el13} alt="Polygon" />

                <img className="el-15" src={el15} alt="Polygon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec solutions left">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content max1200" data-aos="fade">
            <div className="default-sec-wrap">
              <Grid
                container
                rowSpacing={2}
                columns={{ xs: 6, sm: 6, md: 12 }}
                columnSpacing={{ xs: 6, sm: 6, md: 6 }}
                className="content-top flex-center"
              >
                <Grid item xs={6}>
                  <div className="grid-item left-con">
                    <h2>
                      <span className="textGreen">Solutions</span> delivered using the best tools on
                      the best platforms
                    </h2>
                    <Link to="/portfolio" className="greenButton btn">
                      Our Portfolio
                    </Link>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="grid-item right-con">
                    <div className="solution-logo-main">
                      <div className="solution-logo-inner">
                        <div className="solution-logo-item datastudio-logo">
                          <a
                            href="https://datastudio.withgoogle.com"
                            target={"_blank"} rel="noreferrer"
                          >
                            <img src={Slogos1} alt="Multiple-logos" />
                          </a>
                        </div>
                        <div className="solution-logo-item ahrefs-logo">
                          <a href="https://ahrefs.com" target={"_blank"} rel="noreferrer">
                            <img src={Slogos2} alt="Multiple-logos" />
                          </a>
                        </div>
                        <div className="solution-logo-item analytics-logo">
                          <a
                            href="https://analytics.google.com/analytics/web/provision/#/provision"
                            target={"_blank"} rel="noreferrer"
                          >
                            <img src={Slogos3} alt="Multiple-logos" />
                          </a>
                        </div>
                        <div className="solution-logo-item console-logo">
                          <a
                            href="https://search.google.com/search-console/about"
                            target={"_blank"} rel="noreferrer"
                          >
                            <img src={Slogos4} alt="Multiple-logos" />
                          </a>
                        </div>
                        <div className="solution-logo-item semrush-logo">
                          <a href="https://www.semrush.com" target={"_blank"} rel="noreferrer">
                            <img src={Slogos5} alt="Multiple-logos" />
                          </a>
                        </div>
                        <div className="solution-logo-item shopify-logo">
                          <a href="https://www.shopify.com" target={"_blank"} rel="noreferrer">
                            <img src={Slogos6} alt="Multiple-logos" />
                          </a>
                        </div>
                        <div className="solution-logo-item silverstripe-logo">
                          <a
                            href="https://www.silverstripe.org"
                            target={"_blank"} rel="noreferrer"
                          >
                            <img src={Slogos7} alt="Multiple-logos" />
                          </a>
                        </div>
                        <div className="solution-logo-item squarespace-logo">
                          <a
                            href="https://www.squarespace.com"
                            target={"_blank"} rel="noreferrer"
                          >
                            <img src={Slogos8} alt="Multiple-logos" />
                          </a>
                        </div>
                        <div className="solution-logo-item woocommerce-logo">
                          <a href="https://woocommerce.com" target={"_blank"} rel="noreferrer">
                            <img src={Slogos9} alt="Multiple-logos" />
                          </a>
                        </div>
                        <div className="solution-logo-item wordpress-logo">
                          <a href="https://wordpress.com" target={"_blank"} rel="noreferrer">
                            <img src={Slogos10} alt="Multiple-logos" />
                          </a>
                        </div>
                        <div className="solution-logo-item yoast-logo">
                          <a href="https://yoast.com" target={"_blank"} rel="noreferrer">
                            <img src={Slogos11} alt="Multiple-logos" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="elements">
            <img className="el-12" src={el12} alt="Polygon" />
          </div>
        </div>
      </div>
      <Faqs2 />
      <CtaForm />
    </div>
  );
}
