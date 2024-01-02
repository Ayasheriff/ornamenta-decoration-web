import { Button, Col, Row } from "react-bootstrap";
import signupBlob from "../../../assets/images/signup-blob.png";
import signupSolidBlob from "../../../assets/images/signup-blob-div.png";
import outlineSignupBlob from "../../../assets/images/signup blob-outline.png";
import decIcon from "../../../assets/images/decIconBG.png";
import "./SignupPage.style.scss";
import { FormControl, FormHelperText, Input, Typography } from "@mui/joy";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignupPage = () => {
  const [visiblePs, setVisiblePs] = useState(true);
  const navigate = useNavigate();
  const toggleVisibility = () => {
    setVisiblePs(!visiblePs);
  };
  const [data, setData] = useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };
  return (
    <Row className="row-login">
      <Col xs={6} className="login-inputs">
      <Typography className="login-title">Sign Up with a new account</Typography>
        <div className="login-inputs">
        <Typography>User Name</Typography>
          <Input
            placeholder="user name"
            sx={{ height: "50px" }}
            type="text"
          />
          <Typography>Email</Typography>
          <form onSubmit={handleSubmit} id="Demo">
            <FormControl>
              <Input
                sx={{ "--Input-decoratorChildHeight": "45px", height: "50px" }}
                placeholder="Your mail@mail.com"
                type="email"
                value={data.email}
                onChange={(event) =>
                  setData({ email: event.target.value, status: "initial" })
                }
                error={data.status === "failure"}
              />
              {data.status === "failure" && (
                <FormHelperText
                  sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                >
                  Oops! something went wrong, please try again later.
                </FormHelperText>
              )}

              {data.status === "sent" && (
                <FormHelperText
                  sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                >
                  You are all set!
                </FormHelperText>
              )}
            </FormControl>
          </form>
        </div>
        <div className="login-inputs">
          <Typography>Password</Typography>
          <Input
            placeholder="password"
            sx={{ height: "50px" }}
            type={visiblePs ? "password" : "text"}
            endDecorator={
              visiblePs ? (
                <EyeSlash onClick={toggleVisibility} />
              ) : (
                <Eye onClick={toggleVisibility} />
              )
            }
          />
          <Typography>Confirm Password</Typography>
          <Input
            placeholder="confirm password"
            sx={{ height: "50px" }}
            type={visiblePs ? "password" : "text"}
            endDecorator={
              visiblePs ? (
                <EyeSlash onClick={toggleVisibility} />
              ) : (
                <Eye onClick={toggleVisibility} />
              )
            }
          />
          <Typography>
            I already have an account
            <Link to="/" className="signup-title">
              Log In
            </Link>
          </Typography>
        </div>
        <Button className="login-btn" onClick={() => navigate("/home")}>
          Sign Up
        </Button>
      </Col>
      <Col xs={6} className="img-blob-box">
        <div className="img-blob-container">
          <img src={decIcon} className="div-blob-icon" />
          <img src={signupSolidBlob} className="div-blob-signup" />
          <img src={outlineSignupBlob} className="outline-blob-signup" />
          <img src={signupBlob} className="login-blob" />
        </div>
      </Col>
    </Row>
  );
};

export default SignupPage;
