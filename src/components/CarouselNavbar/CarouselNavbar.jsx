import { Button, Carousel } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { HeartCircle, ShoppingCart, SidebarLeft, User } from "iconsax-react";
import carousel1 from "../../assets/images/carousel1.jpeg";
import carousel2 from "../../assets/images/carousel2.jpeg";
import carousel3 from "../../assets/images/carousel3.jpeg";
import carousel4 from "../../assets/images/carousel4.jpeg";
import decred from "../../assets/images/decred.svg";
import "./CarouselNavbar.style.scss";
import { useEffect, useState } from "react";
import SidebarCanvas from "../SidebarCanvas/SidebarCanvas";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function CarouselNavbar() {
  const CarouselImg = [
    { id: 1, image: carousel1 },
    { id: 2, image: carousel2 },
    { id: 3, image: carousel3 },
    { id: 4, image: carousel4 },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : "navbar-box"}>
        <div className="navbar-body">
          <img src={decred} className="nav-logo" />
          <Navbar.Brand className="logo-title" href="#home">
            <span style={{ color: "white" }}>O</span>RNAMENTA
          </Navbar.Brand>
          <div className="navbar-subBody">
            <Nav className="nav-links">
              <Nav.Link href="/home" className="nav-links-title">
                Home
              </Nav.Link>
              |
              <Nav.Link href="#link" className="nav-links-title">
                About
              </Nav.Link>
              |
              <Nav.Link
                href="/dashboard/contact-us"
                className="nav-links-title"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </div>
        </div>
        <div className="navbar-social">
          <HeartCircle size="24" color="#f2b827" />|
          <ShoppingCart size="20" color="#f2b827" />|
          <User className="user-logo" size="20" color="#f2b827" />|
          <SidebarLeft size="20" color="#f2b827" onClick={toggleShow} />
        </div>
      </Navbar>
      <Carousel className="carousel-main" fade data-bs-theme="dark">
        {CarouselImg.map((data) => (
          <Carousel.Item
            className="carousel-item-main"
            interval={4000}
            key={data.id}
          >
            <div className="overlay">
              <img
                className="d-block w-100"
                src={data.image}
                alt={`Slide ${data.id + 1}`}
              />
            </div>
            <Carousel.Caption className="carousel-caption">
              <h1 className="carousel-main-title">
                <span style={{ color: "#f2b827" }}>O</span>rnamenta Design
              </h1>
              <h5 className="carousel-sub-title">
                small change, big difference
              </h5>
              <div className="btns-box">
                <ButtonComponent
                  className="projects-btn"
                  title={"Our Projects"}
                />
                <ButtonComponent className="items-btn" title={"Our Items"} />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <SidebarCanvas handleCloseItem={handleClose} showItem={show} />
    </div>
  );
}

export default CarouselNavbar;
