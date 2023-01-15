import React from "react";
import profile from "../public/profile-240w.jpg";
import Image from "next/image";

const ProfileImage = () => (
  <div
    style={{
      border: "3px solid white",
      borderRadius: "50%",
      overflow: "hidden",
    }}
  >
    <Image src={profile} width={"230px"} height={"230px"} alt="profile image" />
  </div>
);

export default ProfileImage;
