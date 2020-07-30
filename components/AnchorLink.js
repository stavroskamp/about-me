import React from "react";
import styled from "@emotion/styled";
import { ANCHOR_LINK_COLOR } from "../constants/colors";

const StyledAnchor = styled.a`
  color: ${ANCHOR_LINK_COLOR};
  font-weight: inherit;
`;

const AnchorLink = (props) => (
  <StyledAnchor href={props.href} target="_blank" rel="noopener">
    {props.text}
  </StyledAnchor>
);

export default AnchorLink;
