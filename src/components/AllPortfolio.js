import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import sanityClient from "../client.js";
import { BsArrowRight } from "react-icons/bs";

export default function AllPortfolio({ categoryFilter, showingPost = "all" }) {
  const [allPortfolioData, setAllPortfolio] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "portfolio" ${categoryFilter === "all"
          ? ""
          : `&&  "${categoryFilter}" in categories[]->title`
        }]{
        title,
        slug,
        websiteUrl,
        mainImage{
          asset->{
          _id,
          url
        }
        },
        publishedAt,
        "categories": categories[]->title,
    }`
      )
      .then((data) => setAllPortfolio(data))
      .catch(console.error);
  }, [categoryFilter]);

  return (
    <div className="component">
      <Grid
        container
        className="content-top flex-center"
        rowSpacing={12}
      >
        {allPortfolioData &&
          allPortfolioData.slice(0, showingPost === "limited" ? 3 : allPortfolioData.length + 1).map((portfolio, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="stretch portfolio-items"
            >
              <div key={portfolio.slug} className="portfolio-item">
                <img src={portfolio.mainImage.asset.url} alt={portfolio.title} />
                <div className="details">
                  {portfolio.categories && (
                    <ul className="categories" style={{ listStyle: "none" }}>
                      {portfolio.categories.map((category, slug, i) => (
                        <li key={slug}> {category} </li>
                      ))}
                    </ul>
                  )}
                  <h1>{portfolio.title}</h1>
                  <a href={portfolio.websiteUrl} title={portfolio.title} target="_blank" rel="noreferrer" className="link btn">Visit Website <BsArrowRight/></a>
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
