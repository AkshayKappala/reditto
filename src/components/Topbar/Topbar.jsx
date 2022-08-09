import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Topbar() {
  return (
    <div>
      <Navbar variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand href="#home">
            <i class="bi bi-suit-club-fill"></i> Reditto
          </Navbar.Brand>
          <Nav.Link href="#home" className="me-auto">
            <i class="bi bi-house-door"></i>Home
          </Nav.Link>

          <Form
            style={{
              float: "none",
              position: "absolute",

              top: "50%",
              left: "50%",
              width: "30%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/*Need to change to something not absolute */}
            <Form.Control type="search" placeholder="Search Reddito" />
          </Form>
          <Button variant="outline-dark" className="mx-2 rounded-pill">
            Login
          </Button>
          <Button variant="dark" className="mx-2 rounded-pill">
            Signup
          </Button>
          <DropdownButton
            variant="light"
            align="end"
            id="dropdown-basic-button"
            title={<i class="bi bi-person"></i>}
            className="mx-2"
          >
            <Dropdown.Item href="#/action-1">Dark Mode</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Help Center</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Terms and Policies</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    </div>
  );
}
export default Topbar;
