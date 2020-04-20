import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import { ANCHOR_LINK_COLOR, TYPOGRAPHY_COLOR_LIGHT } from "../constants/colors";
import { linkedin, github, instagram, email } from "../constants/urls";

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
  color: ${TYPOGRAPHY_COLOR_LIGHT};
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: ${ANCHOR_LINK_COLOR};
  }
`;

const ProfileIcons = () => {
  const icons = [
    {
      id: 1,
      link: linkedin,
      icon: faLinkedin,
    },
    {
      id: 2,
      link: github,
      icon: faGithub,
    },
    {
      id: 3,
      link: instagram,
      icon: faInstagram,
    },
  ];

  return (
    <StyledIconWrapper>
      <StyledAnchor href={`mailto:${email}?subject=Hello Stavros!`}>
        <StyledIcon icon={faEnvelope} />
      </StyledAnchor>
      {icons.map((i) => (
        <StyledAnchor key={i.id} href={i.link} target="_blank">
          <StyledIcon icon={i.icon} />
        </StyledAnchor>
      ))}
    </StyledIconWrapper>
  );
};

export default ProfileIcons;
