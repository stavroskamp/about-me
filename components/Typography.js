import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const StyledParagraph = styled.p`
  color: white;
  font-family: "Lato", Arial, sans-serif;

  /* p */
  ${(props) =>
    props.variant === "p" &&
    css`
      font-size: 1.2rem;
      font-weight: 400;
    `}
`;

const Typography = (props) => (
  <StyledParagraph variant={props.variant}>{props.children}</StyledParagraph>
);

export default Typography;
