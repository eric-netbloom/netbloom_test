import { Grid } from '@mui/material';
import React from 'react';
import Helmet from "../components/HelmetTag";
import uniqueandpersonalised from '../assets/icons/uniqueandpersonalised.png'
import modern from '../assets/icons/modern.png'
import easytomanage from '../assets/icons/easytomanage.png'
import designedtoconvert from '../assets/icons/designedtoconvert.png'
import safeandsecure from '../assets/icons/safeandsecure.png'
import actionable from '../assets/icons/actionable.png'
import processline from '../assets/icons/processline-hori.png'
import processline2 from '../assets/icons/processline-ver.png'
import getting from '../assets/icons/getting.png'
import websitemockup from '../assets/icons/websitemockup.png'
import designprocess from '../assets/icons/designprocess.png'
import buildingwebsite from '../assets/icons/buildingwebsite.png'
import testversionfeedback from '../assets/icons/testversionfeedback.png'
import launch from '../assets/icons/launch.png'
import bannerBg from "../assets/images/webdesign.webp";
import trainingsupport from '../assets/icons/trainingsupport.png';
import BannerLanding from "../components/BannerLanding";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../assets/css/web-design.scss";
import "../assets/css/seo.scss";
import AllTestimonials from "../components/AllTestimonials.js";
import CtaForm from "../components/CtaForm.js";
import Faqs2 from '../components/Faqs2';
import NetbloomOG from "../assets/images/Netbloom-OG.jpg";
import Website from "../assets/images/website.webp";
import Customcabins from "../assets/images/customcabins.webp";
import { AiOutlineCheckSquare } from "react-icons/ai";


const WebDesign = () => {
    document.body.classList.remove(
        "home",
        "blog",
        "main-blog",
        "single-blog",
        "case-study",
        "main-case-study",
        "single-case-study",
        "seo",
        "about",
        "ecommerce",
        "contact",
        "location",
        "portfolio"
      );

    document.body.classList.add("web-design");

    return (
        <div className='web_design page-content'>
            <Helmet
                pageTitle="Web Design NZ | Web Design & Management Services"
                title="Web Design NZ | Web Design &amp; Management Services | Netbloom"
                description="Bespoke web design services in NZ. With years of experience building results-driven custom web design templates & web development. Get a free consultation now!"
                robots = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                locale="en_US"
                type="website"
                url="https://netbloom.co.nz/web-design-nz/"
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
                    pageTitle='Results-driven and Exceptional Web Design - NZ & AU'
                    subHeading = 'Bespoke, complete web design that commands attention. Increase Conversions. Engage your audience. Grow your brand.'
                    btnText = 'BOOK A FREE CONSULTATION'
                />
            </div>
            <div className='default-sec main-wrapper'>
                <div className="default-sec-overlay">
                    <div className="default-sec-content">
                        <div className="default-sec-wrap">
                            <section className='web_development_services'>
                                <Grid container>
                                    <Grid item md={6} sm={6} xs={12}>
                                        <img src={Website} alt="Web design services" />
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={12} className='flex-v-center'>
                                        <h2>Our <br/> <span className='textGreen'>Web Development</span> <br/> Services</h2>
                                        <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus donec consectetuer ligula vulputate.</p>
                                        <button className='btn'>Schedule a free consultation</button>
                                    </Grid>
                                </Grid>
                            </section >
                        </div>
                    </div>
                </div>
            </div>
            <div className="default-sec halfDarkBlueBg center no-padd-bot">
                <div className="default-sec-overlay">
                    <div className="default-sec-content main-content">
                        <div className="default-sec-wrap">
                            <Grid container className="text-point website_feat_conte">
                                <Grid item xs={12} className="website_features_title">
                                    <div className='website_features_title_inner'>
                                        <h2>Skyrocket Conversions with Exceptional <br/>Web Design in NZ</h2>
                                        <p className='sub-head'>Bespoke, complete Web Design that commands attention, increases conversions and engages your audience</p>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container className="website-img">
                                <Grid item xs={12} >
                                    <img src={Customcabins} alt="Custom cabins website" />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
            <div className="default-sec">
                <div className="default-sec-overlay">
                    <div className="default-sec-content main-content">
                        <div className="default-sec-wrap">
                            <Grid container spacing={0} className="text-point devlopment_services">
                                <Grid item md={4} sm={4} xs={12} className="devlopment_box">
                                    <div className='devlopment_box_inner'>
                                        <AiOutlineCheckSquare />
                                        <h3>Website Creation</h3>
                                        <ul>
                                            <li>CMS Implementation</li>
                                            <li>Mockups</li>
                                            <li>Coding</li>
                                            <li>Plug-in Installations</li>
                                            <li>Functionality Audit</li>
                                            <li>User Interface Audit</li>
                                            <li>Launching</li>
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid item md={4} sm={4} xs={12} className="devlopment_box">
                                    <div className='devlopment_box_inner'>
                                        <AiOutlineCheckSquare />
                                        <h3>Web Design</h3>
                                        <ul>
                                            <li>User Experience Architecture</li>
                                            <li>User Interface Engineering</li>
                                            <li>Illustrations & Imagery</li>
                                            <li>Effective Call-to-Action Buttons</li>
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid item md={4} sm={4} xs={12} className="devlopment_box">
                                    <div className='devlopment_box_inner'>
                                        <AiOutlineCheckSquare />
                                        <h3>Website Maintenance</h3>
                                        <ul>
                                            <li>Migration</li>
                                            <li>Back-ups</li>
                                            <li>Updates</li>
                                            <li>Troubleshooting</li>
                                            <li>Training & Support</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
            <div className="default-sec DarkGrayBg">
                <div className="default-sec-overlay">
                    <div className="default-sec-content main-content">
                        <div className="default-sec-wrap">
                            <section className='website_features_wp'>
                                <Grid container className="text-point website_feat_conte">
                                    <Grid item xs={12} className="website_features_title">
                                        <div className='website_features_title_inner'>
                                            <h2>Website <span className='textGreen'>Features</span></h2>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={6} className="text-point website_features">
                                    <Grid item md={4} sm={6} xs={12} className="features_box">
                                        <div className='features_box_inner'>
                                            <div className='website_features_icon'>
                                                <img src={uniqueandpersonalised} alt="uniqueandpersonalised"/>
                                            </div>
                                            <h3 className=''>UNIQUE & <span>PERSONALISED</span></h3>
                                            <ul>
                                                <li>Fully-customised</li>
                                                <li>Stunning & Original</li>
                                                <li>Ready-to-use</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                    <Grid item md={4} sm={6} xs={12} className="features_box">
                                        <div className='features_box_inner'>
                                            <div className='website_features_icon'>
                                                <img src={modern} alt="modern"/>
                                            </div>
                                            <h3>MODERN</h3>
                                            <ul>
                                                <li>Aesthetically-pleasing</li>
                                                <li>Complementary</li>
                                                <li>Fresh</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                    <Grid item md={4} sm={6} xs={12} className="features_box">
                                        <div className='features_box_inner'>
                                            <div className='website_features_icon'>
                                                <img src={easytomanage} alt="easytomanage"/>
                                            </div>
                                            <h3>EASY-TO-MANAGE</h3>
                                            <ul>
                                                <li>Numerous CMS Options</li>
                                                <li>Responsive</li>
                                                <li>Seamless Navigation</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                    <Grid item md={4} sm={6} xs={12} className="features_box">
                                        <div className='features_box_inner'>
                                            <div className='website_features_icon'>
                                                <img src={designedtoconvert} alt="designedtoconvert"/>
                                            </div>
                                            <h3>DESIGNED TO CONVERT</h3>
                                            <ul>
                                                <li>Target Market Focused</li>
                                                <li>Engaging</li>
                                                <li>Profit-generating</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                    <Grid item md={4} sm={6} xs={12} className="features_box">
                                        <div className='features_box_inner'>
                                            <div className='website_features_icon'>
                                                <img src={safeandsecure} alt="safeandsecure"/>
                                            </div>
                                            <h3>SAFE & SECURE</h3>
                                            <ul>
                                                <li>Virus Prevention</li>
                                                <li>Hacking Prevention</li>
                                                <li>Intrusion Safeguards</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                    <Grid item md={4} sm={6} xs={12} className="features_box">
                                        <div className='features_box_inner'>
                                            <div className='website_features_icon'>
                                                <img src={actionable} alt="actionable"/>
                                            </div>
                                            <h3>DESIGN</h3>
                                            <ul>
                                                <li>Powerful and Well-Designed CTAs</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                </Grid>
                            </section >
                        </div>
                    </div>
                </div>
            </div>
            <div className="default-sec bluePurpleGradient">
                <div className="default-sec-overlay">
                    <div className="default-sec-content main-content fullwidth">
                        <div className="default-sec-wrap">
                            <section className='our_process_wp'>
                                <Grid container spacing={6} className="text-point our_process">
                                    <Grid item xs={12} className="our_process_title">
                                        <div className='our_process_title_inner'>
                                            <h2>Quick Overview: Our <span className='textGreen'>Web Design</span> Process</h2>
                                        </div>
                                    </Grid>
                                </Grid>

                                <Grid container  spacing={3} className="text-point our_process_content"   alignItems="center"  style={{ backgroundImage:`url(${processline2})`,backgroundRepeat:'no-repeat',backgroundSize:'100px 100%',backgroundPosition:'center' }}  >
                                    <Grid item xs={6} >
                                        <div className='process_icon' style={{ margin:'0 30px 0 auto' }}>
                                            <img src={getting} alt="getting"/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="process-right" data-aos="fade-left">
                                            <h4>1. Getting to know you</h4>
                                            <p>We put time and effort into learning more about your business objectives, understanding your product services, and analysing your competitors’ performance. We keep in close touch with you during the entire website design process.</p>
                                        </div>  
                                    </Grid>    

                                    <Grid item xs={6}>
                                    <div className="process-left" data-aos="fade-right">
                                        <h4>2. Website Mockup</h4>
                                        <p>We start to structure your website and design your homepage. We then offer an overview of the layout to give you a sense of how the site will look once it is completed.</p>
                                            
                                    </div>
                                    
                                    </Grid>
                                    <Grid item xs={6}  >
                                        <div className='process_icon' style={{ margin:' 0 0 15px 40px' }}>
                                            <img src={websitemockup} alt="websitemockup" />
                                        </div>
                                    </Grid>  
                                    <Grid item xs={6}>
                                        <div className='process_icon' style={{ margin:'0 30px 0 auto' }}>
                                            <img src={designprocess} alt="designprocess"/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <div className="process-right" data-aos="fade-left">
                                        <h4>3. Design Process</h4>
                                        <p>With the homepage design approved, we move on to the rest of your website pages, using tools, imagery, illustrations, and many other components to produce a captivating outcome.</p>
                                    </div>
                                    </Grid>  
                                    <Grid item xs={6}>
                                    <div className="process-left" data-aos="fade-right">
                                        <h4>4. Building Your Website</h4>
                                        <p>After successfully completing the first steps of the process, we start building your website, making sure it will be easy to navigate and interact with.</p> 
                                    </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className='process_icon' style={{  margin:' 0 0 15px 40px'}}>
                                            <img src={buildingwebsite} alt="buildingwebsite"/>
                                        </div>
                                    </Grid>  
                                    <Grid item xs={6}>
                                        <div className='process_icon' style={{ margin:'0 30px 0 auto' }}>
                                            <img src={testversionfeedback} alt="testversionfeedback"/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <div className="process-right" data-aos="fade-left">
                                        <h4>5. Test Version & Feedback</h4>
                                        <p>At this point, we take care of the final details to ensure a successful lift-off, providing you with a test version to view and to share your comments and thoughts with us.</p>
                                    </div>
                                    </Grid>  
                                    <Grid item xs={6}>
                                    <div className="process-left" data-aos="fade-right">
                                        <h4>6. Website Launch</h4>
                                        <p>Once your website is officially polished and ready, it’s time to launch. Now you can begin to use it in your marketing and Google will index it so it be found on the world wide web.</p>
                                            
                                    </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className='process_icon' style={{  margin:' 0 0 15px 40px' }}>
                                            <img src={launch} alt="launch"/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className='process_icon' style={{ margin:'0 30px 0 auto' }}>
                                            <img src={trainingsupport} alt="trainingsupport"/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="process-right" data-aos="fade-left">
                                            <h4>7. Website Training & Support</h4>
                                            <p>After deploying your website, we help you master your online activity, offering tutorials on how to manage and update the site so you can feel comfortable handling it in the long run.</p>
                                        </div>   
                                    </Grid>                                     
                                </Grid>
                            </section>
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

export default WebDesign