import styled from "styled-components";

export const ClapIconContainer = styled.span`
  & > svg {
    width: 40px;
    fill: none;
    stroke: #27ae60;
    stroke-width: 2px;
    .checked {
      fill: #27ae60;
      stroke: #fff;
      stroke-width: 1px;
    }
  }
`;
