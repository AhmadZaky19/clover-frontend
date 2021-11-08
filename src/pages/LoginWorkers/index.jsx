import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import AuthLeft from "../../components/atoms/AuthLeft";
import FormLogin from "../../components/molecules/Forms/LoginWorkers";

const Login = () => {
  return (
    <>
      <Container fluid className="window">
        <Row>
          <Col md={6} className="column1">
            <AuthLeft />
          </Col>
          <Col md={6} className="column2">
            <FormLogin />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
