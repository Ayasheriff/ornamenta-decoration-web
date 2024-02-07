import { User } from "iconsax-react";
import { Col } from "react-bootstrap";

const UserInformation = () => {
  return (
    <Col>
      <User
        size={200}
        style={{
          border: "5px solid grey",
          borderRadius: "100px",
          padding: "10px",
        }}
        color="grey"
      />
      <h1 style={{ marginBlockEnd: "87px" }}> Aya Sherif</h1>
      <p htmlFor="username">
        Username: <span>Aya Sherif</span>
      </p>
      <p htmlFor="username">
        Email: <span>ayasherif477@gmail.com</span>
      </p>
      <p htmlFor="username">
        Phone Number: <span>01234567890</span>
      </p>
      <p htmlFor="username">
        Password: <span>Ayasherif123</span>
      </p>
    </Col>
  );
};

export default UserInformation;
