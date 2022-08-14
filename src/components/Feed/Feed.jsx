import React from "react";
import Stack from "react-bootstrap/Stack";

import PostCard from "./PostCard";

function Feed() {
  return (
    <>
      <Stack gap={2} className="col-md-4 mx-auto">
        <PostCard />
      </Stack>
    </>
  );
}
export default Feed;
