import React, { useState, useLayoutEffect, Fragment, useRef } from "react";

import block from "bem-cn";

import vk from "../../assets/icons/vk-reproductor.svg";
import fb from "../../assets/icons/facebook.svg";
import email from "../../assets/icons/email.svg";
import cart from "../../assets/icons/cart.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

import book from "../../assets/photo/book.png";
import all from "../../assets/photo/all.png";

import "./index2-page.styles.scss";

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
	return (
    <Fragment>
    <CaptureResize captureRef={c}>
      {(size) =>{
        
        setHeight(size.height);
        // console.log(size.height);
        return    (
        <React.Fragment>
        <div ref={c} className={ip("height-listener")}>{size.height}</div>
      </React.Fragment>)}
    }
    
    </CaptureResize>
    <div className={ip()}>
      <div className={ip("scroll")}>
        <div className={ip("container")}>
          <div className={ip("section")} style={{minHeight: height, maxHeight: height}}>dsljdkgf</div>
          <div className={ip("section")} style={{minHeight: height, maxHeight: height}}>dgdre </div>
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