import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import logoWhite from '../assets/Netbloom-White.webp';
import logoOverlay from '../assets/icons/white-logo (1).webp';
import facebook from '../assets/icons/facebook.webp';
import instagram from '../assets/icons/instagram.webp';
import linkedin from '../assets/icons/linkedin.webp';


export default function Footer() {

  return (
    <footer>
      <div className="default-sec footer left">
        <div className="default-sec-overlay">
          <div className="default-sec-content main-content">
            <div className="default-sec-wrap max1200">
              <Grid container rowSpacing={4} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
                <Grid item xs={12} sm={12} md={4} className="column1">
                  <img src={logoWhite} alt="Netbloom white logo"/>
                  <ul className="flex-left social">
                    <li><Link to="#"><img src={facebook} alt="Facebook"/></Link></li>
                    <li><Link to="#"><img src={instagram} alt="Instagram"/></Link></li>
                    <li><Link to="#"><img src={linkedin} alt="Linkedin"/></Link></li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={8} className="footer-menu column2">
                  <Grid container rowSpacing={4} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
                    <Grid item xs={12} sm={4} md={4} className="footer-menu column2">
                      <h4>Menu</h4>
                      <ul>
                        <li><Link to="/about-us">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact-us">Contact</Link></li>
                        <li><Link to="/get-a-qoute">Get a Quote</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/case-studies">Case Studies</Link></li>
                      </ul>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} className="footer-menu column3">
                      <h4>Services</h4>
                        <ul>
                          <li><Link to="/seo-services-nz">SEO</Link></li>
                          <li><Link to="/web-design-nz">Web Design</Link></li>
                          <li><Link to="/e-commerce-website-nz">eCommerce Website</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} className="footer-menu column4">
                      <h4>Locations</h4>
                      <ul>
                        <li><Link to="/auckland">Auckland</Link></li>
                        <li><Link to="/christchurch-seo">Christchurch</Link></li>
                        <li><Link to="/dunedin-seo">Dunedin</Link></li>
                        <li><Link to="/hamilton-seo">Hamilton</Link></li>
                        <li><Link to="/palmerston-north-seo">Palmerston North</Link></li>
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="elements">
            <img className="logoOverlay" src={logoOverlay} alt="Netbloom Icon"/>
          </div>
        </div>
      </div>
    </footer>
  );
}