import React from "react";
import Crown from "../assets/crown.png";
import styled from "@emotion/styled";

const Img = styled.img`
  height: 80px;
  margin: 30px;
`;
function Logo(props) {
  return <Img src={Crown} alt="Logo" {...props} />;
}
export default Logo;
