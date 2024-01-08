import { useNavigate } from "react-router-dom";
import "./CardComponent.style.scss";
import axios from "axios";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Heart, Star1 } from "iconsax-react";
const CardComponent = ({
  title,
  descreption,
  image,
  category,
  id,
  price,
  value,
}) => {
  const navigate = useNavigate();
  async function getAllDesigns() {
    const { data } = await axios("/dashboard/card-details/${category}/${value}/${id}");
    console.log("data of card", data);
  }
  useEffect(() => {
    getAllDesigns();
  }, []);
  return (
    <div className="cards-boxContainer">
      <Card className="card-box" style={{ width: "27rem" }}>
        <Card.Img className="card-image" variant="top" src={image} />
        <Card.Body className="card-body-box">
          <div className="cart-title-heart">
            <Card.Title
              onClick={() =>
                navigate(`/dashboard/card-details/${category}/${value}/${id}`)
              }
              className="card-title"
            >
              {title}
            </Card.Title>
            <Heart size="32" color="red" variant="Bold" />
          </div>

          <Card.Text>{descreption}</Card.Text>
          <div className="price-star">
            <p>${price}</p>
            <div className="stars-rate">
              <Star1 variant="Bold" color="#f2b827" size={16} />
              <Star1 variant="Bold" color="#f2b827" size={16} />
              <Star1 variant="Bold" color="#f2b827" size={16} />
              <Star1 variant="Bold" color="#f2b827" size={16} />
              <Star1 variant="Bold" color="#f2b827" size={16} />
            </div>
          </div>
          <ButtonComponent title={"Add To Cart"} className="cart-btn" />
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
