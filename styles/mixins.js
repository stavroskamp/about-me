import { css } from "@emotion/react";

const StyledLayoutMixin = () => css`
  @media (min-width: 300px) {
    padding-right: 5%;
    padding-left: 5%;
  }
  @media (min-width: 500px) {
    padding-right: 6%;
    padding-left: 6%;
  }
  @media (min-width: 900px) {
    padding-right: 7%;
    padding-left: 7%;
  }
  @media (min-width: 1000px) {
    padding-right: 10%;
    padding-left: 10%;
  }
  @media (min-width: 1200px) {
    padding-right: 16%;
    padding-left: 16%;
  }
  @media (min-width: 1391px) {
    padding-right: 19%;
    padding-left: 19%;
  }
`;

const StyledBgGradientMixin = () => css`
  background: #2f3f5f;
  background: -webkit-radial-gradient(center, #5761b3, #2f3f5f);
  background: -moz-radial-gradient(center, #5761b3, #2f3f5f);
  background: radial-gradient(ellipse at center, #5761b3, #2f3f5f);
`;

export { StyledLayoutMixin, StyledBgGradientMixin };
