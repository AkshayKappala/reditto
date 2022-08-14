import React from "react";
import Feed from "./Feed/Feed";
import Topbar from "./Topbar/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <h1>Welcome to Reditto!</h1>
      <Feed />
    </div>
  );
}

export default App;
