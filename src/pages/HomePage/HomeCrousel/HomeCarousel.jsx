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
import project1 from "../../../assets/images/project1.jpg";
import project2 from "../../../assets/images/project2.jpg";
import project3 from "../../../assets/images/project3.jpg";
import project4 from "../../../assets/images/project4.jpg";
import project5 from "../../../assets/images/project5.jpg";
import project6 from "../../../assets/images/project6.jpg";
import project7 from "../../../assets/images/project7.jpg";
import project8 from "../../../assets/images/project8.jpg";
import project9 from "../../../assets/images/project9.jpg";
import project10 from "../../../assets/images/project10.jpg";
import project11 from "../../../assets/images/project11.jpg";
import project12 from "../../../assets/images/project12.jpg";
import project13 from "../../../assets/images/project13.jpg";

import "./HomeCarousel.style.scss";
import MainTitle from "../../../components/MainTitleComponent/MainTitle";
const HomeCarousel = () => {
  return (
    <div>
      <div className="exchange-box">
        <MainTitle title={"Discuss Your Opinion"} />

        <div className="hexagons-box">
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project1} alt="Image 1" />
          </div>
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project2} alt="Image 2" />
          </div>
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project3} alt="Image 3" />
          </div>
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project4} alt="Image 4" />
          </div>
        </div>

        <div className="hexagons-box2">
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project5} alt="Image 1" />
          </div>
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project6} alt="Image 2" />
          </div>
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project7} alt="Image 3" />
          </div>
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project8} alt="Image 4" />
          </div>
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project9} alt="Image 5" />
          </div>
        </div>

        <div className="hexagons-box2">
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project10} alt="Image 1" />
          </div>
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project11} alt="Image 2" />
          </div>
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project12} alt="Image 3" />
          </div>
          <div className="hexagon-container-box">
            <img className="hexagon-image" src={project13} alt="Image 4" />
          </div>
        </div>

        <div className="all-carousels-box container">
          <div className="carousel-imgs ">
            <Carousel slide={false} indicators={false} controls={false}>
              <Carousel.Item>
                <div className="image-container">
                  <img
                    className="carousel-home-img hexagon-img"
                    src={Access1}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-container">
                  <img
                    className="carousel-home-img hexagon-img"
                    src={Access2}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-container">
                  <img
                    className="carousel-home-img hexagon-img"
                    src={Access3}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
            <div className="carousel-titles">
              <h1 style={{ color: "#082260", marginBlockEnd: "50px" }}>
                Accessors Items for your home
              </h1>
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
            <div className="carousel-titles2">
              <h1 style={{ color: "#f2b827", marginBlockEnd: "50px" }}>
                Bathrooms for an inspire view
              </h1>
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
                <div className="image-container">
                  <img
                    className="carousel-home-img hexagon-img"
                    src={bathroom1}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-container">
                  <img
                    className="carousel-home-img hexagon-img"
                    src={bathroom2}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-container">
                  <img
                    className="carousel-home-img hexagon-img"
                    src={bathroom3}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="carousel-imgs ">
            <Carousel slide={false} indicators={false} controls={false}>
              <Carousel.Item>
                <div className="image-container">
                  <img
                    className="carousel-home-img hexagon-img"
                    src={bedroom1}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-container">
                  <img
                    className="carousel-home-img hexagon-img"
                    src={bedroom2}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-container">
                  <img
                    className="carousel-home-img hexagon-img"
                    src={bedroom3}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
            <div className="carousel-titles">
              <h1 style={{ color: "#082260", marginBlockEnd: "50px" }}>
                Bedrooms for your comfort
              </h1>
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
    </div>
  );
};

export default HomeCarousel;
