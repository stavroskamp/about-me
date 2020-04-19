import React from "react";
import { NavBar, Footer } from "../components";
import styled from "@emotion/styled";
import { PRIMARY_BG_COLOR } from "../constants/colors";

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 0 220px;
  background-color: ${PRIMARY_BG_COLOR};
`;

const StyledSection = styled.section`
  flex: 1;
  display: flex;
  padding: 20px 0;
`;

const Layout = (props) => (
  <StyledWrapper>
    <NavBar />
    <StyledSection>{props.children}</StyledSection>
    <Footer />
  </StyledWrapper>
);

export default Layout;
