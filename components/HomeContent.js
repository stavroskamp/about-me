import React from "react";
import { ProfileImage, Typography, AnchorLink, ProfileIcons } from ".";
import styled from "@emotion/styled";
import { linkedin, github, email } from "../constants/urls";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0px;
`;

const StyledText = styled.div`
  flex: 3 1 0px;
  align-items: center;
`;

const getExperienceInYears = () => new Date().getFullYear() - 2014;

const HomeContent = () => (
  <StyledWrapper>
    <StyledImage>
      <ProfileImage />
      <ProfileIcons />
    </StyledImage>
    <StyledText>
      <Typography as="h1">Hi, I'm Stavros!</Typography>
      <Typography as="p">
        I'm a Front End Developer from Thessaloniki, Greece and I enjoy creating
        great web experiences with a focus in the UI and UX.
        <br />
        In my over {getExperienceInYears()} years as a developer I used
        different technologies for each project, but right now I feel
        comfortable with React + Redux.
        <br />
        In my free time i like to mostly spend time with my family, take some
        photos with my camera, read a book or play a game in my PS4.
      </Typography>
      <Typography as="p">
        Ok so you read my text, you learned some things about me and you are
        wondering now what? Well, this page is a work in progress, as the owner,
        so in the meantime, feel free to send me an {""}
        <AnchorLink
          href={`mailto:${email}?subject=Hello Stavros!`}
          text="e-mail"
        />
        , check my {""}
        <AnchorLink href={linkedin} text="LinkedIn"></AnchorLink>, {""} or my{" "}
        <AnchorLink href={github} text="GitHub"></AnchorLink>.
      </Typography>
    </StyledText>
  </StyledWrapper>
);

export default HomeContent;
