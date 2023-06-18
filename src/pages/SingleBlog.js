import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Helmet from "../components/HelmetTag";
import NetbloomOG from "../assets/images/Netbloom-OG.jpg"
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleBlog() {

  document.body.classList.remove(
    "home",
    "main-case-study",
    "case-study",
    "single-case-study",
    "web-design",
    "portfolio",
    "ecommerce",
    "about",
    "location",
    "main-blog",
    "location",
    "seo"
  );
  document.body.classList.add('blog', 'single-blog');

  const [blogData, setBlogData] = useState(null);
  const { slug } = useParams();

  // const [author, setAuthor] = useState([]);
  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type = "users"]`,
  //     )
  //     .then((data) => setAuthor(data))
  //     .catch(console.error);
  // }, []);

  useEffect(() => {
    sanityClient
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
          "profileImage": author->profileImage,
          noIndex
       }`,
        { slug }
      )
      .then((data) => setBlogData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!blogData) return <center Style="padding: 100px;font-weight:bold;font-size: 30px;">Loading...</center>;

  let imageUrl = urlFor(blogData.mainImage).url();

  return (
    <div className="singleBlog page-content" key={blogData.slug}>
      <Helmet
        pageTitle={blogData.seoTitle ? blogData.seoTitle : blogData.title}
        title={blogData.ogTitle ? blogData.ogTitle : blogData.title}
        description={blogData.seoDescription}
        robots = {blogData.noIndex ? blogData.noIndex : 'index'}
        locale="en_US"
        type="article"
        url="https://netbloom.co.nz/seo-services-nz/"
        site_name="Netbloom"
        updated_time="2023-01-17T06:27:38+00:00"
        image ={blogData.ogImage ? urlFor(blogData.ogImage).width(300).url() : urlFor(blogData.mainImage).width(300).url()}
        imgsecure_url={blogData.ogImage ? urlFor(blogData.ogImage).width(300).url() : urlFor(blogData.mainImage).width(300).url()}
        imgwidth="1200"
        imgheight="627"
        imgalt="New Zealand SEO Services"
        imgtype="image/jpeg"
        artpublished_time="2022-08-22T01:04:07+00:00"
        artmodified_time="2023-01-17T06:27:38+00:00"
        twcard="summary_large_image"
        twtitle="SEO Services NZ | Affordable SEO Specialist | Netbloom"
        twdescription="New Zealand'&#039;'s finest SEO services utilise trust & authority metrics to deliver measurable results. We offer proven SEO strategies for Auckland & across NZ."
        twimage={blogData.ogImage ? urlFor(blogData.ogImage).width(300).url() : urlFor(blogData.mainImage).width(300).url()}
        twlabel1="Written by"
        twdata1="Jessa L"
        twlabel2="Time to read"
        twdata2="2 minutes"
      />
      <div className="banner" style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>{blogData.title}</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Link underline="hover" color="inherit" href="/blog">
                  Blog
                </Link>
                <Typography color="text.primary">{blogData.title}</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className="default-sec blog-section">
        <div className="default-sec-overlay">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              {blogData.categories &&(
                  <ul className="categories" style={{ listStyle: "none" }}>
                      {blogData.categories.map((category, categoriesSlug, i) => (
                          <li key={categoriesSlug}>
                            <a href={"/blog/" + categoriesSlug} title={category}>
                              {category}
                            </a>
                          </li>
                      ))}
                  </ul>
                )}
              {/* {blogData.mainImage && (
                <img
                  src={urlFor(blogData.mainImage).url()}
                  alt={blogData.title}
                />
              )} */}
              <div>
                <BlockContent
                  blocks={blogData.body}
                  projectId={sanityClient.clientConfig.projectId}
                  dataset={sanityClient.clientConfig.dataset}
                />
              </div>
              {/* <div className="author">
                {blogData.profileImage && (
                  <img
                    src={urlFor(blogData.profileImage).width(100).url()}
                    alt={blogData.name}
                  />
                )}
                <h4>{blogData.name}</h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}