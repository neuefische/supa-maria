import React from "react";
//import Logo from "./Crown.js";
import Title from "./Title.js";
import styled from "@emotion/styled";
import { useTheme } from "emotion-theming";

const Header = styled.header`
  margin: 0px;
  height: 128px;
  background-color: #953f70;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const SwitchButton = styled.switch`
  border: none;
  background: none;
  height: 80px;
  width: 80px;
  margin: 30px;
`;

function Appheader({ onSwitchChangeClick }) {
  const theme = useTheme();
  return (
    <Header>
      <Title>Supa</Title>
      <SwitchButton onClick={onSwitchChangeClick}>
        <span role="img" aria-label="Switch theme">
          <img src={theme.images.switchicon} alt="Switchtheme"></img>
        </span>
      </SwitchButton>
      <Title>Maria</Title>
    </Header>
  );
}

export default Appheader;
