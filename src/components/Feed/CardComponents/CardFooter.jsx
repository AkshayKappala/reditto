import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import CardFooterButton from "./CardFooterButton";
import CardFooterDropdown from "./CardFooterDropdown";

function CardFooter() {
  return (
    <Row>
      <Container fluid className="d-flex px-0">
        <CardFooterButton icon="bi-chat" title="Comments" />
        <CardFooterButton icon="bi-share" title="Share" />
        <CardFooterButton icon="bi-bookmark" title="Save" />
        <CardFooterDropdown />
      </Container>
    </Row>
  );
}
export default CardFooter;
