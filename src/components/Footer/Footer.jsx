import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.style.scss";

const Footer = () => {
  return (
    <footer className="text-center footer-icons-box">
      <div className="container p-4">
        {/* <!-- Section: Images --> */}
        <section className="">
          <div className="row">
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div className="bg-image hover-overlay shadow-1-strong rounded">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div className="bg-image hover-overlay shadow-1-strong rounded">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div className="bg-image hover-overlay shadow-1-strong rounded">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div className="bg-image hover-overlay shadow-1-strong rounded">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div className="bg-image hover-overlay shadow-1-strong rounded">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div className="bg-image hover-overlay shadow-1-strong rounded">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
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
