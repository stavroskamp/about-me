import React from "react";
import styled from "@emotion/styled";
import profile from "../public/profile-240w.jpg";

const StyledImage = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  border: 3px solid white;
  align-items: center;

  @media (min-width: 1120px) {
    height: 240px;
    width: 240px;
  }
`;

const ProfileImage = () => <StyledImage src={profile} alt="profile image" />;

export default ProfileImage;
