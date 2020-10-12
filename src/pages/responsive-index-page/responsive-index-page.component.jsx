import React, {Fragment, useRef, useEffect, useState, useLayoutEffect} from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import block from "bem-cn";
import ImageFiller from "../../components/image-filler/image-filler.component";

import "./responsive-index-page.styles.scss";

import vkIcon from "../../assets/icons/vk-reproductor.svg";
import fbIcon from "../../assets/icons/facebook.svg";
import cartIcon from "../../assets/icons/cart.svg";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import book01 from "../../assets/photo/book01_resize.jpg";
import book02 from "../../assets/photo/book02_resize.jpg";
import book03 from "../../assets/photo/book03_resize.jpg";
import all from "../../assets/photo/all_resize.jpg";
import photo from "../../assets/photo/photo.js";
import cardData from "../../data/cards-poets.js";

import { useScrollPosition } from '@n8tb1t/use-scroll-position'


import useWindowSize from "../../utils/useWindowSize";

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;



const scrollToRef = (ref) =>{window.scrollTo(0, ref.current.offsetTop-64) ;} 

const ResponsiveIndexPage = (props) => {
  const buyRef = useRef(null);
  const homeRef = useRef(null);


  const arrLength = cardData.length;
  const [elRefs, setElRefs] = React.useState([]);
  const [showAuthorList, setShowAuthorList] = useState(false);

 
 
  const [windowSize, setWindowSize] = React.useState({
    width:  document.body.clientWidth, //window.innerWidth,
    height: document.body.clientHeight      // window.innerHeight,
  });

  
   const {height, width } = useWindowSize();
 
 

 	useEffect(() => {
		// add or remove refs
		setElRefs(elRefs => (    
			Array(arrLength).fill().map((_, i) => elRefs[i] || React.createRef())
		));
	}, [arrLength]);

  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      console.log (currPos.y);
      if(currPos.y>-128) setHideOnScroll(true)
      else 
      if (isShow !== hideOnScroll ) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    false,
    false,
    300
  )
 
  const handleMenuClick = (index) => {
		scrollToRef(elRefs[index]);
    setShowAuthorList(false);
    setHideOnScroll(true);
		
	}
  //const ip = block("responsive-index-page");
  const ip = block("responsive-index-page");
  return (
    <div className={ip()}>
  
      <div className={ip("header", {show: hideOnScroll })}>


        <div className={ip("header-conatiner")}>

          <div className={ip("header-caption", {show: hideOnScroll })}>
                     <div className={ip("menu-button",{pressed:showAuthorList })} onClick={()=>setShowAuthorList(!showAuthorList)}>
            {showAuthorList?
              <img src={closeIcon} width="28"  height="28" alt="Close"  /> :
              <img src={menuIcon} width="28"  height="28" alt="Menu"  />
            }
          </div>
           <div className={ip("header-caption-inner")}>
              Зачётная книжка        
            </div>
          </div>

          <div className={ip("slide", {visible: showAuthorList})} 
            //style={{minHeight: showAuthorList?height:"0px", maxHeight: showAuthorList?height:"0px"}} 
          >
            <div className={ip("menu-authors")} style={{minHeight:`calc( ${height}px - 4rem)`, maxHeight: `calc( ${height}px - 4rem)`}} >
              {cardData.map((item, index) => 
                <div className={ip("menu-author")} onClick={()=>handleMenuClick(index)}>{capitalize(item.name.toLowerCase())}</div>
                )}
            </div>
          </div>    




          <div className={ip("buttons-bar", {show: hideOnScroll })}>
            <div className={ip("bar-button")}  onClick={()=> window.open(`https://vk.com/zachetnaya_knizhka`, "_blank")}>
              <img src={vkIcon} width="28"  height="28" alt="VK"  />
            </div>
            <div className={ip("bar-button")}  onClick={()=> window.open(`https://www.facebook.com/events/606944816662273/`, "_blank")}>
              <img src={fbIcon}  width="30"  height="30"  alt="FB" />
            </div>
            <div className={ip("bar-button")} onClick={()=>scrollToRef(buyRef)}><img src={cartIcon}  width="30"  height="30" alt="Buy" /></div>
          </div> 
        </div>


      </div>
      
      <div className={ip("main")}>

{/*
      <div className={ip("carousel-section")} ref={homeRef}
					style={
						{
							minHeight:`${windowSize.height-72}px`,
							maxHeight:`${windowSize.height-72}px`,
              height: `${windowSize.height-72}px`,
              width: `${windowSize.width<=1440?windowSize.width:1440}px`
						}}			
					>
					<Carousel
						
					// infiniteLoop={false}
					// showIndicators={false}
					// autoPlay={false}
					// swipeable={false}
					// dynamicHeight={false}
					
					autoPlay={true}
					infiniteLoop={true}
					showThumbs={false}
					showStatus={false}
					>
						<ImageFiller 
						image={book01} imageHeight={667} imageWidth={1000}
						containerHeight={windowSize.height-72} containerWidth={windowSize.width<=1440?windowSize.width:1440} />
						<ImageFiller 
						image={book02} imageHeight={750} imageWidth={1000}
            // containerHeight={height-72} containerWidth={width<=1440?width:1440} />
            containerHeight={windowSize.height-72} containerWidth={windowSize.width<=1440?windowSize.width:1440} />
						<ImageFiller 
						image={book03} imageHeight={750} imageWidth={1000}
						containerHeight={windowSize.height-72} containerWidth={windowSize.width<=1440?windowSize.width:1440} />
											
					</Carousel>
				</div>

          */ }
        {cardData.map((card, index)=>(
          <div key={card.id} className={ip("main-section")}>
            <div ref={elRefs[index]} ></div>
            <div className={ip("card-name-container")}>
              <div className={ip("card-name-before")}>&nbsp;</div>
              <div className={ip("card-name")}>
              {card.name}
              </div>
            </div>

            <div className={ip("card-bio-photo")}>
              <div className={ip("card-photo")}>
              <img src={
                photo.find(item => item.name===card.photo).src
              } alt={card.name}/> 
              </div>
              <div className={ip("card-bio")}>
                  {card.bio}
              </div>
            </div>

            <div className={ip("card-poem")}>
                <div className={ip("card-poem-caption")}>
                 {card.caption}
                </div>
                
                {card.epigraph?
                  <Fragment>
                    <div className={ip("card-poem-epi")}>{card.epigraph}</div>
                    <div className={ip("card-poem-epi-author")}>{card.epiauthor}</div>
                  </Fragment>
                :null}
              
              {card.poem.split('#p').map(line => 
                <p>{
                line.split('#n').map(line => <Fragment>{line}<br/></Fragment>)
                }</p>
                )
              }
            </div>
          </div>

          ))
        }

      </div>
    </div>
  )
};

export default ResponsiveIndexPage;
