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
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../../components/InputComponent/Input";
import { FormProvider, useForm } from "react-hook-form";
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

  const emailValidation = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || "Enter a valid email address";
  };
  const handleSubmit = () => {
    (e) => e.preventDefault();
  };
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);

    navigate("/home");
  });
  return (
    <Row className="row-login">
      <Col xs={6} className="login-inputs">
        <Typography className="login-title">
          Sign Up with a new account
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <InputComponent
              title="User Name"
              placeholder="user name"
              conrollerId="userName"
              type="text"
              name="username"
              sx={{ "--Input-decoratorChildHeight": "45px", height: "40px" }}
              validation={{
                required: { value: true, message: "This field is required" },
              }}
            />
            <InputComponent
              title="Email"
              placeholder="email"
              conrollerId="emailInput"
              type="email"
              name="email"
              sx={{ "--Input-decoratorChildHeight": "45px", height: "40px" }}
              validation={{
                required: { value: true, message: "This field is required" },
                validate: emailValidation,
              }}
            />
            <InputComponent
              title="Phone Number"
              placeholder="phone number"
              conrollerId="phoneInput"
              type="number"
              name="phoneNumber"
              sx={{ "--Input-decoratorChildHeight": "45px", height: "40px" }}
              validation={{
                required: { value: true, message: "This field is required" },
              }}
            />
            <InputComponent
              title="Password"
              placeholder="password"
              conrollerId="passwordInput"
              type={visiblePs ? "password" : "text"}
              name="password"
              sx={{ "--Input-decoratorChildHeight": "45px", height: "40px" }}
              validation={{
                required: { value: true, message: "This field is required" },
                minLength: {
                  value: 6,
                  message: "min 6 characters",
                },
              }}
              endDecorator={
                visiblePs ? (
                  <EyeSlash onClick={toggleVisibility} />
                ) : (
                  <Eye onClick={toggleVisibility} />
                )
              }
            />
            <InputComponent
              title="Confirm Password"
              placeholder="confirm password"
              conrollerId="confirmPasswordInput"
              type={visiblePs ? "password" : "text"}
              name="confirmPassword"
              sx={{ "--Input-decoratorChildHeight": "45px", height: "40px" }}
              validation={{
                required: { value: true, message: "This field is required" },
                minLength: {
                  value: 6,
                  message: "min 6 characters",
                },
              }}
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
          </form>
        </FormProvider>
     
        <ButtonComponent
          className="login-btn"
          onClick={onSubmit}
          title={"Sign Up"}
        />
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
