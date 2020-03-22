import React from "react";
import Button from "./Button";

function ConfirmTeams({ teams, disabled, onConfirmTeamsButtonClick }) {
  return (
    <Button
      disabled={disabled}
      onClick={() => onConfirmTeamsButtonClick(teams)}
    >
      confirm
    </Button>
  );
}

export default ConfirmTeams;
