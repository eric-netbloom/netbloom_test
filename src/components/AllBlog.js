import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

export default function AllBlog({ categoryFilter, showingPost = "all" }) {
  const [allBlogData, setAllBlog] = useState(null);
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog" ${categoryFilter === "all"
          ? ""
          : `&&  "${categoryFilter}" in categories[]->title`
        }]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
        },
        publishedAt,
        "name": author->name,
        "profileImage": author->profileImage,
        "categories": categories[]->title,
    }`
      )
      .then((data) => setAllBlog(data))
      .catch(console.error);
  }, [categoryFilter]);

  return (
    <div className="component">
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 4, md: 6 }}
        columnSpacing={{ xs: 2, sm: 4, md: 6 }}
        className="content-top"
      >
        {allBlogData &&
          allBlogData.slice(0, showingPost === "limited" ? 3 : allBlogData.length + 1).map((blog, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={blog.slug.current}
              className="stretch blog-item"
            >
              <div key={blog.slug} className="blog-item">
                <Link
                  to={"/blog/" + blog.slug.current}
                  key={blog.slug.current}
                  title={blog.title}
                >
                  <img src={blog.mainImage.asset.url} alt="" />
                </Link>
                <div>
                  {blog.categories && (
                    <ul className="categories" style={{ listStyle: "none" }}>
                      {blog.categories.map((category, slug, i) => (
                        <li key={slug}>
                          <a href={"/blog/" + slug} title={category}>
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <h1>{blog.title}</h1>
                  <p>{blog.publishedAt}</p>
                  <p className="grid-bot">
                    <span className="author">
                      {blog.profileImage && (
                        <img
                          src={urlFor(blog.profileImage).width(100).url()}
                          alt={blog.name}
                        />
                      )}
                      {blog.name}
                    </span>
                    <span className="readmore">
                      <Link
                        to={"/blog/" + blog.slug.current}
                        key={blog.slug.current}
                        title={blog.title}
                      >
                        Read more
                      </Link>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
