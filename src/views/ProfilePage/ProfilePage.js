import React from "react";

//Sections
import UserProfile from "./Sections/UserProfile";

const ProfilePage = (props) => {
  const userData = props.auth.userData;
  return (
    <div
      style={{
        paddingTop: "80px",
        boxSizing: "border-box",
      }}
    >
      <UserProfile userData={{ ...userData }} />
    </div>
  );
};

export default ProfilePage;
