import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const StyledParagraph = styled.div`
    color: white;
    font-family: "Lato", Arial, sans-serif;

  /* p */
  ${(props) =>
    props.as === "p" &&
    css`
      font-size: 1.3rem;
      font-weight: 300;
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
      font-size: 1.5rem;
      font-weight: 300;
    `}
`;

const Typography = (props) => (
  <StyledParagraph as={props.as}>{props.children}</StyledParagraph>
);

export default Typography;
