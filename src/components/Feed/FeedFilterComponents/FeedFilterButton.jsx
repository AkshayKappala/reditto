import React from "react";
import Button from "react-bootstrap/Button";

function FeedFilterButton(props) {
  return (
    <Button variant="light" className="mx-1 rounded-pill FeedFilter">
      <i class={`bi ${props.icon}`}></i> {props.title}
    </Button>
  );
}

export default FeedFilterButton;
