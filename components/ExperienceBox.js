import React from "react";
import styled from "@emotion/styled";
import { Typography, Paper, Tag } from "../components";
import PropTypes from "prop-types";

const StyledPaper = styled((props) => <Paper {...props} />)`
  flex-direction: column;
  position: relative;
  width: calc(100% - 48px);
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
  }
`;

const StyledTagWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

const StyledJobInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1.2rem 0;
`;

const ExperienceBox = (props) => (
  <React.Fragment>
    <StyledPaper topLine={true} placement={props.placement}>
      <StyledJobInfo>
        <Typography as="h3">{props.jobTitle}</Typography>
        <Typography as="h4">{props.company}</Typography>
        <Typography as="p" variant="subtext">
          {props.jobDuration}
        </Typography>
      </StyledJobInfo>
      {props.jobDescription}
      {props.technologies && (
        <React.Fragment>
          <Typography as="p" variant="tagheader">
            Technologies:
          </Typography>
          <StyledTagWrapper>
            {props.technologies.map((t, index) => (
              <Tag key={index} text={t} />
            ))}
          </StyledTagWrapper>
        </React.Fragment>
      )}
    </StyledPaper>
  </React.Fragment>
);

ExperienceBox.propTypes = {
  company: PropTypes.string,
  jobTitle: PropTypes.string,
  jobDescription: PropTypes.node,
  jobDuration: PropTypes.string,
  placement: PropTypes.oneOf(["right", "left"]),
};

export default ExperienceBox;
