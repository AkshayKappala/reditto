import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import CardLeftBar from "./CardLeftBar";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

function PostCard() {
  return (
    <Card>
      <Container>
        <Row>
          <CardLeftBar />
          <Col md={11}>
            <CardHeader />
            <CardBody />
            <CardFooter />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
export default PostCard;
