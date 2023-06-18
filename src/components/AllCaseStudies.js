import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import sanityClient from "../client.js";

export default function AllCaseStudies() {
  const [allCaseStudiesData, setAllCaseStudies] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "case-study"]{
          title,
          slug,
          mainImage{
            asset->{
            _id,
            url
            }
          },
          heading,
          subheading,
          clientLogo{
            asset->{
            _id,
            url
            }
          },
          testimonial
        }`
      )
      .then((data) => setAllCaseStudies(data))
      .catch(console.error);
  }, []);

  return (
    <div className="component case-studies list">
      <Grid container
        rowSpacing={{ xs: 2, sm: 4, md: 6 }}
        columnSpacing={{ xs: 2, sm: 4, md: 6 }}
        className="content-top">
        {allCaseStudiesData&&
          allCaseStudiesData.map( ( caseStudy, index ) => (
            <Grid item xs={12} sm={6} md={4} className="">
              <Link to={"/case-study/" + caseStudy.slug.current} title={caseStudy.title} className="link-wrap">
                <Grid container className="stretch container item">
                  <Grid item xs={12} sm={12} md={12} className="flex-center content-top">
                    <Link to={"/case-study/" + caseStudy.slug.current} title={caseStudy.title} className="link-wrap">
                      <img src={caseStudy.mainImage.asset.url} alt={caseStudy.title} className="main-img"/>
                      <div className="content whiteTxt">
                        <img src={caseStudy.clientLogo.asset.url} alt={caseStudy.title} className="client-logo"/>
                        <h3 className="heading whiteTxt">{caseStudy.heading}</h3>
                        <p className="subheading whiteTxt">{caseStudy.subheading}</p>
                      </div>
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} className="content-bottom">
                    <h4 className="client whiteTxt">{caseStudy.title}</h4>
                    <p className="testimonial whiteTxt">{caseStudy.testimonial}</p>
                    <Link to={"/case-study/" + caseStudy.slug.current} className="readmore whiteTxt" title={caseStudy.title}>Read more ›</Link>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          ) )}
        </Grid>
    </div>
  );
}