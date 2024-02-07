import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import "./UserAccount.style.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
const UserAccount = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="logo-sign-out">
        <h5>Ornamenta Account</h5>
        {/* <ButtonComponent /> */}
        <ButtonComponent
          className="signOut-btn"
          title={"Sign Out"}
          onClick={() => navigate("/")}
        />
      </div>

      <div className="inputs-pw-div" style={{ padding: "20px" }}>
        <Row>
          <Col xs={4} style={{display:"flex", flexDirection:"column"}}>
            <NavLink  className="user-acc-link" to="/dashboard/user-account/user-info">User Info</NavLink>
            <NavLink  className="user-acc-link" to="/dashboard/user-account">Change Password</NavLink>
          </Col>
          <Outlet />
        </Row>
      </div>
    </div>
  );
};

export default UserAccount;
