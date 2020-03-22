import React from "react";
import Button from "./Button";
import styled from "@emotion/styled";

const ConfirmButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`;

function ConfirmTeams({ teams, disabled, onConfirmTeamsButtonClick }) {
  return (
    <ConfirmButtonWrapper>
      <Button
        disabled={disabled}
        onClick={() => onConfirmTeamsButtonClick(teams)}
      >
        confirm
      </Button>
    </ConfirmButtonWrapper>
  );
}

export default ConfirmTeams;
