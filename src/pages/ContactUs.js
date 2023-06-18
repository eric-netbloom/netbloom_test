import React from "react";
// import { Link } from "react-router-dom";
import Helmet from "../components/HelmetTag";
import NetbloomOG from "../assets/images/Netbloom-OG.jpg"
import Faqs2 from "../components/Faqs2.js";
import BannerDefault from "../components/BannerDefault.jsx";
import ContactForm from "../components/ContactForm.js";
export default function ContactUs() {
  const designList = ['Give us a call/email using the below information or complete the contact form below, and a member of our team will get back to you as soon as possible.']
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
    "ecommerce",
    "about",
    "portfolio"
  );
  document.body.classList.add("contact");

  return (
    <div className="contact-page page-content">
      <Helmet
      pageTitle="Contact Netbloom for Digital Marketing Services"
      title="Contact Netbloom for SEO Services | Get in touch now"
      description="Get in touch with Netbloom today for a free consultation on how we can help you increase your website&#039;s ranking."
      robots = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      locale="en_US"
      type="article"
      url="https://netbloom.co.nz/contact-us/"
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
      twtitle="Contact Netbloom for SEO Services | Get in touch now"
      twdescription="Get in touch with Netbloom today for a free consultation on how we can help you increase your website&#039;s ranking."
      twimage={NetbloomOG}
      twlabel1="Written by"
      twdata1="Jessa L"
      twlabel2="Time to read"
      twdata2="2 minutes"
      />
      <BannerDefault
        pageTitle="Contact Us Today"
        designArray={designList}
      />
      <div className="default-sec form lightGrayBg no-padd-bot no-padd-top center">
        <ContactForm />
      </div>
      <Faqs2 />
    </div>
  );
}
