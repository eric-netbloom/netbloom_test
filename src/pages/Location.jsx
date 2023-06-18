import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Grid from "@mui/material/Grid";
import SeoPackages from "../components/SeoPackages.js";
import ContactForm from "../components/ContactForm.js";
import CtaForm from "../components/CtaForm.js";
import AllBlog from '../components/AllBlog';
import "../assets/css/location.scss";
import Platforms from "../components/Platforms.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Location() {

  document.body.classList.remove(
    "home",
    "single-blog",
    "main-case-study",
    "case-study",
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
  document.body.classList.add('location');
  
  const [locationData, setLocationData] = useState(null);
  const { slug } = useParams();
  // const [featureData, setFeatureData] = useState(null);
  // const [factorData, setFactorData] = useState(null);
  const boxFeature = [];
  const boxFactor = [];
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          heroHeading,
          heroImage{
            asset->{
              _id,
              url
             }
           },
          heroParagraph,
          caseStudyHeading,
          caseStudyParagraph,
          csImage{
            asset->{
              _id,
              url
            }
          },
          aServiceHeading,
          aServiceHeadingParagraph,
          aServiceImg{
            asset->{
              _id,
              url
            }
          },
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
          aLocationHeading,
          aLocationDescription,
          aLocationMap,
          features[],
          factors[]
            
       }`,
        { slug }
      )
      .then((data) => setLocationData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!locationData) return <center Style="padding: 100px;font-weight:bold;font-size: 30px;">Loading...</center>;

  let bannerImgUrl = urlFor(locationData.heroImage).url();
  let caseImgeUrl = urlFor(locationData.csImage).url();

  return (
    <div className="singleLocation page-content" key={locationData.slug}>
      <HelmetProvider>
        <Helmet>
            <title> {locationData.seoTitle ? locationData.seoTitle : locationData.title} </title>
            <meta name="robots" content={locationData.noIndex ? locationData.noIndex : 'index'} />
            <meta name="description" content={locationData.seoDescription} />
            <meta property='og:title' content={locationData.ogTitle ? locationData.ogTitle : locationData.title} />
            <meta property='og:description' content={locationData.ogDescription} />
            <meta property='og:image' content={locationData.ogImage ? urlFor(locationData.ogImage).width(300).url() : urlFor(locationData.heroImage).width(300).url()} />
        </Helmet>
      </HelmetProvider>
      <div className="banner banner-location" style={{backgroundImage: `url(${bannerImgUrl})`}}>
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <div className="left">
                <h1>{locationData.heroHeading}<span className="textGreen">.</span></h1>
                <BlockContent
                  className="whiteTxt"
                  blocks={locationData.heroParagraph}
                  projectId={sanityClient.clientConfig.projectId}
                  dataset={sanityClient.clientConfig.dataset}
                />
              </div>
              <div className="right">
                <p className="textWhite center">Fill in your details & we'll give you a call</p>
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec casestudy">
        <div className="default-sec-overlay">
          <div className="default-sec-content fullwidth">
            <div className="default-sec-wrap">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={5} md={5} className="flex-v-center">
                  <h4>Case Study</h4>
                  <h2>{locationData.caseStudyHeading}</h2>
                  <BlockContent
                      blocks={locationData.caseStudyParagraph}
                      projectId={sanityClient.clientConfig.projectId}
                      dataset={sanityClient.clientConfig.dataset}
                    />
                </Grid>
                <Grid item xs={12} sm={7} md={7}>
                 <img src={caseImgeUrl} alt="{locationData.caseStudyHeading}" className="fullHeight"/>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec overview lightGrayBg">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <Grid
                container
                columnSpacing={{ xs: 8, sm: 8, md: 8 }}
              >
                <Grid item xs={6} sm={6} md={6}>
                  <img src={locationData.aServiceImg.asset.url} alt={locationData.aServiceHeading} style={{borderRadius: '40px'}}/>
                </Grid>
                <Grid item xs={6} sm={6} md={6} className="flex-v-center">
                  <h2>{locationData.aServiceHeading}</h2>
                  <BlockContent
                    blocks={locationData.aServiceHeadingParagraph}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec features darkblueBg">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <h2 className="center mb-20">What's In It For You?</h2>
              <Grid container sapacing={0} >
                {locationData.features.map((feature,index)=>{
                   let featureIcon = urlFor(feature.icon.asset._ref).url()
                   boxFeature.push(
                    <Grid item md={4} sm={6} xs={12} className="features_box">
                      <div className='features_box_inner'>
                        <img src={featureIcon} alt={feature.heading}/>
                        <h3>{feature.heading}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </Grid>
                   )
                })}
                {boxFeature}
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec factors lightGrayBg">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <h2 className="center mb-40">The Most Important <br/> <span className="textGreen">SEO Factors</span> You Should Know</h2>
              <Grid container spacing={4} >
                {locationData.factors.map((factor,index)=>{
                   boxFactor.push(
                    <Grid item md={4} sm={6} xs={12} className="factors_box">
                      <div className='factors_box_inner'>
                        <h3>{factor.heading}</h3>
                        <p>{factor.description}</p>
                      </div>
                    </Grid>
                   )
                })}
                {boxFactor}
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <Platforms />
      <SeoPackages/>
      <div className="default-sec blog lightGrayBg">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <h2>Recent Blog Posts</h2>
              <AllBlog categoryFilter={"all"} showingPost={"limited"} />
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec about blueBg no-padd">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} className="left-con">
            <iframe src={locationData.aLocationMap} frameborder="0"></iframe>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="right-con">
            <h2>{locationData.aLocationHeading}</h2>
            <BlockContent
              blocks={locationData.aLocationDescription}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </Grid>
        </Grid>
      </div>
      <CtaForm/>
    </div>
  );
}