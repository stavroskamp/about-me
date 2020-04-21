import React from "react";
import { NavBar, Footer } from "../components";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 0 14%;
  background: linear-gradient(45deg, #4b6cb7 0%, #182848 100%);

  @media (max-width: 1390px) {
    padding: 0 12%;
  }
  @media (max-width: 1200px) {
    padding: 0 10%;
  }
  @media (max-width: 1120px) {
    padding: 0 7%;
  }
`;

const StyledSection = styled.section`
  flex: 1;
  display: flex;
  padding: 0 0 20px 0;

  @media (min-width: 1120px) {
    padding: 40px 0 20px 0;
  }
`;

const Layout = (props) => (
  <StyledWrapper>
    <NavBar />
    <StyledSection>{props.children}</StyledSection>
    <Footer />
  </StyledWrapper>
);

export default Layout;
