import React, { useState, useLayoutEffect, useEffect, Fragment, useRef } from "react";

import block from "bem-cn";

import vk from "../../assets/icons/vk-reproductor.svg";
import fb from "../../assets/icons/facebook.svg";
import email from "../../assets/icons/email.svg";
import cart from "../../assets/icons/cart.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

import book from "../../assets/photo/book.png";
import all from "../../assets/photo/all.png";

import cardData from "../../data/cards-poets.json";

import "./index-simple-page.styles.scss";

function CaptureResize(props) {
	const {captureRef} = props;
	const [size, setSize] = useState({});
	const [initialSize, setInitialSize] = useState({});
	const [initialHeight, setInitialHeight] = useState({});
  function updateSize() {
    setSize(captureRef.current.getBoundingClientRect());
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


const IndexSimplePage = (props) => {
	const ip = block("index-simple-page");
	const [showAuthorList, setShowAuthorList] = useState(false);
	const c = useRef(null);
	const [height, setHeight] = useState();
	const [initialHeight, setInitialHeight] = useState();
	return (
		<Fragment>

			<CaptureResize captureRef={c}>
			{(initialSize, size) =>{
				
				setHeight(size.height);
				setInitialHeight(initialSize.height);
				// console.log(size.height);
				return    (
				<React.Fragment>
				<div ref={c} className={ip("height-listener")}></div>
			</React.Fragment>)}
		}
		
		</CaptureResize>

		<div className="container">
			<header role="banner" className="bg-light">
				<div className={ip("brand")}>Зачётная книжка
					<div className={ip("menu-button",{pressed:showAuthorList })} onClick={()=>setShowAuthorList(!showAuthorList)}>
						{showAuthorList?
							<img src={close} width="26"  height="26" alt="Close"  /> :
							<img src={menu} width="28"  height="28" alt="Menu"  />
						}
					</div>
				</div>
				<div className={ip("slide", {visible: showAuthorList})} 
				//style={{minHeight: showAuthorList?height:"0px", maxHeight: showAuthorList?height:"0px"}} 
				>
					<div className={ip("menu-authors")} style={{minHeight:`calc( ${height}px - 4rem)`, maxHeight: `calc( ${height}px - 4rem)`}} >
						<div className={ip("menu-author")}>Елена Борок</div>
						<div className={ip("menu-author")}> Катерина Корнеенкова</div>
						<div className={ip("menu-author")}>Дарья Лебедева</div>
						<div className={ip("menu-author")}>Валерия Ободзинская</div>
						<div className={ip("menu-author")}>Дарья Пиотровская</div>
						<div className={ip("menu-author")}>Павел Пушкарёв</div>
						<div className={ip("menu-author")}>Татьяна Скрундзь</div>
						<div className={ip("menu-author")}>Валерия Хаддадин</div>
						<div className={ip("menu-author")}>Диана Чуяшева</div>
						<div className={ip("menu-author")}>Варвара Юшманова</div>
					</div>
				</div>
				<nav>
					<ul>
						<li>
							<a href="#main"><img src={vk} width="28"  height="28" alt="VK"  /></a>
						</li>
						<li>
							<a href="/about"><img src={fb}  width="30"  height="30"  alt="FB" /></a>
						</li>
						<li>
							<a href="/products"><img src={email}  width="30"  height="30" alt="Email" /></a>
						</li>
						<li>
							<a href="/login"><img src={cart}  width="30"  height="30" alt="Buy" /></a>
						</li>
					</ul>
				</nav>
			</header>
			<main className={ip("main")}>
				<div className={ip("section")} 
				 style={{minHeight:`calc( ${initialHeight}px - 8rem)`, maxHeight: `calc( ${initialHeight}px - 8rem)`}}
				
				>
					<h2>Content goes here</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
						deserunt, suscipit velit itaque vitae necessitatibus, impedit pariatur
						eos. Pariatur beatae sed repellendus iusto doloribus quidem asperiores
						quia exercitationem sint dicta!
					</p>			
				</div>

					{cardData.map((card, index)=>(
						<div key={card.id} className={ip("section")} style={{minHeight:`calc( ${height}px - 8rem)`, maxHeight: `calc( ${height}px - 8rem)`}}>
							<h2>{card.name}</h2>
							<p>{card.bio}</p>
							<br/>
							<h2>{card.caption}</h2>
							<p>{card.poem.split('\n').map(line => <Fragment>{line}<br/></Fragment>)}</p>
						</div>

						)
					)}
			</main>
		</div>
		</Fragment>
	);
};

export default IndexSimplePage;
