import React from "react";
import Row from "react-bootstrap/Row";

import TemplateImage from "../../images/Image_Template.png";

function CardBody() {
  return (
    <Row>
      <img src={TemplateImage} alt="Post" className="m-0 p-0"></img>
    </Row>
  );
}
export default CardBody;
