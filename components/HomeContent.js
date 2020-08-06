import React from "react";
import { Intro, Experience, NavBar } from ".";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeContent = () => (
  <StyledWrapper>
    <NavBar />
    <Intro />
    <Experience />
  </StyledWrapper>
);

export default HomeContent;
