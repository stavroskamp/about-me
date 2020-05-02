import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Typography, Paper } from "../components";
import PropTypes from "prop-types";

const StyledPaper = styled((props) => <Paper {...props} />)`
  flex-direction: column;
  position: relative;
  width: inherit;

  @media (min-width: 850px) {
    width: 40%;
    :after,
    :before {
      top: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-width: 16px;
      margin-top: -16px;

      ${(props) =>
        props.placement === "right" &&
        css`
          right: 100%;
          border-right-color: white;
        `}

      ${(props) =>
        props.placement === "left" &&
        css`
          border-left-color: white;
          left: 100%;
        `}
    }

    ${(props) =>
      props.placement === "left" &&
      css`
        align-self: flex-start;
      `}

    ${(props) =>
      props.placement === "right" &&
      css`
        align-self: flex-end;
      `}
  }
`;

const TimelineBox = (props) => (
  <StyledPaper topLine={true} placement={props.placement}>
    <Typography as="h3">
      {props.company} - {props.jobTitle}
    </Typography>
    <Typography as="p">{props.jobDescription}</Typography>
  </StyledPaper>
);

TimelineBox.propTypes = {
  company: PropTypes.string,
  jobTitle: PropTypes.string,
  jobDescription: PropTypes.string,
  placement: PropTypes.oneOf(["right", "left"]),
};

export default TimelineBox;
