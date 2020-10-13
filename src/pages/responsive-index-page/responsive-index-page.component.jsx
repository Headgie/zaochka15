import React, {Fragment, useRef, useEffect, useState, useLayoutEffect} from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery } from 'react-responsive'
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

function CaptureResize(props) {
	const {captureRef} = props;
	const [size, setSize] = useState({});
	const [initialSize, setInitialSize] = useState({});
  const [initialHeight, setInitialHeight] = useState({});


  function updateSize() {
    //setSize(captureRef.current.getBoundingClientRect());
    setSize({height: captureRef.current.offsetHeight, width: captureRef.current.offsetWidth});
    console.log("oh", captureRef.current.offsetHeight, "ch", captureRef.current.getBoundingClientRect().height);
	}
	function updateInitialSize() {
		setInitialSize(captureRef.current.getBoundingClientRect());
		setInitialHeight(captureRef.current.getBoundingClientRect().height);
	}
	 useEffect(() => {
			if(Object.keys(initialSize).length === 0)
			{
				console.log("updateInitialSize", initialSize);
				updateInitialSize() ;
			};
		
		}, [initialHeight] );



  useLayoutEffect(() => {
		console.log("uslayouteffect", size);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => 
      window.removeEventListener("resize", updateSize);
  }, []);

  return props.children(initialSize,size)
}

const scrollToRef = (ref) =>{window.scrollTo(0, ref.current.offsetTop-64) ;} 

const ResponsiveIndexPage = (props) => {
  const buyRef = useRef(null);
  const homeRef = useRef(null);
	const c = useRef(null);

  const arrLength = cardData.length;
  const [elRefs, setElRefs] = React.useState([]);
  const [showAuthorList, setShowAuthorList] = useState(false);

  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  
  const isComp = useMediaQuery({
    query: 'only screen and (min-device-width : 1024px) and (orientation : landscape)'
  })

  const [windowSize, setWindowSize] = React.useState({
    width:  document.body.clientWidth, //window.innerWidth,
    height: document.body.clientHeight      // window.innerHeight,
  });

  
  //  const {height, width } = useWindowSize();
 
 

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
      console.log (currPos.y, isShow, showAuthorList);
      if (currPos.y > -102) setHideOnScroll(true)
      else if ((isShow !== hideOnScroll) && (showAuthorList===false)) setHideOnScroll(isShow)
    },
    [hideOnScroll, showAuthorList],
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
    <Fragment>
			<CaptureResize captureRef={c}>
				{(initialSize, size) =>{
					
					setHeight(size.height);
					setWidth(size.width);
				/*	setInitialHeight(initialSize.height);
					setInitialWidth(initialSize.width);*/

					// console.log(size.height);
					return    (
					<React.Fragment>
          <div ref={c} className={ip("height-listener",{show: hideOnScroll})}>
{/*
          {size.width}x{size.height}
*/}
          </div>
				</React.Fragment>)}
			}
		</CaptureResize>

    <div className={ip()}>
  
      <div className={ip("header", {show: hideOnScroll })}>


        <div className={ip("header-conatiner")}>

          <div className={ip("header-caption", {show: hideOnScroll })}>
            <div className={ip("menu-button",{pressed:showAuthorList })} 
              onClick={()=>{ 
                 setShowAuthorList(!showAuthorList); 
              }}>
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
            style={{minHeight: (showAuthorList || isComp) ?`${height+(isComp?-72:72)}px`:"0px", maxHeight: (showAuthorList || isComp)?`${height+(isComp?-72:72)}px`:"0px"}} 
          >
            <div className={ip("menu-authors")} style={{minHeight:`${height+(isComp?-72:72)}px`, maxHeight: `${height+(isComp?-72:72)}px`}} >
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


     
      <div className={ip("main",  {show: hideOnScroll })}>
{ /*      <ImageFiller 
						image={book01} imageHeight={667} imageWidth={1000}
            containerHeight={height} containerWidth={width} />
*/ }  

      <div className={ip("carousel-section")} ref={homeRef}
					style={
						{
							minHeight:`${height}px`,
							maxHeight:`${height}px`,
              height: `${height}px`,
              width: `${width}px`
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
            containerHeight={height} containerWidth={width} />
            <ImageFiller 
            image={book02} imageHeight={667} imageWidth={1000}
            containerHeight={height} containerWidth={width} />
            <ImageFiller 
            image={all} imageHeight={667} imageWidth={1000}
            containerHeight={height} containerWidth={width} />
											
					</Carousel>
				</div>

        <div className={ip("section")} >
				<p>
						Сборник стихов «Зачетная книжка» объединил под одной обложкой произведения людей разного возраста, опыта и профессий, однажды пришедших учиться в Литературный институт им. Горького и оказавшихся на одном курсе. Шесть лет мы спорили, смеялись, слушали лекции, спали на лекциях, обсуждали тексты друг друга на семинарах, дружно жили в общаге, гуляли по летней и зимней Москве, читали стихи Пушкину на бульваре. Несмотря на то, что институт остался за плечами пять лет назад, мы все так же дороги друг другу, собираемся на вечера и читаем новые стихи, радуемся победам личным и творческим. Издание совместного сборника стало логичным и неизбежным продолжением общего студенческого прошлого.
						
						В сборнике опубликованы произведения следующих авторов: Елена Борок, Катерина Корнеенкова, Дарья Лебедева, Валерия Ободзинская, Дарья Пиотровская, Павел Пушкарев, Татьяна Скрундзь, Елизавета Станиславская, Валерия Хаддадин, Диана Чуяшева, Варвара Юшманова.
						
						
					</p>			
				</div> 


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
  
    </Fragment>
    )
};

export default ResponsiveIndexPage;
