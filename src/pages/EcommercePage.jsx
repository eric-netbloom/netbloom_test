import { Grid} from '@mui/material';
import React from 'react';
import Helmet from "../components/HelmetTag";
import woocommerce from '../assets/images/woocommerce.webp';
import shopify from '../assets/images/shopify.webp';
import magento from '../assets/images/magento.webp';
import straightforward from '../assets/icons/straightforward.png';
import mobilefriendly from '../assets/icons/mobile-friendly.png';
import customerfocused from '../assets/icons/customerfocused.png';
import revenuebased from '../assets/icons/revenuebased.png';
import BannerLanding from "../components/BannerLanding";
import { Link } from "react-router-dom";
import bannerBg from "../assets/images/ecommerce.webp";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../assets/css/ecommerce.scss";
import AllTestimonials from "../components/AllTestimonials.js";
import Faqs2 from "../components/Faqs2.js";
import CtaForm from "../components/CtaForm.js";
import NetbloomOG from "../assets/images/Netbloom-OG.jpg"

const EcommercePage = () => {
    const designList = [
        'Quality Functionality for Higher Customer Engagement',
        'Seamless Design for Easy User Navigation',
        'Increased Revenue - Shop & Buy with just Few Clicks'
    ]
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
        "contact",
        "portfolio"
      );
      document.body.classList.add("ecommerce");

    return (
        <div className='ecommerce page-content'>
           <Helmet
                pageTitle="Web Design NZ | Web Design & Management Services"
                title="Web Design NZ | Web Design &amp; Management Services | Netbloom"
                description="Bespoke web design services in NZ. With years of experience building results-driven custom web design templates & web development. Get a free consultation now!"
                robots = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                locale="en_US"
                type="website"
                url="https://netbloom.co.nz/e-commerce-website-nz/"
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
                twtitle="Web Design NZ | Web Design &amp; Management Services | Netbloom"
                twdescription="Bespoke web design services in NZ. With years of experience building results-driven custom web design templates & web development. Get a free consultation now!"
                twimage={NetbloomOG}
                twlabel1="Written by"
                twdata1="Jessa L"
                twlabel2="Time to read"
                twdata2="2 minutes"
            />
            <div className="banner bn-landing" style={{backgroundImage: `url(${bannerBg})`}}>
                <BannerLanding 
                    pageTitle='E-Commerce Websites with Seamless Customer Shopping Experience'
                    subHeading = 'Quality Functionality for Higher Customer Engagement. Seamless Design for Easy User Navigation. Increased Revenue - Shop & Buy with just Few Clicks'
                    btnText = 'BOOK A FREE CONSULTATION'
                />
            </div>
            <div className='default-sec strategy'>
                <div className="default-sec-overlay">
                    <div className="default-sec-content">
                        <div className="default-sec-wrap">
                            <section className='ecom_features_wp' >
                                <Grid container spacing={0} className="text-point ecom_feat_content">
                                    <Grid item xs={12} className="ecom_features_title" >
                                        <div className='ecom_features_title_inner'>
                                            <h2>Our <span className='textGreen'>E-commerce</span> Strategy</h2>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={0} className="text-point ecom_features ">
                                    <Grid item md={3} sm={6} xs={12} className="features_box ">
                                        <div className='features_box_inner '>
                                            <div className='ecom_features_icon'>
                                                <img src={straightforward} alt='straightforward' />
                                            </div>
                                            <h4>STRAIGHTFORWARD</h4>
                                        </div>
                                    </Grid>
                                    <Grid item md={3} sm={6} xs={12} className="features_box">
                                        <div className='features_box_inner  '>
                                            <div className='ecom_features_icon'>
                                            <img src={mobilefriendly} alt='mobilefriendly' />
                                            </div>
                                            <h4>MOBILE-FRIENDLY</h4>
                                        </div>
                                    </Grid>
                                    <Grid item md={3} sm={6} xs={12} className="features_box">
                                        <div className='features_box_inner  '>
                                            <div className='ecom_features_icon'>
                                                <img src={customerfocused} alt='customerfocused' />
                                            </div>
                                            <h4>CUSTOMER-FOCUSED</h4>
                                        </div>
                                    </Grid>
                                    <Grid item md={3} sm={6} xs={12} className="features_box">
                                        <div className='features_box_inner '>
                                            <div className='ecom_features_icon'>
                                                <img src={revenuebased} alt='revenuebased' />
                                            </div>
                                            <h4 >REVENUE-BASED</h4>
                                        </div>
                                    </Grid>
                                </Grid>
                            </section >
                        </div>
                    </div>
                </div>
            </div>
            <div className='default-sec ecommerce_platform DarkGrayBg'>
                <div className="default-sec-overlay">
                    <div className="default-sec-content">
                        <div className="default-sec-wrap">
                            <section className=''>
                                <Grid container className="text-point">
                                    <Grid item xs={12} className="ecommerce_title">
                                        <div className='ecommerce_title_inner center'>
                                            <h2>Proven Technical Experience in  Developing <span className='textGreen'>E-Commerce Websites</span> using the Best Platforms</h2>
                                            <h3>TOP 3 E-COMMERCE PLATFORMS</h3>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={4} className="text-point ecommerce_platform ">
                                    <Grid item md={4} sm={12} xs={12} className="platform_box">
                                        <div className='platform_box_inner whiteBg'>
                                            <div className='ecom_features_icon'>
                                                <img src={woocommerce} alt="woocommerce"/>
                                            </div>
                                            <p>This cloud-based e-commerce platform has built-in tools that will enable you to offer different shipping and payment options for your customers. Connect to different payment gateways to accept credit/debit card payments online.</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={4} sm={12} xs={12} className="platform_box">
                                        <div className='platform_box_inner whiteBg'>
                                            <div className='ecom_features_icon'>
                                                <img src={shopify} alt="shopify"/>
                                            </div>
                                        <p>Shopify is considered the easiest beginner-friendly and easy to navigate e-commerce platform to use. Shopify is a store builder that lets anyone set up an online store and focus more on the growth of the business.</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={4} sm={12} xs={12} className="platform_box">
                                        <div className='platform_box_inner whiteBg'>
                                            <div className='ecom_features_icon'>
                                                <img src={magento} alt="magento"/>
                                            </div>
                                            <p>Magento is one of the top e-commerce ecom platforms that provide vendors access to thousands of useful features and resources that would help them reach their customers worldwide while selling products even in their own homes - making online selling is easier!</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </section >
                        </div>
                    </div>
                </div>
            </div>
            <AllTestimonials />
            <Faqs2 />
            <CtaForm />
        </div >
    )
}

export default EcommercePage