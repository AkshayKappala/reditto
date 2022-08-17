import React from "react";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CardLeftBar() {
  return (
    <Col md={1} className="CardLeftBar">
      <Stack className="my-1">
        <Button variant="light" className="p-0 GreyButton">
          <i class="bi bi-hand-thumbs-up"></i>
        </Button>
        <div className="text-wrap p-0 text-center VoteCount">16</div>
        <Button variant="light" className="p-0 GreyButton">
          <i class="bi bi-hand-thumbs-down"></i>
        </Button>
      </Stack>
    </Col>
  );
}
export default CardLeftBar;
