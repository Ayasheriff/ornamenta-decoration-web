import {  Col, Row } from "react-bootstrap";
import loginBlob from "../../../assets/images/loginBlob.png";
import loginSolidBlob from "../../../assets/images/loginSolidBlob.png";
import outlineSignupBlob from "../../../assets/images/signup blob-outline.png";
import decIcon from "../../../assets/images/decIconBG.png";
import "./LoginPage.style.scss";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../../../components/InputComponent/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
import { Typography } from "@mui/joy";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
const LoginPage = () => {
  const [visiblePs, setVisiblePs] = useState(true);
  const navigate = useNavigate();
  const toggleVisibility = () => {
    setVisiblePs(!visiblePs);
  };

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
        <Typography className="login-title">Login to your account</Typography>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <InputComponent
              title="Email"
              placeholder="email"
              conrollerId="emailInput"
              type="email"
              name="email"
              sx={{ "--Input-decoratorChildHeight": "45px" }}
              validation={{
                required: { value: true, message: "This field is required" },
                validate: emailValidation,
              }}
            />

            <InputComponent
              title="Password"
              placeholder="password"
              conrollerId="passwordInput"
              type={visiblePs ? "password" : "text"}
              name="password"
              sx={{ "--Input-decoratorChildHeight": "45px" }}
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
            I don&apos;t have an account
            <Link to="/signup" className="signup-title">
              Sign Up
            </Link>
          </Typography>
          </form>
        </FormProvider>
        <ButtonComponent
         className="login-btn"
         onClick={onSubmit}
         title="Log In"
        />
      </Col>
      <Col xs={6} className="img-blob-box">
        <div className="img-blob-container">
          <img src={decIcon} className="div-blob-icon" />
          <img src={loginSolidBlob} className="div-blob" />
          <img src={outlineSignupBlob} className="outline-blob-signup" />
          <img src={loginBlob} className="login-blob" />
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
