import React from "react";
import Title from "./Title.js";
import styled from "@emotion/styled";
import { useTheme } from "emotion-theming";

const Header = styled.header`
  margin: 0px;
  background-color: ${props => props.theme.colors.wrapper};
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
const SwitchTheme = styled.div`
  border: none;
  background: none;
  height: 80px;
  width: 80px;
  margin: 0px 10px;
`;

const SwitchThemeImage = styled.img`
  height: 100%;
  width: 100%;
`;

function Appheader({ onSwitchChangeClick }) {
  const theme = useTheme();
  return (
    <Header>
      <Title>Supa</Title>
      <SwitchTheme onClick={onSwitchChangeClick}>
        <SwitchThemeImage src={theme.images.switchicon} alt="Switchtheme" />
      </SwitchTheme>
      <Title>Maria</Title>
    </Header>
  );
}

export default Appheader;
