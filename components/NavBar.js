import React from "react";
import styled from "@emotion/styled";
import { Typography, Link } from "../components/";
import { useRouter } from "next/router";

const StyledNav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const NavBar = () => {
  const router = useRouter();

  return (
    <StyledNav>
      <Typography variant="nav">
        <Link showLine={router.pathname === "/"} variant="nav" href="/">
          Home
        </Link>
      </Typography>
      <Typography variant="nav">
        <Link
          showLine={router.pathname === "/projects"}
          variant="nav"
          href="/projects"
        >
          Projects
        </Link>
      </Typography>
    </StyledNav>
  );
};

export default NavBar;
