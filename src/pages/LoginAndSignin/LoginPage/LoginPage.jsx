import { Col, Row } from "react-bootstrap";
import loginBlob from "../../../assets/images/loginBlob.jpg";
import "./LoginPage.style.scss";
import { Input, Typography } from "@mui/joy";
const LoginPage = () => {
  return (
    <Row className="row-login">
      <Col xs={6} className="login-inputs">
        <div className="login-inputs">
          <Typography>Email</Typography>
          <Input placeholder="mail" sx={{ height: "50px" }} />
        </div>
        <div className="login-inputs">
          <Typography>Password</Typography>
          <Input placeholder="password" sx={{ height: "50px" }} />
        </div>
      </Col>
      <Col xs={6}>
        <div className="img-blob-container">
          <div className="div-blob" />
          <img src={loginBlob} className="login-blob" />
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
