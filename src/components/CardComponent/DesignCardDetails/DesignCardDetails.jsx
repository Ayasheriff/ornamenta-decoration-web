import { Heart, Star1 } from "iconsax-react";
import { Card } from "react-bootstrap";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DesignCardDetails.style.scss";

const DesignCardDetails = () => {
  const [singleItem, setSingleItem] = useState({});
  const { id } = useParams();
  const displayItemDetails = async (id) => {
    const { data } = await axios(`http://localhost:8000/all-designs/${id}`);
    setSingleItem(data);
  };
  const residentialItemDetails = async (id) => {
    const { data } = await axios(
      `http://localhost:8000/residential-design/${id}`
    );
    setSingleItem(data);
  };
  const ecommercialItemDetails = async (id) => {
    const { data } = await axios(
      `http://localhost:8000/ecommerical-design/${id}`
    );
    setSingleItem(data);
  };
  const officeItemDetails = async (id) => {
    const { data } = await axios(`http://localhost:8000/office-design/${id}`);
    setSingleItem(data);
  };
  const hospitalItemDetails = async (id) => {
    const { data } = await axios(`http://localhost:8000/hospital-design/${id}`);
    setSingleItem(data);
  };

  useEffect(() => {
    displayItemDetails(id);
    residentialItemDetails(id);
    ecommercialItemDetails(id);
    officeItemDetails(id);
    hospitalItemDetails(id);
  }, [id]);

  return (
    <div className="cards-boxContainer-details">
      <Card className="card-box-details">
        <Card.Img
          className="card-image-details"
          variant="top"
          src={singleItem.image}
        />
        <Card.Body className="card-body-box-details">
          <div className="cart-title-heart-details">
            <Card.Title className="card-title-details">
              {singleItem.title}
            </Card.Title>
            <Heart size="32" color="red" variant="Bold" />
          </div>

          <Card.Text className="card-description-details">
            {singleItem.description}
          </Card.Text>
          <div className="price-star-details">
            <p>${singleItem.price}</p>
            <div className="stars-rate-details">
              <Star1 variant="Bold" color="#f2b827" size={32} />
              <Star1 variant="Bold" color="#f2b827" size={32} />
              <Star1 variant="Bold" color="#f2b827" size={32} />
              <Star1 variant="Bold" color="#f2b827" size={32} />
              <Star1 variant="Bold" color="#f2b827" size={32} />
            </div>
          </div>
          <ButtonComponent title={"Add To Cart"} className="cart-btn-details" />
        </Card.Body>
      </Card>
    </div>
  );
};

export default DesignCardDetails;
