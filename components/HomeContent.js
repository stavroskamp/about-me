import React from "react";
import { Intro, Timeline } from ".";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeContent = () => (
  <StyledWrapper>
    <Intro />
    <Timeline />
  </StyledWrapper>
);

export default HomeContent;
