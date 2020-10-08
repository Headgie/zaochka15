import React, { useState, useLayoutEffect, Fragment, useRef } from "react";

import block from "bem-cn";

import book01 from "../../assets/photo/book01_resize.jpg";


import "./index2-page.styles.scss";

import ImageFiller from "../../components/image-filler/image-filler.component";

function CaptureResize(props) {
  const {captureRef} = props;
  function updateSize() {
    setSize(captureRef.current.getBoundingClientRect());
  }
  useLayoutEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => 
      window.removeEventListener("resize", updateSize);
  }, []);
  const [size, setSize] = useState({});
  return props.children(size)
}



const Index2Page = (props) => {
	const ip = block("index2-page");
  const [showAuthorList, setShowAuthorList] = useState(false);
  const c = useRef(null);
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
	return (
    <Fragment>
    <CaptureResize captureRef={c}>
      {(size) =>{
        
        setHeight(size.height);
        setWidth(size.width);
        // console.log(size.height);
        return    (
        <React.Fragment>
        <div ref={c} className={ip("height-listener")}>
         {`  ${size.height}x${size.width} ${4032/3024} ${size.width/size.height} `} 
        </div>
      </React.Fragment>)}
    }
    
    </CaptureResize>
    <div className={ip()}>
      <div className={ip("scroll")}>
        <div className={ip("container")}>
          <div className={ip("section")} style={{minHeight: height, maxHeight: height}}>
            <ImageFiller 
              image={book01} imageHeight={3024} imageWidth={4032}
              containerHeight={height} containerWidth={width} />
          </div>        
          <div className={ip("section")} style={{minHeight: height, maxHeight: height}}>
            <div className={ip("image-container")} style={{
              width: `${width}px`,
              height: `${height }px`,
          }}>
              <img className={ip("image-fit")} src={book01} alt="Close"  
                style={{
                  width: `${(width/height)<(4032/3024)? height*(4032/3024):width  }px`,
                  height: `${(width/height)<(4032/3024)? height: width/(4032/3024) }px`,
              }}/> 
              </div>
          </div>
          <div className={ip("section")} style={{minHeight: height, maxHeight: height}}>
          
          
          </div>
          <div className={ip("section")} style={{minHeight: height, maxHeight: height}}>234</div>
          <div className={ip("section")} style={{minHeight: height, maxHeight: height}}>qweqweqwe</div>
          <div className={ip("section")} style={{minHeight: height, maxHeight: height}}>hjkhjkhk</div>
        </div>
      </div>
    </div>
    </Fragment>
  )
  }

export default Index2Page;