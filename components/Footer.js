import React from "react";
import styled from "@emotion/styled";
import { PRIMARY_BG_COLOR } from "../constants/colors";
import { Typography } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCoffee,
  faCode,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${PRIMARY_BG_COLOR};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 0.8rem;
  color: ${(props) => {
    switch (props.type) {
      case "code":
        return "lightseagreen";
      case "heart":
        return "red";
      case "coffee":
        return "saddlebrown";
      default:
        return "#ffffff";
    }
  }};
`;

const Footer = () => (
  <StyledFooter>
    <Typography as="p" variant="small">
      Site ingredients: <StyledIcon title="code" type="code" icon={faCode} /> ,{" "}
      <StyledIcon title="love" type="heart" icon={faHeart} /> and some{" "}
      <StyledIcon title="coffee" type="coffee" icon={faCoffee} />
    </Typography>
    <Typography as="p" variant="small">
      Stavros Kampanakis <StyledIcon icon={faCopyright} />{" "}
      {new Date().getFullYear()}
    </Typography>
  </StyledFooter>
);

export default Footer;
