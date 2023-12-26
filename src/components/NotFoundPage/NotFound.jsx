import notFoundImg from "../../assets/images/not-found.png";
import "./NotFound.style.scss";
const NotFound = () => {
  return (
    <div className="not-found-page">
      <img src={notFoundImg} className="not-found-img" />
      <h1> Page Not Found</h1>
      <h4> The page you are looking for doesn't exist or an other error occured.</h4>
    </div>
  );
};

export default NotFound;
