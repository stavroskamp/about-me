import React from "react";
import styled from "@emotion/styled";
import profile from "../public/profile-240w.jpg";

const StyledImage = styled.img`
  border-radius: 50%;
  height: 230px;
  width: 230px;
  border: 3px solid white;
  align-items: center;
`;

const ProfileImage = () => <StyledImage src={profile} alt="profile image" />;

export default ProfileImage;
