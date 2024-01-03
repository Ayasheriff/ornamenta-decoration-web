import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.style.scss";

const Footer = () => {
  return (
    <footer className="text-center footer-icons-box">
      {/* <!-- Grid container --> */}
      <div className="container p-5 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <a
            href="#!"
            className="btn text-white btn-floating m-1  icon-styling"
          >
            <i
              className="fa-brands fa-facebook-f social-icon"
              style={{ color: "#f2b827" }}
            ></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            className="btn text-white btn-floating m-1  icon-styling"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter social-icon" style={{ color: "#f2b827" }}></i>
          </a>

          {/* <!-- Google --> */}
          <a
            className="btn text-white btn-floating m-1  icon-styling"
            href="#!"
            role="button"
          >
            <i className="fab fa-google social-icon" style={{ color: "#f2b827" }}></i>
          </a>

          {/* <!-- Instagram --> */}
          <a
            className="btn text-white btn-floating m-1  icon-styling"
            href="#!"
            role="button"
          >
            <i
              className="fa-brands fa-instagram social-icon"
              style={{ color: "#f2b827" }}
            ></i>
          </a>

          {/* <!-- Linkedin --> */}
          <a
            className="btn text-white btn-floating m-1  icon-styling"
            //   style="background-color: #0082ca;"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in social-icon" style={{ color: "#f2b827" }}></i>
          </a>
          {/* <!-- Github --> */}
          <a
            className="btn text-white btn-floating m-1  icon-styling"
            //   style="background-color: #333333;"
            href="#!"
            role="button"
          >
            <i className="fab fa-github social-icon"  style={{ color: "#f2b827" }}></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div className="text-center p-3 footer-copyright">
        © 2023 Copyright:
        <a className="link-copyright" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
