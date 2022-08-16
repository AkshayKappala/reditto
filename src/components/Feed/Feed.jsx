import React from "react";
import Stack from "react-bootstrap/Stack";

import PostCard from "./PostCard";
import FeedFilterBar from "./FeedFilterBar";

function Feed() {
  return (
    <>
      <Stack gap={2} className="col-md-4 mx-auto mt-3">
        <FeedFilterBar />
        <PostCard />
        <PostCard />
      </Stack>
    </>
  );
}
export default Feed;
