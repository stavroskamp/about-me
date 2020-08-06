import React from "react";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const StyledSection = styled.section`
  flex: 1;
  display: flex;
`;

const Layout = (props) => (
  <StyledWrapper>
    <StyledSection>{props.children}</StyledSection>
  </StyledWrapper>
);

export default Layout;
