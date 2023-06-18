import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import Helmet from "../components/HelmetTag";
import "../assets/css/care.scss";
import AllBlog from '../components/AllBlog';
import AllTestimonials from "../components/AllTestimonials.js";
import Faqs2 from "../components/Faqs2.js";
import CtaForm from "../components/CtaForm.js";
import NetbloomOG from "../assets/images/Netbloom-OG.jpg";
import phone from "../assets/images/phone.webp";
import google from "../assets/images/google reviews.webp";
import { AiOutlineCloudServer, AiOutlineQuestionCircle, AiFillCheckCircle, AiOutlineCloseCircle} from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { MdSpeed, MdSupport } from "react-icons/md";


const CarePlan = () => {
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
    "location",
    "seo"
  );
  document.body.classList.add("care");

  return (
    <div className='care page-content'>
      <Helmet
      pageTitle="Website Care Plan NZ | Search Engine Optimisation | Netbloom"
      title="Website Care Plan NZ | Affordable SEO Specialist | Netbloom"
      description="New Zealand&#039;s finest SEO services utilise trust &amp; authority metrics to deliver measurable results. We offer proven SEO strategies for Auckland & across NZ."
      robots = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      locale="en_US"
      type="article"
      url="https://netbloom.co.nz/care-plan/"
      site_name="Netbloom"
      updated_time="2023-01-17T06:27:38+00:00"
      image ={NetbloomOG}
      imgsecure_url={NetbloomOG}
      imgwidth="1200"
      imgheight="627"
      imgalt="New Zealand Website Care Plan"
      imgtype="image/jpeg"
      artpublished_time="2022-08-22T01:04:07+00:00"
      artmodified_time="2023-01-17T06:27:38+00:00"
      twcard="summary_large_image"
      twtitle="Website Care Plan NZ | Affordable SEO Specialist | Netbloom"
      twdescription="New Zealand&#039;s finest SEO services utilise trust & authority metrics to deliver measurable results. We offer proven SEO strategies for Auckland & across NZ."
      twimage={NetbloomOG}
      twlabel1="Written by"
      twdata1="Jessa L"
      twlabel2="Time to read"
      twdata2="2 minutes"
      />
      <div className="banner">
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con center">
              <h1>Website <span className='textGreen'>Care</span> Plan</h1>
              <p className='textWhite'>Morbi in sem quis dui placerat ornare</p>
              <Link to="#" className="greenButton btn">Get Started</Link>
              <img src={google} alt="Google Reviews" style={{display: 'block', margin: '20px auto 0 auto'}}/>
            </div>
          </div>
        </div>
      </div>
      <div className='default-sec brief'>
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <Grid container rowSpacing={8} className='con-right'>
                <Grid item md={6} sm={6} xs={12}>
                  <img src={phone} alt="localseo" />
                </Grid>
                <Grid item md={6} sm={6} xs={12} className='flex-v-center content' data-aos="fade-right">
                  <h2>Website Support</h2>
                  <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus donec consectetuer ligula vulputate.</p>
                  <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                  <button className='btn'>Schedule a free consultation</button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className='default-sec inclusions darkblueBg'>
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <Grid container>
                <Grid item md={12} sm={12} xs={12}>
                  <h2 className='center textGreen'>Our website care plans includes:</h2>
                </Grid>
                <Grid item md={3} sm={6} xs={12} className='inclusions-item'>
                  <AiOutlineCloudServer/>
                  <h3>Powerful hosting</h3>
                  <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                </Grid>
                <Grid item md={3} sm={6} xs={12} className='inclusions-item'>
                  <TbReport/>
                  <h3>Detailed reports</h3>
                  <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                </Grid>
                <Grid item md={3} sm={6} xs={12} className='inclusions-item'>
                  <MdSpeed/>
                  <h3>Speed increase</h3>
                  <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                </Grid>
                <Grid item md={3} sm={6} xs={12} className='inclusions-item'>
                  <MdSupport/>
                  <h3>Support time</h3>
                  <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className='default-sec pricing-plan lightGrayBg'>
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap center">
              <p className='sub-head textGreen'>WEB SOLUTIONS FOR ANY BUSINESS</p>
              <h2 className='title'>Web Care Plans & Pricing</h2>
              <Grid container className='plan-table desktop'>
                <Grid item md={4.5} sm={4.5} xs={4.5} className='right service plan-table-col'>
                  <ul>
                    <li></li>
                    <li></li>
                    <li>No Annual Contract 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Managed Hosting 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Premium Licensing 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Enterprise Transactional Email 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>SSL Setup & Integration 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Malware Cleanup Guarantee 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Patchstack Firewall 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Managed WordPress Updates 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Basic SEO Configuration 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Website Backups 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Security Scans 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Website Care Report 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Minor Website Edits 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>ShortPixel Image Compressions 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Advanced Google Analytics 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>eCommerce Reporting 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>24/7 Uptime Monitoring 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Priority Support 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Site Performance Monitoring 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>SEO Monitoring & Reporting 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Quarterly Consulting Call 
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li></li>
                  </ul>
                </Grid>
                <Grid item md={2.5} sm={2.5} xs={2.5} className='center plan plan1 plan-table-col'>
                  <ul>
                    <li></li>
                    <li><h4>Basic</h4></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><Link to="#" className="greenButton btn">Get Started</Link></li>
                  </ul>
                </Grid>
                <Grid item md={2.5} sm={2.5} xs={2.5} className='center plan plan2 plan-table-col'>
                  <ul>
                    <li className='best'>Best Value!</li>
                    <li><h4>Gold</h4></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><AiOutlineCloseCircle className="no"/></li>
                    <li><Link to="#" className="greenButton btn">Get Started</Link></li>
                  </ul>
                </Grid>
                <Grid item md={2.5} sm={2.5} xs={2.5} className='center plan plan3 plan-table-col'>
                  <ul>
                    <li></li>
                    <li><h4>Platinum</h4></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><AiFillCheckCircle className="yes"/></li>
                    <li><Link to="#" className="greenButton btn">Get Started</Link></li>
                  </ul>
                </Grid>
              </Grid>

              <Grid container className='plan-table mobile' spacing={4}>
                <Grid item md={12} sm={12} xs={12} className='center plan plan1 plan-table-col'>
                  <ul>
                    <li></li>
                    <li><h4>Basic</h4></li>
                    <li>No Annual Contract
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Managed Hosting
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Premium Licensing
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Enterprise Transactional Email
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>SSL Setup & Integration
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Malware Cleanup Guarantee
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Patchstack Firewall
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Managed WordPress Updates
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Basic SEO Configuration
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Website Backups
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li><Link to="#" className="greenButton btn">Get Started</Link></li>
                  </ul>
                </Grid>
                <Grid item md={12} sm={12} xs={12} className='center plan plan2 plan-table-col'>
                  <ul>
                    <li className='best'>Best Value!</li>
                    <li><h4>Gold</h4></li>
                    <li>No Annual Contract
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Managed Hosting
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Premium Licensing
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Enterprise Transactional Email
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>SSL Setup & Integration
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Malware Cleanup Guarantee
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Patchstack Firewall
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Managed WordPress Updates
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Basic SEO Configuration
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Website Backups
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Security Scans
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Website Care Report
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Minor Website Edits
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>ShortPixel Image Compressions
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Advanced Google Analytics
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>eCommerce Reporting
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li><Link to="#" className="greenButton btn">Get Started</Link></li>
                  </ul>
                </Grid>
                <Grid item md={12} sm={12} xs={12} className='center plan plan3 plan-table-col'>
                  <ul>
                    <li></li>
                    <li><h4>Platinum</h4></li>
                    <li>No Annual Contract
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Managed Hosting
                      <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Premium Licensing
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Enterprise Transactional Email
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>SSL Setup & Integration
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Malware Cleanup Guarantee
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Patchstack Firewall
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Managed WordPress Updates
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Basic SEO Configuration
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Website Backups
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Security Scans
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Website Care Report
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Minor Website Edits
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>ShortPixel Image Compressions
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Advanced Google Analytics
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>eCommerce Reporting
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>24/7 Uptime Monitoring
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Priority Support
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Site Performance Monitoring
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>SEO Monitoring & Reporting
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li>Quarterly Consulting Call
                        <span className='tooltip'><AiOutlineQuestionCircle/>
                        <p className='tip'>Lorem ipsum dolor sit amet consectetuer</p>
                      </span>
                    </li>
                    <li><Link to="#" className="greenButton btn">Get Started</Link></li>
                  </ul>
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

export default CarePlan