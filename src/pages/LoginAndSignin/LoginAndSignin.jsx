import { Outlet } from "react-router-dom";
import "./LoginAndSignin.style.scss";

const LoginAndSignin = () => {
  return (
    <div className="login-signup-container">
      <div className="log-title-container">
        <h1 className="logo-title"> Welcome to 
          <span className="logo-title-separate"> O</span>rnamenta
        </h1>
        <p className="logo-subtitle">Continue your design journey</p>
        <p className="logo-subtitle">Let us help you to achieve clairty in your design and take you to new heights.</p>
      </div>
    
          <Outlet/>
    </div>
  );
};

export default LoginAndSignin;
