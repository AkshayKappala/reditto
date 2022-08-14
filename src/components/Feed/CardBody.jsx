import React from "react";
import Row from "react-bootstrap/Row";

import TemplateImage from "../../images/Image_Template.png";

function CardBody() {
  return (
    <Row>
      <img src={TemplateImage} alt="Post"></img>
    </Row>
  );
}
export default CardBody;
