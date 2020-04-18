import { Typography, Link } from "../components";
import confused from "../public/confused 404.gif";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledImage = styled.img`
  padding: 20px;
`;

export default function Custom404() {
  return (
    <StyledWrapper>
      <StyledImage src={confused} alt="404 image" />
      <Typography as="h2">
        There seems to be nothing here! <br /> Maybe go back to{" "}
        <Link href="/">Home</Link> ?
      </Typography>
    </StyledWrapper>
  );
}
