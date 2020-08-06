import React from "react";
import styled from "@emotion/styled";
import { Typography, Link } from "../components/";
import { StyledLayoutMixin } from "../styles/mixins";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 100;
  padding-top: 3px;
  background-color: #2f3f5f;
  opacity: 90%;
  ${StyledLayoutMixin};

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const NavBar = () => (
  <StyledNav>
    <Typography variant="nav">
      <Link variant="nav" href="#hi" replace>
        Hi
      </Link>
    </Typography>
    <Typography variant="nav">
      <Link variant="nav" href="#experience" replace>
        Experience
      </Link>
    </Typography>
  </StyledNav>
);

export default NavBar;
