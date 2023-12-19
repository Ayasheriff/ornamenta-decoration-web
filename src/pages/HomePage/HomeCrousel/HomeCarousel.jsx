import { Carousel } from "react-bootstrap";
import Access1 from "../../../assets/images/item1.jpg";
import Access2 from "../../../assets/images/item2.jpg";
import Access3 from "../../../assets/images/item3.jpg";
import bathroom1 from "../../../assets/images/bathroom1.jpg";
import bathroom2 from "../../../assets/images/bathroom2.jpg";
import bathroom3 from "../../../assets/images/bathroom3.jpg";
import bedroom1 from "../../../assets/images/bedroom1.jpg";
import bedroom2 from "../../../assets/images/bedroom2.jpg";
import bedroom3 from "../../../assets/images/bedroom3.jpg";
import "./HomeCarousel.style.scss";
import MainTitle from "../../../components/MainTitleComponent/MainTitle";

const HomeCarousel = () => {
  return (
    <div>
      <div className="exchange-box">
      <MainTitle title={"Discuss Your Opinion"}/>

        <div className="carousel-imgs ">
          <Carousel slide={false} indicators={false} controls={false}>
            <Carousel.Item>
              <img className="carousel-home-img" src={Access1} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-home-img" src={Access2} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-home-img" src={Access3} />
            </Carousel.Item>
          </Carousel>
          <div className="carousel-titles">
            <h1 style={{ color: "#082260",marginBlockEnd:"50px" }}>Accessors Items for your home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="carousel-imgs ">
          <div className="carousel-titles">
            <h1 style={{ color: "#f2b827" ,marginBlockEnd:"50px"}}>Bathrooms for an inspire view</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <Carousel slide={false} indicators={false} controls={false}>
            <Carousel.Item>
              <img className="carousel-home-img" src={bathroom1} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-home-img" src={bathroom2} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-home-img" src={bathroom3} />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="carousel-imgs ">
          <Carousel slide={false} indicators={false} controls={false}>
            <Carousel.Item>
              <img className="carousel-home-img" src={bedroom1} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-home-img" src={bedroom2} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-home-img" src={bedroom3} />
            </Carousel.Item>
          </Carousel>
          <div className="carousel-titles">
            <h1 style={{ color: "#082260" ,marginBlockEnd:"50px"}}>Bedrooms for your comfort</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
