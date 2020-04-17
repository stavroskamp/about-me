import React from "react";
import styled from "@emotion/styled";
import { PRIMARY_BG_COLOR } from "../constants/colors";

const StyledNav = styled.nav`
  height: 50px;
  background-color: ${PRIMARY_BG_COLOR};
`;

const NavBar = () => <StyledNav />;

export default NavBar;
