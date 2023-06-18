import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import client from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Helmet from "../components/HelmetTag";
import NetbloomOG from "../assets/images/Netbloom-OG.jpg"
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleCaseStudy() {

  document.body.classList.remove(
    "home",
    "single-blog",
    "main-case-study",
    "location",
    "web-design",
    "seo",
    "ecommerce",
    "about",
    "location",
    "blog",
    "main-blog",
    "portfolio"
  );
  document.body.classList.add('case-study', 'single-case-study');

  const [caseStudiesData, setCaseStudiesData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
          "categories": categories[]->title,
          body,
          seoTitle,
          seoDescription,
          ogTitle,
          ogDescription,
          ogImage{
            asset->{
              _id,
              url
            }
          },
          "name": author->name,
          "authorImage": author->image,
          noIndex
       }`,
        { slug }
      )
      .then((data) => setCaseStudiesData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!caseStudiesData) return <center Style="padding: 100px;font-weight:bold;font-size: 30px;">Loading...</center>;

  let imageUrl = urlFor(caseStudiesData.mainImage).url();

  return (
    <div className="SingleCaseStudy page-content">
      <Helmet
          title={caseStudiesData.seoTitle ? caseStudiesData.seoTitle : caseStudiesData.title}
          robots={caseStudiesData.noIndex ? caseStudiesData.noIndex : 'index'}
          description={caseStudiesData.seoDescription} 
          ogTitle={caseStudiesData.ogTitle ? caseStudiesData.ogTitle : caseStudiesData.title} 
          ogDescription={caseStudiesData.ogDescription} 
          image={caseStudiesData.ogImage ? urlFor(caseStudiesData.ogImage).width(300).url() : urlFor(caseStudiesData.mainImage).width(300).url()} 
          locale="en_US"
          type="article"
          url="https://netbloom.co.nz/seo-services-nz/"
          site_name="Netbloom"
          updated_time="2023-01-17T06:27:38+00:00"
          imgsecure_url={NetbloomOG}
          imgwidth="1200"
          imgheight="627"
          imgalt="New Zealand SEO Services"
          imgtype="image/jpeg"
          artpublished_time="2022-08-22T01:04:07+00:00"
          artmodified_time="2023-01-17T06:27:38+00:00"
          twcard="summary_large_image"
          twtitle="SEO Services NZ | Affordable SEO Specialist | Netbloom"
          twdescription="New Zealand'&#039;'s finest SEO services utilise trust & authority metrics to deliver measurable results. We offer proven SEO strategies for Auckland & across NZ."
          twimage={NetbloomOG}
          twlabel1="Written by"
          twdata1="Jessa L"
          twlabel2="Time to read"
          twdata2="2 minutes"
      />
      <div className="banner" style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>{caseStudiesData.title}</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Link underline="hover" color="inherit" href="/case-studies">
                  Case Studies
                </Link>
                <Typography color="text.primary">{caseStudiesData.title}</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec caseStudies-section">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              {caseStudiesData.categories &&(
                  <ul className="categories" style={{ listStyle: "none" }}>
                      {caseStudiesData.categories.map((category, categoriesSlug, i) => (
                          <li key={categoriesSlug}>
                            <a href={"/caseStudies/" + categoriesSlug} title={category}>
                              {category}
                            </a>
                          </li>
                      ))}
                  </ul>
                )}
              </div>
            <div>
              <BlockContent
                blocks={caseStudiesData.body}
                projectId={client.mjyehiv5}
                dataset={client.production}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}