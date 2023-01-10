import React from "react";
import {
  ProfileImage,
  Typography,
  AnchorLink,
  ProfileIcons,
  Paper,
} from "../components";
import styled from "@emotion/styled";
import { linkedin, github, instagram } from "../constants/urls";
import bg from "../public/profile-bg.jpg";
import { StyledLayoutMixin } from "../styles/mixins";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 20px;
  background-image: url(${bg});
  background-size: cover;
  background-position: top;

  @media (min-width: 850px) {
    background-position: bottom;
  }
`;

const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled((props) => <Paper {...props} />)`
  display: flex;
  flex-direction: column;
`;

const StyledPaperWrapper = styled.div`
  ${StyledLayoutMixin};
`;

const getExperienceInYears = () => new Date().getFullYear() - 2014;

const Intro = () => (
  <StyledWrapper id="hi">
    <StyledImage>
      <ProfileImage />
      <ProfileIcons />
    </StyledImage>
    <StyledPaperWrapper>
      <StyledPaper topLine={true}>
        <Typography as="h1">Hi, I'm Stavros!</Typography>
        <Typography as="p">
          I'm a Front End Developer from Thessaloniki, Greece and I love to
          create great web experiences.
        </Typography>
        <Typography as="p">
          I have more than {getExperienceInYears()} years of experience
          developing and scaling different kinds of web applications. I have
          been a part of small and big teams and worked through the years on
          different business domains from simulation software to a genomics
          application. The way a web application looks and feels are important
          factors to gain or keep a customer. This is the part I can help with.
          I enjoy creating sleek web interfaces by utilizing the latest web
          technologies. I am very interested in the UI and UX aspect, I like to
          tweak the design of an application and I also enjoy creating mockups.
        </Typography>
        <Typography as="p">
          Feel free to contact me on{" "}
          <AnchorLink href={linkedin} text="LinkedIn" />, check my projects in{" "}
          <AnchorLink href={github} text="GitHub" />, or take a look at my
          photos on <AnchorLink href={instagram} text="Instagram" />.
        </Typography>
      </StyledPaper>
    </StyledPaperWrapper>
  </StyledWrapper>
);

export default Intro;
