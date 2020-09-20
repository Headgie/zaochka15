import React, { Fragment } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container, Row, Col, Image
} from "react-bootstrap";


import block from "bem-cn";

import vk from "../../assets/icons/vk-reproductor.svg";
import fb from "../../assets/icons/facebook.svg";
import email from "../../assets/icons/email.svg";

import book from "../../assets/photo/book.png";
import all from "../../assets/photo/all.png";

import "./index-page.styles.scss";

const IndexPage = (props) => {
  const ip = block("index-page");

  return (
    <Fragment>
    <Navbar bg="light" expand="sm" sticky="top">
      {/*<Navbar.Brand href="#home">Поэтический сборник «Зачётная книжка»</Navbar.Brand>*/}
      <Navbar.Brand href="#home">Зачётная книжка</Navbar.Brand>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <div className={ip("navbar-icons")}>
      <Nav.Link href="/home" className={ip("link-icon").toString()}><img src={vk} width="28"  height="28" alt="VK"  /> </Nav.Link>
      <Nav.Link href="#home" className={ip("link-icon").toString()}> <img src={fb}  width="30"  height="30"  alt="FB" /> </Nav.Link>
      <Nav.Link href="#home" className={ip("link-icon").toString()}> <img src={email}  width="30"  height="30" alt="Email" /> </Nav.Link>
      </div>
  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
        <Nav.Link href="/home">Елена Борок</Nav.Link>
        <Nav.Link href="/home">Дарья Лебедева</Nav.Link>
        <Nav.Link href="/home">Елена Борок</Nav.Link>
        <Nav.Link href="/home">Дарья Лебедева</Nav.Link>
        <Nav.Link href="/home">Елена Борок</Nav.Link>
        <Nav.Link href="/home">Дарья Лебедева</Nav.Link>
        <Nav.Link href="/home">Елена Борок</Nav.Link>
        <Nav.Link href="/home">Дарья Лебедева</Nav.Link>                        
      </Navbar.Collapse>
    </Navbar>
    
    <Container>
      <Row>
        <Col sm={12} md={6} fluid>              
          <Image  src={book}  fluid  />
          </Col>
        <Col sm={12} md={6}>
        <p>
        Сборник стихов «Зачетная книжка» объединил под одной обложкой произведения людей разного возраста, опыта и профессий, однажды пришедших учиться в Литературный институт им. Горького и оказавшихся на одном курсе. Шесть лет мы спорили, смеялись, слушали лекции, спали на лекциях, обсуждали тексты друг друга на семинарах, дружно жили в общаге, гуляли по летней и зимней Москве, читали стихи Пушкину на бульваре. Несмотря на то, что институт остался за плечами пять лет назад, мы все так же дороги друг другу, собираемся на вечера и читаем новые стихи, радуемся победам личным и творческим. Издание совместного сборника стало логичным и неизбежным продолжением общего студенческого прошлого.
        В сборнике опубликованы произведения следующих авторов: Елена Борок, Екатерина Корнеенкова, Дарья Лебедева, Валерия Ободзинская, Дарья Пиотровская, Павел Пушкарев, Татьяна Скрундзь, Елизавета Станиславская, Валерия Хаддадин, Диана Чуяшева, Варвара Юшманова.

        </p>
        
        </Col>
      </Row>
      <Row>
      <Col> <Image  src={all} fluid/></Col>
      </Row>
    </Container>

</Fragment>
  );
};

export default IndexPage;
