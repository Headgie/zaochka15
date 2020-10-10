import React, {useRef} from "react";

import block from "bem-cn";

import "./responsive-index-page.styles.scss";

import vkIcon from "../../assets/icons/vk-reproductor.svg";
import fbIcon from "../../assets/icons/facebook.svg";
import cartIcon from "../../assets/icons/cart.svg";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";


const scrollToRef = (ref) =>{window.scrollTo(0, ref.current.offsetTop-64) ;} 

const ResponsiveIndexPage = (props) => {
	const buyRef = useRef(null);

  //const ip = block("responsive-index-page");
  const ip = block("index-simple-page");
  return (
    <div className="container">
    <header role="banner">
      <h1>Зачётная книжка</h1>
      <nav>
      <ul>
        <li>
          <div className={ip("navbar-button")}  onClick={()=> window.open(`https://vk.com/zachetnaya_knizhka`, "_blank")}>
            <img src={vkIcon} width="28"  height="28" alt="VK"  />
          </div>
        </li>
        <li>
          <div className={ip("navbar-button")}  onClick={()=> window.open(`https://www.facebook.com/events/606944816662273/`, "_blank")}>
            <img src={fbIcon}  width="30"  height="30"  alt="FB" />
          </div>
        </li>
        <li>
          <div className={ip("navbar-button")} onClick={()=>scrollToRef(buyRef)}><img src={cartIcon}  width="30"  height="30" alt="Buy" /></div>
        </li>
      </ul>
    </nav>
    </header>
    <main id="main">
      <h2>Content goes here</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt, suscipit velit itaque vitae necessitatibus, impedit pariatur eos. Pariatur beatae sed repellendus iusto doloribus quidem asperiores quia exercitationem sint dicta!</p>
      <h2>Content goes here</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt, suscipit velit itaque vitae necessitatibus, impedit pariatur eos. Pariatur beatae sed repellendus iusto doloribus quidem asperiores quia exercitationem sint dicta!</p>
      <h2>Content goes here</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt, suscipit velit itaque vitae necessitatibus, impedit pariatur eos. Pariatur beatae sed repellendus iusto doloribus quidem asperiores quia exercitationem sint dicta!</p>

      <div ref={buyRef} className={ip("section")} >
      <h2>Buy1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt, suscipit velit itaque vitae necessitatibus, impedit pariatur eos. Pariatur beatae sed repellendus iusto doloribus quidem asperiores quia exercitationem sint dicta!</p>
      <h2>Buy2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt, suscipit velit itaque vitae necessitatibus, impedit pariatur eos. Pariatur beatae sed repellendus iusto doloribus quidem asperiores quia exercitationem sint dicta!</p>
      <h2>Buy3</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt, suscipit velit itaque vitae necessitatibus, impedit pariatur eos. Pariatur beatae sed repellendus iusto doloribus quidem asperiores quia exercitationem sint dicta!</p>
      <h2>Buy4</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt, suscipit velit itaque vitae necessitatibus, impedit pariatur eos. Pariatur beatae sed repellendus iusto doloribus quidem asperiores quia exercitationem sint dicta!</p>

      </div>
    </main>
  </div>
  )
};

export default ResponsiveIndexPage;
