import React from "react";
import block from "bem-cn";
import "./image-filler.styles.scss";

const ImageFiller = ({image, imageHeight, imageWidth, containerHeight, containerWidth}) => {
  const ip = block("image-filler");
  const width = containerWidth;
  const height = containerHeight
  const ratio = imageWidth / imageHeight;
  return(
  <div className={ip("image-container")} style={{
    width: `${width}px`,
    height: `${height }px`,
    }}>
    <img className={ip("image-fit")} src={image} alt=""  
      style={{
        width: `${(width/height)<ratio? height*ratio:width  }px`,
        height: `${(width/height)<ratio? height: width/ratio }px`,
    }}/> 
  </div>

  )
}

export default ImageFiller;