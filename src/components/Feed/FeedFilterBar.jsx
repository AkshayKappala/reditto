import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function FeedFilterBar() {
  return (
    <Card className="mb-1">
      <Container className="d-flex p-2">
        <Button
          variant="light"
          className="mx-1 rounded-pill FeedFilter FeedFilterActive"
        >
          <i class="bi bi-fire"></i> Hot
        </Button>
        <Button variant="light" className="mx-1 rounded-pill FeedFilter">
          <i class="bi bi-stars"></i> New
        </Button>
        <Button variant="light" className="mx-1 rounded-pill FeedFilter">
          <i class="bi bi-arrow-up"></i> Top
        </Button>
        <Button variant="light" className="mx-1 rounded-pill FeedFilter">
          <i class="bi bi-graph-up-arrow"></i> Rising
        </Button>
        <DropdownButton
          title="Filter"
          variant="light"
          id="dropdown-filter"
          className="ms-auto"
        >
          <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
          <Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
          <Dropdown.Item href="#/action-3">This Month</Dropdown.Item>
          <Dropdown.Item href="#/action-4">This Year</Dropdown.Item>
          <Dropdown.Item href="#/action-5">All Time</Dropdown.Item>
        </DropdownButton>
      </Container>
    </Card>
  );
}

export default FeedFilterBar;
