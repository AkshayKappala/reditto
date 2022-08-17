import React from "react";
import Button from "react-bootstrap/Button";

function CardFooterButton(props) {
  return (
    <Button variant="light" className="p-2 m-0 PostFooterButton GreyButton">
      <i className={`bi ${props.icon} PostFooterButtonSymbol`}></i>{" "}
      {props.title}
    </Button>
  );
}

export default CardFooterButton;
