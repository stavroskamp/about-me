import React from "react";
import { ProfileImage, Typography, AnchorLink, ProfileIcons } from ".";
import styled from "@emotion/styled";
import { linkedin, github, email } from "../constants/urls";

const StyledWrapper = styled.div`
  @media (min-width: 1120px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0 0;

  @media (min-width: 1120px) {
    align-items: center;
    justify-content: flex-start;
    flex: 1 1 0px;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 6px;
  padding: 24px;
  margin: 30px 0;

  @media (min-width: 1120px) {
    flex: 3 1 0px;
    height: 340px;
    margin: 0;
  }
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
        different technologies for each project, starting with jQuery back in
        the day, then moving to Angular.js and for the past years I feel
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
