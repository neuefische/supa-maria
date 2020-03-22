import styled from "@emotion/styled";

const ConfirmButton = styled.button`
  ${props =>
    props.disabled
      ? "background: radial-gradient(circle,rgba(234, 234, 234, 1) 0%,rgba(178, 178, 178, 1) 100%);cursor: not-allowed;"
      : "background-color: red; cursor: pointer;"}
  margin: 10px;
  padding: 10px 10px;
  width: 100%;
  max-width: 250px;
  height: 60px;
  border-radius: 25px;
  font-family: "Sweet Cake", serif;
  font-size: 2.5rem;
  color: white;
`;

export default ConfirmButton;
