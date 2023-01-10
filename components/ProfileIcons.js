import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styled from "@emotion/styled";
import { ANCHOR_LINK_COLOR, TYPOGRAPHY_COLOR_LIGHT } from "../constants/colors";
import { linkedin, github, instagram } from "../constants/urls";
import Tooltip from "react-simple-tooltip";

const StyledIconWrapper = styled.div`
  padding: 10px 0;
  /* width of image plus the image ring */
  width: 246px;
  display: flex;
  justify-content: center;
`;

const StyledAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  margin: 8px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${TYPOGRAPHY_COLOR_LIGHT};
  font-size: 1.7rem;

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
      text: "LinkedIn",
    },
    {
      id: 2,
      link: github,
      icon: faGithub,
      text: "Github",
    },
    {
      id: 3,
      link: instagram,
      icon: faInstagram,
      text: "Instagram",
    },
  ];

  return (
    <StyledIconWrapper>
      {icons.map((i) => (
        <Tooltip
          key={i.id}
          content={i.text}
          placement="bottom"
          fontFamily="Rubik"
          radius={3}
        >
          <StyledAnchor
            key={i.id}
            href={i.link}
            aria-label={i.link}
            target="_blank"
            rel="noopener"
          >
            <StyledIcon icon={i.icon} />
          </StyledAnchor>
        </Tooltip>
      ))}
    </StyledIconWrapper>
  );
};

export default ProfileIcons;
