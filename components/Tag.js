import React from "react";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "../components";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 2px 6px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #9ebfff;
  font-size: 1rem;
  padding: 0 4px;
`;

const Tag = (props) => (
  <StyledWrapper>
    <StyledIcon icon={faTag} />
    <Typography as="p" variant="tag">
      {props.text}
    </Typography>
  </StyledWrapper>
);

Tag.propTypes = {
  text: PropTypes.string,
};

export default Tag;
