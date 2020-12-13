import styled from "styled-components";

export const MediumClapContainer = styled.span`
  position: relative;
  outline: 1px solid transparent;
  border-radius: 50%;
  border: 1px solid #bdc3c7;
  width: 80px;
  height: 80px;
  background: none;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50%;
    width: 79px;
    height: 79px;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid #27ae60;
    transition: border-color 0.3s ease-in;
  }
  &:hover:after {
    animation: shockwave 1s ease-in infinite;
  }
  @keyframes shockwave {
    0% {
      transform: scale(1);
      box-shadow: 0 0 2px #27ae60;
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
      box-shadow: 0 0 50px #145b32, inset 0 0 10px #27ae60;
    }
  }
`;
