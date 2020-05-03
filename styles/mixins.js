import {css} from "@emotion/core";

const StyledLayoutMixin = () => css `
    @media (min-width: 1391px) {
      padding-right: 14%;
      padding-left: 14%;
    }
    @media (min-width: 1390px) {
      padding-right: 12%;
      padding-left: 12%;
    }
    @media (min-width: 1200px) {
      padding-right: 10%;
      padding-left: 10%;
    }
    @media (min-width: 900px) {
      padding-right: 7%;
      padding-left: 7%;
    }
      @media (max-width: 899px) {
      padding-right: 6%;
      padding-left: 6%;
    }
  `;

export {StyledLayoutMixin};
