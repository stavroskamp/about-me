import { css } from "@emotion/core";

const StyledLayoutMixin = () => css`
  @media (min-width: 400px) {
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

export { StyledLayoutMixin };
