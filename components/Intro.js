import React from "react";
import {
  ProfileImage,
  Typography,
  AnchorLink,
  ProfileIcons,
  Paper,
} from "../components";
import styled from "@emotion/styled";
import { linkedin, github, email } from "../constants/urls";
import { StyledLayoutMixin } from "../styles/mixins";
import bg from "../public/profile-bg.jpg";

const StyledWrapper = styled.div`
  background-color: #5872a7;
  padding: 70px 0;
  background-image: url(${bg});
  background-size: cover;
  background-position: top;

  @media (min-width: 850px) {
    background-position: bottom;
  }

  ${StyledLayoutMixin};
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
    margin: 0 0 30px 0;
  }
`;

const StyledPaper = styled((props) => <Paper {...props} />)`
  display: flex;
  flex-direction: column;

  @media (min-width: 1120px) {
    flex: 2 1 0px;
    margin: 0;
  }
`;

const getExperienceInYears = () => new Date().getFullYear() - 2014;

const Intro = () => (
  <StyledWrapper id="hi">
    <StyledImage>
      <ProfileImage />
      <ProfileIcons />
    </StyledImage>
    <StyledPaper topLine={true}>
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
    </StyledPaper>
  </StyledWrapper>
);

export default Intro;
