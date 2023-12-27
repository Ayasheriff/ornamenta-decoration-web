import { FormHelperText, Input, FormControl } from "@mui/joy";
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
    <Container>
      <Row>
        <Col
          xs={6}
          style={{ display: "flex", flexDirection: "column", gap: "50px" }}
        >
          <h3>SEND US A MESSAGE</h3>
          <Input placeholder="Your Name" type="text" sx={{height:"50px"}}/>
          <form onSubmit={handleSubmit} id="Demo">
            <FormControl>
              <Input
                sx={{ "--Input-decoratorChildHeight": "45px" , height:"50px"}}
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
          <Input placeholder="Phone Number" type="number" sx={{height:"50px"}}/>
          <Button className="send-msg-btn">Send Message</Button>

        </Col>
        <Col xs={6}>
          <h3>CONTACT INFO</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
