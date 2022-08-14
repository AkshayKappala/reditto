import React from "react";

const TitleImgURL =
  "https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg";

const Title = "r/animalmemes";

function CommunityTitle() {
  return (
    <div className="mx-1 p-0">
      <img src={TitleImgURL} alt="Community" className="Avatar me-1"></img>
      <a href="#community" className="CardHeader AvatarText">
        {Title}
      </a>
    </div>
  );
}
export default CommunityTitle;
