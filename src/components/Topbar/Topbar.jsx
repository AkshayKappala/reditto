import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Topbar() {
  return (
    <div>
      <Navbar variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand href="#home">
            <i class="bi bi-suit-club-fill"></i> Reditto
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Topbar;
