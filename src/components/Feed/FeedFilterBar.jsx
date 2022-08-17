import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import FeedFilterButton from "./FeedFilterComponents/FeedFilterButton";
import FeedFilterDropdown from "./FeedFilterComponents/FeedFilterDropdown";

function FeedFilterBar() {
  return (
    <Card className="mb-1">
      <Container className="d-flex p-2">
        <FeedFilterButton icon="bi-fire" title="Hot" />
        <FeedFilterButton icon="bi-stars" title="New" />
        <FeedFilterButton icon="bi-arrow-up" title="Top" />
        <FeedFilterButton icon="bi-graph-up-arrow" title="Rising" />

        <FeedFilterDropdown
          items={["Today", "This Week", "This Month", "This Year", "All Time"]}
        />
      </Container>
    </Card>
  );
}

export default FeedFilterBar;
