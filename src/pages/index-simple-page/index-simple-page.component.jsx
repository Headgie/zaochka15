import React, { useState, useLayoutEffect, useEffect, Fragment, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import block from "bem-cn";

import vkIcon from "../../assets/icons/vk-reproductor.svg";
import fbIcon from "../../assets/icons/facebook.svg";
import emailIcon from "../../assets/icons/email.svg";
import cartIcon from "../../assets/icons/cart.svg";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

import book01 from "../../assets/photo/book01_resize.jpg";
import book02 from "../../assets/photo/book02_resize.jpg";
import book03 from "../../assets/photo/book03_resize.jpg";
import all from "../../assets/photo/all.png";

import photo from "../../assets/photo/photo.js";

import lebedeva from "../../assets/photo/03_lebedeva.jpg";

import cardData from "../../data/cards-poets.js";

import ExpandSection from "../../components/expand-section/expand-section.component";
import Counter from "../../components/counter/counter.component";
import ImageFiller from "../../components/image-filler/image-filler.component";

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

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-64)  

const IndexSimplePage = (props) => {
	const ip = block("index-simple-page");
	const [showAuthorList, setShowAuthorList] = useState(false);
	const c = useRef(null);
	const [height, setHeight] = useState();
	const [width, setWidth] = useState();
	const [initialHeight, setInitialHeight] = useState();
	const [initialWidth, setInitialWidth] = useState();
	const buyRef = useRef(null);
	const recieveRef = useRef(null);
	const recieveRfPostRef = useRef(null);
	const [hard, setHard] = useState(false);
	const [soft, setSoft] = useState(false);
	const [recieve, setRecieve] = useState("self");
	const [recieveStyle, setRecieveStyle] = useState({height: "0px"});
	const [recieveInnerHeight, setRecieveInnerHeight] = useState(0);
  const [showModal, setShowModal] = useState(false)

	const [index, setIndex] = useState("");
	const [city, setCity] = useState("");
	const [address, setAddress] = useState("");
	const [fio, setFio] = useState("");
	const [count, setCount] = useState(1);

	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [comment, setComment] = useState("");

	return (
		<Fragment>

			<CaptureResize captureRef={c}>
			{(initialSize, size) =>{
				
				setHeight(size.height);
				setWidth(size.width);
				setInitialHeight(initialSize.height);
				setInitialWidth(initialSize.width);

				// console.log(size.height);
				return    (
				<React.Fragment>
				<div ref={c} className={ip("height-listener")}></div>
			</React.Fragment>)}
		}
		
		</CaptureResize>
		<div className={ip("modal-dialog", {visible: showModal})} 
			style={showModal?{height:`${height}px`}:{height:`0px`}} >
			<div className={ip("modal-dialog-content")}
			style={{minHeight:`calc( ${height}px - 0rem)`, maxHeight: `calc( ${height}px - 0rem)`}}>
			<p>
			{`Спасибо, ${userName}!
			Вы заказали "Зачетную книжку": ${hard?`печатную (${count} экз)`:``} ${hard && soft?` и `: ``} ${soft?`электронную`:``}.
			
			Адрес почтовой доставки: 111123, Якутск, ул. Ивановская, д.5, кв. 15
			ФИО получателя: Иванов Иван Иванович
			
			Ожидайте письма на указанный e-mail: user@domen.ru 
			Если у вас возникли вопросы или письмо долго не приходит, обращайтесь: `}
			</p>
			<button className={ip("button")} onClick={()=>setShowModal(false)}>OK</button>
			</div>
			
		</div>
		<div className={ip({showAuthorList: showAuthorList})}>
			<header role="banner" className="bg-light">
				<div className={ip("brand")}>Зачётная книжка
					<div className={ip("menu-button",{pressed:showAuthorList })} onClick={()=>setShowAuthorList(!showAuthorList)}>
						{showAuthorList?
							<img src={closeIcon} width="26"  height="26" alt="Close"  /> :
							<img src={menuIcon} width="28"  height="28" alt="Menu"  />
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
							<div className={ip("navbar-button")}>
								<img src={vkIcon} width="28"  height="28" alt="VK"  />
							</div>
						</li>
						<li>
							<a href="/about"><img src={fbIcon}  width="30"  height="30"  alt="FB" /></a>
						</li>
						<li>
							<div className={ip("navbar-button")} onClick={()=>scrollToRef(buyRef)}><img src={cartIcon}  width="30"  height="30" alt="Buy" /></div>
						</li>
					</ul>
				</nav>
			</header>
			<main className={ip("main")}>
				<div className={ip("carousel-section")}
					style={
						{
							minHeight:`${height-128}px`,
							maxHeight:`${height-128}px`,
							height: `${height-128}px`,
						}}			
					>
					<Carousel
						/*
					infiniteLoop={false}
					showIndicators={false}
					autoPlay={false}
					swipeable={false}
					dynamicHeight={false}*/
					
					autoPlay={true}
					infiniteLoop={true}
					showThumbs={false}
					showStatus={false}
					>
						<ImageFiller 
						image={book01} imageHeight={667} imageWidth={1000}
						containerHeight={height-128} containerWidth={width} />
						<ImageFiller 
						image={book02} imageHeight={750} imageWidth={1000}
						containerHeight={height-128} containerWidth={width} />
						<ImageFiller 
						image={book03} imageHeight={750} imageWidth={1000}
						containerHeight={height-128} containerWidth={width} />								
					</Carousel>
				</div>

				<div className={ip("section")} >
				<p>
						Сборник стихов «Зачетная книжка» объединил под одной обложкой произведения людей разного возраста, опыта и профессий, однажды пришедших учиться в Литературный институт им. Горького и оказавшихся на одном курсе. Шесть лет мы спорили, смеялись, слушали лекции, спали на лекциях, обсуждали тексты друг друга на семинарах, дружно жили в общаге, гуляли по летней и зимней Москве, читали стихи Пушкину на бульваре. Несмотря на то, что институт остался за плечами пять лет назад, мы все так же дороги друг другу, собираемся на вечера и читаем новые стихи, радуемся победам личным и творческим. Издание совместного сборника стало логичным и неизбежным продолжением общего студенческого прошлого.
						
						В сборнике опубликованы произведения следующих авторов: Елена Борок, Катерина Корнеенкова, Дарья Лебедева, Валерия Ободзинская, Дарья Пиотровская, Павел Пушкарев, Татьяна Скрундзь, Елизавета Станиславская, Валерия Хаддадин, Диана Чуяшева, Варвара Юшманова.
						
						
					</p>			
				</div>

				{cardData.map((card, index)=>(
					<div key={card.id} className={ip("section")}
						//style={{minHeight:`calc( ${height}px - 8rem)`, maxHeight: `calc( ${height}px - 8rem)`}}
						>
						<p><h2>{card.name}</h2></p>
						<div className={ip("card-bio-photo")}>
							<div className={ip("card-photo")}>
							<img src={
								photo.find(item => item.name===card.photo).src
							
							} alt={card.name}/> 
							</div>
							<div className={ip("card-bio")}>
								<p>
									{card.bio}
								</p>
							</div>
						</div>

						<div className={ip("card-poem")}>
							<p>
								<div className={ip("poem-caption")}>
									<h2>{card.caption}</h2>
								</div>
								{card.epigraph?
									<p>
										<div className={ip("poem-epi")}>{card.epigraph}</div>
										<div className={ip("poem-epi")}>{card.epiauthor}</div>
									</p>
									:null}
							</p>
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
				<div ref={buyRef} className={ip("section")} >
						<span  className={ip("h1")}>Заказать книгу </span>
						<label className={ip("h2")}>
							<input type="checkbox" className={ip("checkbox")} checked={hard} 
							onChange={()=>{setHard(!hard)}}/>
							Печатная книга в твердом переплете 
						</label>
						<div className={ip("comment")}>
							Зачетная книжка – М.: Стеклограф, 2020. <br/>
							Размеры: 135х196х14 мм, 184 с.<br/>
							ISBN 978-5-4465-2677-2<br/>
						</div>
						<div className={ip("price")}>500₽</div>
						<ExpandSection visible={hard  }>
							<label  className={ip("h2")}>
								<input type="radio" name="group" className={ip("checkbox")} value="self" 
									checked={recieve==="self"} onChange={e => {
											setRecieve(e.target.value) 
									}}/>
									Самовывоз
							</label>
							<div className={ip("comment")}>
								Москва, м. Достоевская
							</div>
							<label  className={ip("h2")}>
								<input type="radio" name="grop" className={ip("checkbox")} value="rfPost"  
								checked={recieve==="rfPost"} onChange={e => setRecieve(e.target.value) }/>
								Доставка почтой России
							</label>	
							<div className={ip("comment")}>
								При выборе этого варианта заказчик оплачивает почтовые расходы, но получает скидку на книгу в размере 100 рублей. Оплата наложенным платежом при получении на почте. 
							</div>	
						</ExpandSection>
						
						
						<label  className={ip("h2")}>
							<input type="checkbox" className={ip("checkbox")}  checked={soft} onChange={()=>{setSoft(!soft)} }/>
							Электронная книга в форматах fb2, epub
						</label>
						<div className={ip("comment")}>
							Подходит для большинства программ для чтения электронных книг, таких как iBooks, iBouquiniste, Читай! Litres, Bookmate, ALReader, PocketBook Reader, FBReader и др. 
						</div>
						<div className={ip("price")}>300₽</div>
						<ExpandSection visible={hard || soft }>
							<div className={ip("send-rf-data")}>
								<label className={ip("send-rf-data-label")}>
									Ваше имя</label>
									<input type="text" name="name" value={userName} onChange={e=>setUserName(e.target.value)} 
										/>
								<label className={ip("send-rf-data-label")}>
									E-mail</label>
									<input type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)} />

								<label className={ip("send-rf-data-label")}>
									Номер телефона</label>
									<input type="text" name="phone" value={phone} onChange={e=>setPhone(e.target.value)} />

								<label className={ip("send-rf-data-label")}>
									Комментарий</label>
									<textarea className={ip("send-comment")} value={comment} onChange={e=>setComment(e.target.value)} />

							</div>	
						</ExpandSection>
						<ExpandSection visible={hard && recieve==="rfPost" }>
						<div className={ip("send-rf-data")}>
							<div className={ip("h2")}>Данные для получения посылки </div>

							<label className={ip("send-rf-data-label")}>
								Индекс</label>
								<input type="text" name="name" value={index} onChange={e=>setIndex(e.target.value)} />
							
							<label className={ip("send-rf-data-label")}>
								Населенный пункт</label>
								<input type="text" name="name" value={city} onChange={e=>setCity(e.target.value)} />
							
							<label className={ip("send-rf-data-label")}>
								Адрес
								(улица, дом, квартира)</label>		
								<input type="text" name="name" value={address} onChange={e=>setAddress(e.target.value)} />
												
							<label className={ip("send-rf-data-label")}>
								ФИО получателя	</label>	
								<input type="text" name="name" value={fio} onChange={e=>setFio(e.target.value)} />
						
							<label className={ip("send-rf-data-label")}>
								Количество книг в заказе</label>
								<Counter value={count} onChange={setCount }/>
							</div>															
						</ExpandSection>
						<ExpandSection visible={hard || soft } noPaddingBottom={true}>
							<button className={ip("button")} onClick={()=>setShowModal(true)} >Оформить заказ</button>		
						</ExpandSection>
				</div>
			</main>
		</div>
		</Fragment>
	);
};

export default IndexSimplePage;
