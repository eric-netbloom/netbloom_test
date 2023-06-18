import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
function HelmetTag (props) {
  return (
    <HelmetProvider>
        <Helmet>
            <title>{props.pageTitle}</title>
            <meta name="title" content={props.title} />
            <meta name="robots" content={props.robots} />
            <meta name="description" content={props.description} />        
            <meta
              property="og:title"
              content={props.ogTitle}
            />
            <meta
              
              property="og:description"
              content={props.ogDescription}
            />
            <meta property="og:locale" content={props.locale} />
            <meta property="og:type" content={props.type} />
            <meta property="og:site_name" content={props.site_name} />
            <meta property="og:updated_time" content={props.updated_time} />
            <meta property="og:image" content={props.image} />
            <meta property="og:image:secure_url" content={props.imgsecure_url} />
            <meta property="og:image:width" content={props.imgwidth} />
            <meta property="og:image:height" content={props.imgheight} />
            <meta property="og:image:alt" content={props.imgalt} />
            <meta property="og:image:type" content={props.imgtype} />
            <meta property="article:published_time" content={props.artpublished_time} />
            <meta property="article:modified_time" content={props.artmodified_time} />
            <meta name="twitter:card" content={props.twcard} />
            <meta name="twitter:title" content={props.twtitle} />
            <meta name="twitter:description" content={props.twdescription} />
            <meta name="twitter:image" content={props.twimage} />
            <meta name="twitter:label1" content={props.twlabel1}/>
            <meta name="twitter:data1" content={props.twdata1} />
            <meta name="twitter:label2" content={props.twlabel2} />
            <meta name="twitter:data2" content={props.twdata2} />
            <link rel="canonical" href={props.url} />
          </Helmet>
      </HelmetProvider>
  )
}

export default HelmetTag