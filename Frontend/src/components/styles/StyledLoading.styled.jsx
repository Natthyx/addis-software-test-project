import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`;

const StyledLoading = styled.div`
  width: 100px;
  height: 100px;
  border: solid;
  border-radius: 50%;
  border-top-color: #242424;
  position: absolute;
  left: 50%;
  animation-name: ${loadingAnimation};
  animation-duration: 0.75s;
  animation-iteration-count: infinite;
`;

export default StyledLoading;
