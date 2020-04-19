import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { TYPOGRAPHY_COLOR } from "../constants/colors";

const StyledParagraph = styled.div`
    color: ${TYPOGRAPHY_COLOR};
    font-family: "Rubik", Arial, sans-serif;
    line-height: 1.4;

  /* p */
  ${(props) =>
    props.as === "p" &&
    css`
      font-size: 1.2rem;
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
      font-size: 1.8rem;
      font-weight: 400;
    `}

  /* h2 */
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.4rem;
      font-weight: 300;
    `}
`;

const Typography = (props) => (
  <StyledParagraph
    as={props.as}
    {...(props.variant && { variant: props.variant })}
  >
    {props.children}
  </StyledParagraph>
);

export default Typography;
