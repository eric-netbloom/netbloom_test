import { Box, Grid } from '@mui/material'
import React from 'react'
import "../assets/css/seoPackage.scss";
function SeoPackages() {
  return (
    <div className="default-sec seoPackage-container">
      <div className="default-sec-overlay">
        <div className="default-sec-content">
          <div className="default-sec-wrap">
            <div className='seoPackage-title'>
                <h2>SEO Packages</h2>
                <p>Guaranteed top rankings on organic search results.</p>
            </div>
            <div className='seoPackage-main'>
              <Grid container spacing={4}  className="seoPackage_box " >
                <Grid item  md={4} sm={4} xs={12} >
                  <Box className='growth'>
                    <h3>GROWTH</h3>
                    <h4>starts at</h4>
                    <h2>$1000</h2>
                    <h4>per month</h4>
                  </Box>
                </Grid>
                <Grid item  md={4} sm={4} xs={12}    >
                  <Box  className='accelerate'>
                    <h3>ACCELERATE</h3>
                    <h4>starts at</h4>
                    <h2>$1,500</h2>
                    <h4>per month</h4>
                  </Box>
                </Grid>
                <Grid item  md={4} sm={4} xs={12}    >
                  <Box className='enterprise'>
                    <h3>ENTERPRISE</h3>
                    <h4>starts at</h4>
                    <h2>$3000</h2>
                    <h4>per month</h4>
                  </Box>
                </Grid>
              </Grid>
            </div>
            <div className='center seoPackage-footer'>
              <p>6-month contract (10% savings)</p>
              <p>12-month contract (15% savings)</p>
              <h3>Contact us for more package details.</h3>
              <a href='#consult' className='center hero_btn greenButton btn'>BOOK A FREE CONSULTATION</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeoPackages