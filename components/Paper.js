import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { ANCHOR_LINK_COLOR } from "../constants/colors";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 6px;
  padding: 24px;
  margin: 30px 0;

  ${(props) =>
    props.topLine &&
    css`
      border-top: 4px solid ${ANCHOR_LINK_COLOR};
    `}
`;

const Paper = (props) => (
  <StyledWrapper {...props}>{props.children}</StyledWrapper>
);

Paper.propTypes = {
  topLine: PropTypes.bool,
  children: PropTypes.node,
};

export default Paper;
