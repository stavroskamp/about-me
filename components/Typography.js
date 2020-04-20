import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  TYPOGRAPHY_COLOR_LIGHT,
  TYPOGRAPHY_COLOR_DARK,
} from "../constants/colors";

const StyledParagraph = styled.div`
  font-family: "Rubik", Arial, sans-serif;
  line-height: 1.4;
  color: ${(props) => {
    switch (props.theme) {
      case "light":
        return TYPOGRAPHY_COLOR_LIGHT;
      case "dark":
        return TYPOGRAPHY_COLOR_DARK;
      default:
        return TYPOGRAPHY_COLOR_DARK;
    }
  }};

    /* p */
    ${(props) =>
      props.as === "p" &&
      css`
        font-size: 1rem;
        font-weight: 300;
      `}

    /* p small */
    ${(props) =>
      props.as === "p" &&
      props.variant === "small" &&
      css`
        font-size: 0.8rem;
        font-weight: 300;
        margin: 0.2em 0;
      `}

    /* h1 */
    ${(props) =>
      props.as === "h1" &&
      css`
        font-size: 1.7rem;
        font-weight: 400;
      `}

    /* h2 */
    ${(props) =>
      props.as === "h2" &&
      css`
        font-size: 1.3rem;
        font-weight: 300;
      `}

    ${(props) =>
      props.variant === "nav" &&
      css`
        font-size: 1.3rem;
        font-weight: 300;
        margin: 0 10px;
      `};
`;

const Typography = ({ as, variant, children, ...other }) => (
  <StyledParagraph as={as} {...(variant && { variant: variant })} {...other}>
    {children}
  </StyledParagraph>
);

export default Typography;
