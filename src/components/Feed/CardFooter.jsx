import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function CardFooter() {
  return (
    <Row>
      <Container fluid className="d-flex px-0">
        <Button variant="light" className="p-2 m-0 PostFooterButton GreyButton">
          <i className="bi bi-chat PostFooterButtonSymbol"></i> Comments
        </Button>
        <Button variant="light" className="p-2 m-0 PostFooterButton GreyButton">
          <i className="bi bi-share PostFooterButtonSymbol"></i> Share
        </Button>
        <Button variant="light" className="p-2 m-0 PostFooterButton GreyButton">
          <i className="bi bi-bookmark PostFooterButtonSymbol"></i> Save
        </Button>
        <DropdownButton
          id="dropdown-footer"
          title={<i class="bi bi-three-dots"></i>}
          variant="light"
          className="p-0 my-auto"
        >
          <Dropdown.Item
            href="#/action-1"
            className="HeavyCharacters GreyButton"
          >
            <i class="bi bi-eye-slash"></i> Hide
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            href="#/action-2"
            className="HeavyCharacters GreyButton"
          >
            <i class="bi bi-flag"></i> Report
          </Dropdown.Item>
        </DropdownButton>
      </Container>
    </Row>
  );
}
export default CardFooter;
