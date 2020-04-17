import React from "react";
import { ProfileImage, Typography } from ".";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const StyledText = styled.div`
  flex-grow: 2;
  align-items: center;
`;

const HomeContent = () => (
  <StyledWrapper>
    <StyledImage>
      <ProfileImage />
    </StyledImage>
    <StyledText>
      <Typography variant="p">Hi, i'm Stavros.</Typography>
    </StyledText>
  </StyledWrapper>
);

export default HomeContent;
