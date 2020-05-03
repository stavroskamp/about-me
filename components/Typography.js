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
        margin: 0.3rem 0;
      `}

      ${(props) =>
        props.as === "li" &&
        css`
          font-size: 1rem;
          font-weight: 300;
          margin: 0.3rem 0;
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

    /* h3 */
    ${(props) =>
      props.as === "h3" &&
      css`
        font-size: 1.1rem;
        font-weight: 600;
        margin: 4px 0;
      `}

          /* h3 */
    ${(props) =>
      props.as === "h4" &&
      css`
        font-size: 1rem;
        font-weight: 200;
        margin: 3px 0;
        font-style: italic;
      `}

    /* h3 */
    ${(props) =>
      props.as === "p" &&
      props.variant === "subtext" &&
      css`
        font-size: 0.8rem;
        font-weight: 200;
        margin: 4px 0;
        color: gray;
      `}

    /* tag */
    ${(props) =>
      props.as === "p" &&
      props.variant === "tag" &&
      css`
        font-size: 0.9rem;
        font-weight: 200;
        margin: 4px 0;
        color: #182848;
      `}

    /* tag header */
    ${(props) =>
      props.as === "p" &&
      props.variant === "tagheader" &&
      css`
        font-size: 0.9rem;
        font-weight: 600;
        text-decoration: underline;
        margin: 4px 0;
        color: #7496d8;
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
