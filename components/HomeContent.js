import React from "react";
import {Intro, Experience, NavBar} from ".";
import styled from "@emotion/styled";

const StyledWrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HomeContent = () => (
  <StyledWrapper>
    <NavBar/>
    <Intro/>
    <Experience/>
  </StyledWrapper>
);

export default HomeContent;
