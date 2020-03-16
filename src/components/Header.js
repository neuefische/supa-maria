import React from "react";
import Logo from "./Crown.js";
import Title1 from "./Title.js";
import Title2 from "./Title.js";
import styled from "@emotion/styled";

const Header = styled.header`
  margin: 0px;
  height: 128px;
  background-color: #953f70;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function Appheader(props) {
  return (
    <Header>
      <Title1>Supa</Title1>
      <Logo />
      <Title2>Maria</Title2>
    </Header>
  );
}

export default Appheader;
