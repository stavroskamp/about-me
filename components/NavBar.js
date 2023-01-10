import React from "react";
import styled from "@emotion/styled";
import { Typography, Link } from "../components/";
import { ANCHOR_LINK_COLOR } from "../constants/colors";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #2f3f5f;
  opacity: 90%;
  padding: 0px 32px;
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 900px;
  max-width: 900px;
`;

const StyledRhombus = styled.div`
  display: flex;
  color: ${ANCHOR_LINK_COLOR};
  width: 30px;
  /* font-size: 16px; */
  align-items: center;
  justify-content: center;
`;

const NavBar = () => (
  <StyledNav>
    <StyledWrapper>
      <Typography variant="nav">
        <Link variant="nav" href="#hi" replace>
          Hi
        </Link>
      </Typography>
      <Typography variant="nav">
        <StyledRhombus>|</StyledRhombus>
      </Typography>
      <Typography variant="nav">
        <Link variant="nav" href="#experience" replace>
          Experience
        </Link>
      </Typography>
    </StyledWrapper>
  </StyledNav>
);

export default NavBar;
