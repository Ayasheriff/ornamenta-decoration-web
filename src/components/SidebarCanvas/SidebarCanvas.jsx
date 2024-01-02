import { Offcanvas } from "react-bootstrap";
import "./SidebarCanvas.style.scss";
import decred from "../../assets/images/decred.svg";
import { NavLink } from "react-router-dom";

const SidebarCanvas = ({ showItem, handleCloseItem }) => {
  return (
    <div className="offcanvas-boxContainer">
      <Offcanvas
        show={showItem}
        onHide={handleCloseItem}
        scroll={true}
        placement="end"
      >
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className="canvas-header"
        >
          <div className="offcanvas-logo-title">
            <img src={decred} className="nav-logo-canvas" />
            <Offcanvas.Title className="logo-canvas-title">
              <span style={{ color: "white" }}>O</span>RNAMENTA
            </Offcanvas.Title>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="canvas-body">
          <div className="canvas-body-items">
            <NavLink to="/home" className="canvas-body-text">
              <i
                className="fa-sharp fa-solid fa-house icon-canvas-text"
                style={{ color: "#f2b827" }}
              ></i>
              Home
            </NavLink>
            <NavLink to="/dashboard" className="canvas-body-text">
              <i
                className="fa-sharp fa-solid fa-gauge icon-canvas-text"
                style={{ color: "#f2b827" }}
              ></i>
              Dashboard
            </NavLink>
            <NavLink to="/Projects" className="canvas-body-text">
              <i
                className="fa-sharp fa-solid fa-city icon-canvas-text"
                style={{ color: "#f2b827" }}
              ></i>
              Projects
            </NavLink>
            <NavLink to="/dashboard/Shopping" className="canvas-body-text">
              <i
                className="fa-sharp fa-solid fa-store icon-canvas-text"
                style={{ color: "#f2b827" }}
              ></i>
              Shopping
            </NavLink>
            <NavLink to="/Cart" className="canvas-body-text">
              <i
                className="fa-sharp fa-solid fa-cart-shopping icon-canvas-text"
                style={{ color: "#f2b827" }}
              ></i>
              Cart Items
            </NavLink>
            <NavLink to="/dashboard/favourites" className="canvas-body-text">
              <i
                className="fa-sharp fa-solid fa-heart icon-canvas-text"
                style={{ color: "#f2b827" }}
              ></i>
              Favourite Items
            </NavLink>
            <NavLink to="/dashboard/user-account" className="canvas-body-text">
              <i
                className="fa-sharp fa-solid fa-user icon-canvas-text"
                style={{ color: "#f2b827" }}
              ></i>
              User Account
            </NavLink>
            <NavLink to="/dashboard/discuss" className="canvas-body-text">
              <i
                className="fa-sharp fa-solid fa-comments icon-canvas-text"
                style={{ color: "#f2b827" }}
              ></i>
              Discuss
            </NavLink>
          </div>
          <NavLink to="/" className="canvas-body-text">
            <i
              className="fa-sharp fa-solid fa-right-from-bracket icon-canvas-text"
              style={{ color: "#f2b827" }}
            ></i>
            Log Out
          </NavLink>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SidebarCanvas;
