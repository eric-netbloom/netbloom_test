import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Platforms() {
   
    const cmsGallery = [
        {src:require('../assets/icons/1.png'),name:'shopify'},
        {src:require('../assets/icons/2.png'),name:'magento'},
        {src:require('../assets/icons/3.png'),name:'templatemonster'},
        {src:require('../assets/icons/4.png'),name:'elementor'},
        {src:require('../assets/icons/5.png'),name:'pixpa'},
        {src:require('../assets/icons/6.png'),name:'3dcart'},
        {src:require('../assets/icons/7.png'),name:'bigcommerce'},
        {src:require('../assets/icons/8.png'),name:'woocommerce'},
        {src:require('../assets/icons/9.png'),name:'wix'},
        {src:require('../assets/icons/10.png'),name:'wordpress'},
        {src:require('../assets/icons/11.png'),name:'duda'},
        {src:require('../assets/icons/12.png'),name:'squarespace'},
        {src:require('../assets/icons/13.png'),name:'drupal'},
        {src:require('../assets/icons/14.png'),name:'joomla'},
        {src:require('../assets/icons/15.png'),name:'php'},
        {src:require('../assets/icons/16.png'),name:'silverstripe'},
    ]
    
  return (
    <div className='default-sec platforms-section blueGreenGradient'>
        <div className="default-sec-overlay">
            <div className="default-sec-content fullwidth">
                <div className="default-sec-wrap">
                    <h2 className="center whiteTxt">CMS Platforms We've Worked With</h2>
                    <Swiper
                        spaceBetween={3}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        slidesPerView={3}
                        loop={true}
                        speed={8000}
                        autoplay={{
                            enabled: true,
                            delay: 1,
                        }}
                        modules={[Autoplay]}
                        className="platforms-carousel continuous"
                        breakpoints={{
                            1024: {
                            slidesPerView: 6,
                            },
                            768: {
                            slidesPerView: 4,
                            },
                        }}
                        >
                      {
                        cmsGallery.map((cms, index) => (
                            
                        <SwiperSlide  key={index}  >
                            <span>
                                <img src={cms.src}  key={index} alt={cms.name}  />
                            </span>
                        </SwiperSlide>
                        
                    ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Platforms