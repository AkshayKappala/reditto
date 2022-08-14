import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import HeaderSearchBar from "./HeaderSearchBar";
import HeaderLoginButtons from "./HeaderLoginButtons";
import HeaderUserDropdown from "./HeaderUserDropdown";

function Topbar() {
  return (
    <div>
      <Navbar variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand href="#home">
            <i class="bi bi-suit-club-fill"></i> Reditto
          </Navbar.Brand>

          <Navbar.Text className="me-auto">
            <i class="bi bi-house-door"></i>Home
          </Navbar.Text>

          <HeaderSearchBar />
          <HeaderLoginButtons />
          <HeaderUserDropdown />
        </Container>
      </Navbar>
    </div>
  );
}
export default Topbar;
