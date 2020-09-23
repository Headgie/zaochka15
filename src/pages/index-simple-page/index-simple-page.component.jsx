import React, { useState, Fragment } from "react";

import block from "bem-cn";

import vk from "../../assets/icons/vk-reproductor.svg";
import fb from "../../assets/icons/facebook.svg";
import email from "../../assets/icons/email.svg";
import cart from "../../assets/icons/cart.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

import book from "../../assets/photo/book.png";
import all from "../../assets/photo/all.png";

import "./index-simple-page.styles.scss";

const IndexSimplePage = (props) => {
	const ip = block("index-simple-page");
	const [showAuthorList, setShowAuthorList] = useState(false);

	return (
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
				<div className={ip("slide", {visible: showAuthorList})}>
					<div className={ip("menu-authors")}>
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
			<main id="main">
				<h2>Content goes here</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
					deserunt, suscipit velit itaque vitae necessitatibus, impedit pariatur
					eos. Pariatur beatae sed repellendus iusto doloribus quidem asperiores
					quia exercitationem sint dicta!
				</p>			
				<h2>Content goes here</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
					deserunt, suscipit velit itaque vitae necessitatibus, impedit pariatur
					eos. Pariatur beatae sed repellendus iusto doloribus quidem asperiores
					quia exercitationem sint dicta!
				</p>
			</main>
		</div>
	);
};

export default IndexSimplePage;
