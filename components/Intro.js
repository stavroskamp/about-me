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
import Image from "next/image";

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 32px 20px;
`;

const StyledBgWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  z-index: -1;
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
    <StyledBgWrapper>
      <Image
        alt="background image"
        src={bg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
    </StyledBgWrapper>
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
          technologies and I am also very interested in the UI and UX of an app.
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
