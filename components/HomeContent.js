import React from "react";
import { ProfileImage, Typography, AnchorLink, ProfileIcons } from ".";
import styled from "@emotion/styled";
import { linkedin, github, email } from "../constants/urls";
import { ANCHOR_LINK_COLOR } from "../constants/colors";

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
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1 1 0px;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 6px;
  padding: 24px;
  margin: 30px 0;
  border-top: 4px solid ${ANCHOR_LINK_COLOR};

  @media (min-width: 1120px) {
    flex: 2 1 0px;
    height: 380px;
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
        I'm a Front End Developer from Thessaloniki, Greece and I love to create
        great web experiences.
      </Typography>
      <Typography as="p">
        The way a website looks and feels are very important factors and can
        determine the choice of a potential customer. But the creation of an
        engaging website or app is a long process with trial and error and
        sometimes quite difficult to nail down. <br />
        This is where I can help. I enjoy creating sleek web interfaces by
        utilizing the latest web technologies along with the best UI and UX
        practices. I have more than {getExperienceInYears()} years of experience
        developing and scaling different kinds of web applications and have been
        a part of small and big teams.
      </Typography>
      <Typography as="p">
        So you read my little intro and you are wondering now what? Well, this
        page is a work in progress, with more things to come in the future. So
        in the meantime, feel free to send me an {""}
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
