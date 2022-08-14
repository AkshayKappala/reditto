import React from "react";
import Button from "react-bootstrap/Button";

function HeaderLoginButtons() {
  return (
    <>
      <Button variant="outline-dark" className="mx-2 rounded-pill">
        Login
      </Button>
      <Button variant="dark" className="mx-2 rounded-pill">
        Signup
      </Button>
    </>
  );
}
export default HeaderLoginButtons;
