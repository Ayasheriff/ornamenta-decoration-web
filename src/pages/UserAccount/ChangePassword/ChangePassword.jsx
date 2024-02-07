import { Input } from "@mui/joy";
import { Eye, EyeSlash } from "iconsax-react";
import { Col } from "react-bootstrap";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import { useState } from "react";

const ChangePassword = () => {
  const [data, setData] = useState();
  console.log(data);
  const [visiblePs, setVisiblePs] = useState(true);
  const toggleVisibility = () => {
    setVisiblePs(!visiblePs);
  };
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Password changed successfully");
    setNewPassword("");
    setConfirmPassword("");
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
  const emailValidation = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || "Enter a valid email address";
  };
  return (
    <Col
      xs={8}
      style={{ display: "flex", flexDirection: "column", gap: "13.9px" }}
    >
      <label htmlFor="username">Username:</label>
      <Input placeholder="Your Name" type="text" sx={{ height: "45px" }} />
      <label htmlFor="username">Email:</label>

      <Input
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
      <label htmlFor="username">Phone Number:</label>
      <Input placeholder="Your Phone" type="tel" sx={{ height: "45px" }} />
      <label htmlFor="username">New Password:</label>
      <Input
        title="Password"
        placeholder="password"
        conrollerId="passwordInput"
        type={visiblePs ? "password" : "text"}
        name="password"
        sx={{ "--Input-decoratorChildHeight": "45px" }}
        validation={{
          required: { value: true, message: "This field is required" },
          minLength: {
            value: 8,
            message: "min 8 characters",
          },
        }}
        endDecorator={
          visiblePs ? (
            <EyeSlash onClick={toggleVisibility} />
          ) : (
            <Eye onClick={toggleVisibility} />
          )
        }
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <label htmlFor="username">Confirm Password:</label>
      <Input
        title="Password"
        placeholder="password"
        conrollerId="passwordInput"
        type={visiblePs ? "password" : "text"}
        name="password"
        sx={{ "--Input-decoratorChildHeight": "45px" }}
        validation={{
          required: { value: true, message: "This field is required" },
          minLength: {
            value: 8,
            message: "min 8 characters",
          },
        }}
        endDecorator={
          visiblePs ? (
            <EyeSlash onClick={toggleVisibility} />
          ) : (
            <Eye onClick={toggleVisibility} />
          )
        }
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <ButtonComponent
        onClick={handleSubmit}
        title={"Submit"}
        className="submit-btn"
      />
    </Col>
  );
};

export default ChangePassword;
