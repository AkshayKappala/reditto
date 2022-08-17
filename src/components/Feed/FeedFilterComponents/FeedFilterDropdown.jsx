import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function FeedFilterDropdown(props) {
  const labels = props.items;
  return (
    <DropdownButton
      title="Filter"
      variant="light"
      id="dropdown-filter"
      className="ms-auto"
    >
      {labels.map((label, index) => (
        <>
          {index > 0 && <Dropdown.Divider />}
          <Dropdown.Item href="" className="GreyButton">
            {label}
          </Dropdown.Item>
        </>
      ))}
    </DropdownButton>
  );
}
export default FeedFilterDropdown;
