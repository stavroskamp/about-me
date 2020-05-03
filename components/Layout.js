import React from "react";
import { NavBar, Footer } from "../components";
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
    <NavBar />
    <StyledSection>{props.children}</StyledSection>
    <Footer />
  </StyledWrapper>
);

export default Layout;
