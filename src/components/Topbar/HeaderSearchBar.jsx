import React from "react";
import Form from "react-bootstrap/Form";

function HeaderSearchBar() {
  return (
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
  );
}
export default HeaderSearchBar;
