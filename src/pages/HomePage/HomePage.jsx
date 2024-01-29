import { Card } from "react-bootstrap";
import AboutPage from "./About/About";
import homePic from "../../assets/images/home.jpg";
import restaurantPic from "../../assets/images/restaurant.jpg";
import officePic from "../../assets/images/office.jpg";
import hospitalPic from "../../assets/images/hospital.jpg";
import "./HomePage.style.scss";
import HomeCarousel from "./HomeCrousel/HomeCarousel";
import LastestProjects from "./LastestProjects/LastestProjects";
import MainTitle from "../../components/MainTitleComponent/MainTitle";

const HomePage = () => {
  const decorationCards = [
    {
      image: homePic,
      title: "RESIDENTIAL DESIGN",
    },
    {
      image: restaurantPic,
      title: "ECOMMERCIAL DESIGN",
    },
    {
      image: officePic,
      title: "OFFICE DESIGN",
    },
    {
      image: hospitalPic,
      title: "HOSPITAL DESIGN",
    },
  ];
  return (
    <div>
    <MainTitle title={"Our Work About"}/>
      <div className="cards-boxContainer-home">
        {decorationCards.map((card, index) => (
          <Card className="card-box" style={{ width: "27rem" }} key={index}>
            <Card.Img className="card-image" variant="top" src={card.image} />
            <Card.Body className="card-body-box-home">
              <Card.Title className="card-title">{card.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content,Some quick example text to build
                on the card title.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <HomeCarousel />
      <AboutPage />
      <LastestProjects />
    </div>
  );
};

export default HomePage;
