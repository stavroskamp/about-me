import React from "react";
import styled from "@emotion/styled";
import { ANCHOR_LINK_COLOR } from "../constants/colors";

const StyledLink = styled.a`
  color: ${ANCHOR_LINK_COLOR};
  font-weight: inherit;
`;

const Link = (props) => <StyledLink {...props}>{props.children}</StyledLink>;

export default Link;
