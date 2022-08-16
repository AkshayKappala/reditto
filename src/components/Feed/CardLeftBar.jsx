import React from "react";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CardLeftBar() {
  return (
    <Col md={1} className="CardLeftBar">
      <Stack>
        <Button variant="light" className="p-0">
          <i class="bi bi-caret-up"></i>
        </Button>
        <div className="text-wrap p-0 text-center">0</div>
        <Button variant="light" className="p-0">
          <i class="bi bi-caret-down"></i>
        </Button>
      </Stack>
    </Col>
  );
}
export default CardLeftBar;
