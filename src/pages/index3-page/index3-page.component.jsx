import React, { useState, useLayoutEffect, Fragment, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';
import  "react-responsive-carousel/lib/styles/carousel.min.css"
import book01 from "../../assets/photo/book01_resize.jpg";
import book02 from "../../assets/photo/book02_resize.jpg";
import book03 from "../../assets/photo/book03_resize.jpg";
import block from "bem-cn";

const Index3Page = (props) => {
  const ip = block("index3-page");
  return (
  <div
    className={ip()}>
    <Carousel 
    
     /*
    
    
    infiniteLoop={false}
     showIndicators={false}
    autoPlay={false}
    swipeable={false}
    dynamicHeight={false}*/
    showThumbs={false}
    showStatus={false}

    >
    <div>
        <img alt="" src={book01} width="640px" height="480px" />
  
    </div>
    <div>
        <img alt="" src={book02} width="640px" height="480px"  />
     
    </div>
    <div>
        <img alt="" src={book03} width="640px" height="480px"  />
     
    </div>    
    </Carousel>
  </div>
  )
  
}


export default Index3Page