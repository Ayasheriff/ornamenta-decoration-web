import triangle1 from "../../../assets/images/triangle1.jpg";
import triangle2 from "../../../assets/images/triangle2.jpg";
import triangle3 from "../../../assets/images/triangle3.jpg";
import line from "../../../assets/images/lineStraight.png";
import hexagon from "../../../assets/images/hexagon.png";
import "./About.style.scss";
const AboutPage = () => {
  return (
    <div className="about-us-box">
      <h1 className="aboutus-title">About Us</h1>
      <img
        src={line}
        style={{
          width: "20%",
          display: "flex",
          alignSelf:"center",
          marginBottom: "30px",
          marginBlockStart: "-30px",
        }}
      />
      <p className="aboutus-subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="img-box-space">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="img-triangle1">
            <div className="triangle-shape1"></div>
            <img src={hexagon} className="hexagon-shape" />
            <img className="img-triangle-item1" src={triangle1} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="img-triangle2">
            <div className="triangle-shape2"></div>
            <img src={hexagon} className="hexagon-shape second-one" />
            <img className="img-triangle-item2" src={triangle2} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="img-triangle3">
            <div className="triangle-shape3"></div>
            <img src={hexagon} className="hexagon-shape" />
            <img className="img-triangle-item3" src={triangle3} />
          </div>
        </div>
      </div>
      <div className="title-hexagon">
        <h4 className="tringle-title-name">Creative Items</h4>
        <h4 className="tringle-title-name">Unique Views</h4>
        <h4 className="tringle-title-name">Inspire Designs</h4>
      </div>
    </div>
  );
};

export default AboutPage;
