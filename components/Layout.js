import React from "react";
import { NavBar, Footer } from "../components";
import styled from "@emotion/styled";
import { PRIMARY_BG_COLOR } from "../constants/colors";

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const StyledSection = styled.section`
  flex: 1;
  background-color: ${PRIMARY_BG_COLOR};
`;

const Layout = (props) => (
  <StyledWrapper>
    <NavBar />
    <StyledSection>{props.children}</StyledSection>
    <Footer />
  </StyledWrapper>
);

export default Layout;
