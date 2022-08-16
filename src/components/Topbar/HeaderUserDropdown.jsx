import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function HeaderUserDropdown() {
  return (
    <DropdownButton
      variant="light"
      align="end"
      id="dropdown-basic-button"
      title={<i class="bi bi-person"></i>}
      className="mx-2"
    >
      <Dropdown.Item href="#/action-1">Dark Mode</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-2">Help Center</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">Terms and Policies</Dropdown.Item>
    </DropdownButton>
  );
}
export default HeaderUserDropdown;
