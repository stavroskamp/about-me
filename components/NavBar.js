import React from "react";
import styled from "@emotion/styled";
import { Typography, Link } from "../components/";

const StyledNav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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
      <Link variant="nav" href="#timeline" replace>
        Timeline
      </Link>
    </Typography>
  </StyledNav>
);

export default NavBar;
