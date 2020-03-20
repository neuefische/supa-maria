import styled from "@emotion/styled";

const ButtonDisabled = styled.button`
  background: rgb(234, 234, 234);
  background: radial-gradient(
    circle,
    rgba(234, 234, 234, 1) 0%,
    rgba(178, 178, 178, 1) 100%
  );
  margin: 10px;
  padding: 10px 10px;
  width: 100%;
  max-width: 250px;
  height: 60px;
  border-radius: 25px;
  font-family: "Sweet Cake", serif;
  font-size: 2.5rem;
  color: white;
  cursor: not-allowed;
`;

// const ButtonConfirm = styled.button`
//   background: rgb(255, 238, 165);
//   background: radial-gradient(
//     circle,
//     rgba(255, 238, 165, 1) 0%,
//     rgba(255, 226, 0, 1) 100%
//   );
//   margin: 10px;
//   padding: 6px 10px;
//   width: 100%;
//   max-width: 250px;
//   height: 60px;
//   border-radius: 25px;
//   font-family: "Sweet Cake", serif;
//   font-size: 2.5rem;
//   color: white;
//   cursor: pointer;
// `;

export default ButtonDisabled;
