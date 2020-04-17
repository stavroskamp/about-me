import React from "react";
import styled from "@emotion/styled";
import profile from "../public/profile.jpg";

const StyledImage = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  border: 3px solid white;
`;

const ProfileImage = () => <StyledImage src={profile} alt="profile image" />;

export default ProfileImage;
