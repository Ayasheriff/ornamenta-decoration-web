import { Heart, Star1 } from "iconsax-react";
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useContext } from "react";
import { AddToCartContext } from "../../context/AddToCartContext";

const CartCar = ({
  title,
  descreption,
  image,
  category,
  id,
  price,
  value,
}) => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart } = useContext(AddToCartContext); // Assuming you have a context for the cart

  return (
    <div className="cards-boxContainer">
      {addToCart.length === 0 ? (
        // If the cart is empty, display a message
        <p>There are no items in the cart.</p>
      ) : (
        // If there are items in the cart, display the card
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
            <ButtonComponent title={"Remove From Cart"} className="cart-btn" onClick={() => removeFromCart(id)} />
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default CartCar;
