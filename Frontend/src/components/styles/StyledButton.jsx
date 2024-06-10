import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0px 20px 0px 20px;
  background-color: ${(props) => props.$backgroundColor};
  border: none;
  border-radius: 6px;
  margin: ${(props) => props.$margin};
`;

export default StyledButton;
