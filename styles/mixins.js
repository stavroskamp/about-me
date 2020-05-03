import { css } from "@emotion/core";

const StyledLayoutMixin = () =>
  css`
    padding-right: 14%;
    padding-left: 14%;

    @media (max-width: 1390px) {
      padding-right: 0 12%;
      padding-left: 0 12%;
    }
    @media (max-width: 1200px) {
      padding-right: 0 10%;
      padding-left: 0 10%;
    }
    @media (max-width: 1120px) {
      padding-right: 0 7%;
      padding-left: 0 7%;
    }
  `;

export { StyledLayoutMixin };
