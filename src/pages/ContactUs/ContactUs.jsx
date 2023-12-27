import { FormHelperText, Input, FormControl, Textarea } from "@mui/joy";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ContactUs.style.scss";

const ContactUs = () => {
  const [data, setData] = useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };
  return (
    <Container className="container-contact-inputs">
      <Row className="row-contac-inputs">
        <Col
          xs={6}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            padding: "20px",
          }}
        >
          <h3>SEND US A MESSAGE</h3>
          <Input placeholder="Your Name" type="text" sx={{ height: "50px" }} />
          <form onSubmit={handleSubmit} id="Demo">
            <FormControl>
              <Input
                sx={{ "--Input-decoratorChildHeight": "45px", height: "50px" }}
                placeholder="Your mail@mail.com"
                type="email"
                value={data.email}
                onChange={(event) =>
                  setData({ email: event.target.value, status: "initial" })
                }
                error={data.status === "failure"}
              />
              {data.status === "failure" && (
                <FormHelperText
                  sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                >
                  Oops! something went wrong, please try again later.
                </FormHelperText>
              )}

              {data.status === "sent" && (
                <FormHelperText
                  sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                >
                  You are all set!
                </FormHelperText>
              )}
            </FormControl>
          </form>
          <Input
            placeholder="Phone Number"
            type="number"
            sx={{ height: "50px" }}
          />
          <Textarea
            placeholder="Write your message..."
            typeof="text"
            minRows={5}
          />
          <Button className="send-msg-btn" variant="plain">
            Send Message
          </Button>
        </Col>
        <Col
          xs={6}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            padding: "20px",
          }}
        >
          <h3>CONTACT INFO</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque metus arcu, malesuada a est eget, maximus efficitur
            sapien.
          </p>
          <p className="contact-info-text"><i className="fa-sharp fa-solid fa-house icon-canvas-text" style={{color: "grey"}}></i>8th floor, 379 Hudson St, New York, NY 10018</p>
          <p className="contact-info-text"><i className="fa-solid fa-phone fa-phone icon-canvas-text" style={{color: "grey"}}></i>(+2) 01156353163</p>
          <p className="contact-info-text"><i className="fa-sharp fa-solid fa-pager icon-canvas-text" style={{color: "grey"}}></i>(+1) 96 716 6879</p>
          <p className="contact-info-text"><i className="fa-sharp fa-solid fa-envelope icon-canvas-text" style={{color: "grey"}}></i>ayasherif477@gmail.com</p>
          <p className="contact-info-text"><i className="fa-sharp fa-solid fa-clock icon-canvas-text" style={{color: "grey"}}></i>Mon-Fri 09:00 - 17:00</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
