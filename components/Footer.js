import React from "react";
import styled from "@emotion/styled";
import { PRIMARY_BG_COLOR } from "../constants/colors";

const StyledFooter = styled.footer`
  height: 50px;
  background-color: ${PRIMARY_BG_COLOR};
`;

const Footer = () => <StyledFooter />;

export default Footer;
