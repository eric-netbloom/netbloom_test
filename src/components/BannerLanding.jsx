import React from 'react';
import Link from '@mui/material/Link';
import google from "../assets/images/google reviews.webp";

function BannerLanding(props) {
    const designList = props.designArray;
  return (
  <div className="banner-overlay">
      <div className="main-content">
        <div className="banner-con left gap-bottom">
          <h1>{props.pageTitle}<span className="textGreen">.</span></h1>
          <p className='textWhite'>{props.subHeading}<br/> <span className="textGreen">{props.subHeadingGreen}</span></p>
          <div className="flex-left btns">
            <Link to="#" className="greenButton btn">{props.btnText}</Link>
            <Link
              to="https://www.google.com/search?q=netbloom&rlz=1C1ONGR_enPH1012PH1012&oq=netbloom&aqs=chrome..69i57j46i10i131i433i512j69i60l3j69i61j69i65l2.1752j0j7&sourceid=chrome&ie=UTF-8#lrd=0xa82ea9ecc91883d3:0xe045a8ae841b57ff,1,,,,"
              target="_blank"
              title="Netbloom Google Reviews"
              rel="noreferrer"
            >
              <img src={google} alt="Google Reviews" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BannerLanding