import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import { ANCHOR_LINK_COLOR, TYPOGRAPHY_COLOR } from "../constants/colors";

const StyledIconWrapper = styled.div`
  padding: 10px 0;
`;

const StyledAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  margin: 8px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${TYPOGRAPHY_COLOR};
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: ${ANCHOR_LINK_COLOR};
  }
`;

const ProfileIcons = () => (
  <StyledIconWrapper>
    {/* TODO: add my email */}
    <StyledAnchor href="mailto:test@example.com?subject=Hello Stavros!">
      <StyledIcon icon={faEnvelope} />
    </StyledAnchor>
    <StyledAnchor
      href="https://www.linkedin.com/in/stavroskampanakis"
      target="_blank"
    >
      <StyledIcon icon={faLinkedin} />
    </StyledAnchor>
    <StyledAnchor href="https://github.com/stavroskamp" target="_blank">
      <StyledIcon icon={faGithub} />
    </StyledAnchor>
  </StyledIconWrapper>
);

export default ProfileIcons;
