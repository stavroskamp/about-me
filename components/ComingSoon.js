import React from "react";
import styled from "@emotion/styled";
import { Typography } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { TYPOGRAPHY_COLOR_LIGHT } from "../constants/colors";

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${TYPOGRAPHY_COLOR_LIGHT};
  font-size: 3rem;
`;

const ComingSoon = () => (
  <StyledWrapper>
    <StyledIcon icon={faHammer} />
    <Typography as="h1" theme="light">
      Coming soon!
    </Typography>
  </StyledWrapper>
);

export default ComingSoon;
