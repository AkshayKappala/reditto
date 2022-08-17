import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function CardFooterDropdown() {
  return (
    <DropdownButton
      id="dropdown-footer"
      title={<i class="bi bi-three-dots"></i>}
      variant="light"
      className="p-0 my-auto"
    >
      <Dropdown.Item href="#/action-1" className="HeavyCharacters GreyButton">
        <i class="bi bi-eye-slash"></i> Hide
      </Dropdown.Item>

      <Dropdown.Divider />

      <Dropdown.Item href="#/action-2" className="HeavyCharacters GreyButton">
        <i class="bi bi-flag"></i> Report
      </Dropdown.Item>
    </DropdownButton>
  );
}
export default CardFooterDropdown;
