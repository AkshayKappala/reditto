import React from "react";
import Row from "react-bootstrap/Row";

import CommunityTitle from "../CommunityTitle";

function CardHeader() {
  return (
    <Row>
      <div className="my-1 mx-0 p-0 d-flex CardHeader">
        <CommunityTitle />
        &middot; posted by
        <a href="#user" className="mx-1 HiddenLink">
          u/monkeyman
        </a>
        &middot; 4h ago
      </div>
      <p className="my-0 mx-1 p-0">The bird named salad</p>
    </Row>
  );
}
export default CardHeader;
