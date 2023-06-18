import React from 'react'
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
function Banner(props) {
    const designList = props.designArray;
  return (
    <div className="banner">
        <div className="banner-overlay">
      <div className="main-content">
        <div className="banner-con">
          <h1>{props.pageTitle}</h1>
            
            { designList ? (
                <div className='design_list'>
                <ul>
                {
                designList.map(function(item, i){
                    console.log(item);
                    return <li key={i}>{item}</li>
                    })
                }

                </ul>
                {
                props.btnName ? ( <a href='#consult' className='hero_btn greenButton btn'>{props.btnName}</a>):('')
                }
                </div>

            ): (
                <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                Home
                </Link>
                <Typography color="text.primary">{props.pageTitle}</Typography>
                </Breadcrumbs>
            )
            }
         
            
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner