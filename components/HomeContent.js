import React from "react";
import { ProfileImage, Typography, AnchorLink, ProfileIcons } from ".";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <ProfileIcons />
    </StyledImage>
    <StyledText>
      <Typography as="h1">
        Stavros Kampanakis <br /> Front End Developer
      </Typography>
      <Typography as="p">
        Hi, i'm Stavros. Check my {""}
        <AnchorLink
          href="https://www.linkedin.com/in/stavroskampanakis"
          text="linkedin"
        />
      </Typography>
    </StyledText>
  </StyledWrapper>
);

export default HomeContent;
