import { Nav, Navbar } from "react-bootstrap";
import decred from "../../assets/images/decred.svg";
import "./Navbar.style.scss";
import { HeartCircle, ShoppingCart, SidebarLeft, User } from "iconsax-react";
import SidebarCanvas from "../SidebarCanvas/SidebarCanvas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavbarComponent = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <Navbar expand="lg" className="navbar-box-component">
      <div className="navbar-body-component">
        <img src={decred} className="nav-logo-component" />
        <Navbar.Brand className="logo-title-component" href="#home">
          <span style={{ color: "white" }}>O</span>RNAMENTA
        </Navbar.Brand>
        <div className="navbar-subBody-component">
          <Navbar.Toggle aria-controls="basic-navbar-nav-component" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links-component">
              <Nav.Link href="/home" className="nav-links-title-component">
                Home
              </Nav.Link>
              |
              <Nav.Link href="#link" className="nav-links-title-component">
                About
              </Nav.Link>
              |
              <Nav.Link
                href="/dashboard/contact-us"
                className="nav-links-title-component"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
      <div className="navbar-social-component">
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: "white",
            borderRadius: "50px",
            border: "0.5px solid #f2b827",
            display: "flex",
            position: "absolute",
            right: "255px",
            top: "30px",
            color: "#10244f",
            fontSize: "8px",
            fontWeight: 900,
            justifyContent: "center",
          }}
        ></div>
        <HeartCircle size="24" color="#f2b827" />|
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: "white",
            borderRadius: "50px",
            border: "0.5px solid #f2b827",
            display: "flex",
            position: "absolute",
            right: "190px",
            top: "30px",
            color: "#10244f",
            fontSize: "8px",
            fontWeight: 900,
            justifyContent: "center",
          }}
        >
          5
        </div>
        <ShoppingCart
          size="20"
          color="#f2b827"
          onClick={() => navigate("/dashboard/cart-car")}
        />
        |
        <User className="user-logo-component" size="20" color="#f2b827" />|
        <SidebarLeft size="20" color="#f2b827" onClick={toggleShow} />
        <SidebarCanvas handleCloseItem={handleClose} showItem={show} />
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
