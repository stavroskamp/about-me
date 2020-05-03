import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { ANCHOR_LINK_COLOR, TYPOGRAPHY_COLOR_LIGHT } from "../constants/colors";

const StyledLink = styled.a`
  color: ${ANCHOR_LINK_COLOR};
  font-weight: inherit;

  ${(props) =>
    props.variant === "nav" &&
    css`
      color: ${TYPOGRAPHY_COLOR_LIGHT};
      text-decoration: none;

      &:hover {
        color: ${ANCHOR_LINK_COLOR};
        &:after {
          transform: scaleX(1);
        }
      }

      &:after {
        content: "";
        display: block;
        width: 100%;
        margin-top: 2px;
        height: 2px;
        transition: transform 350ms ease;
        transform: scaleX(0);
        background-color: ${ANCHOR_LINK_COLOR};
      }
    `}
`;

const Link = (props) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default Link;
