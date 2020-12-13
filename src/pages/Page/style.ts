import styled from "styled-components";
import { color } from "../../constants/styleVariables";

export const PageContainer = styled.main`
  padding: 9.25vh 2.5vw 0;
  .heading {
    margin-bottom: 2.5vw;
  }
  .features {
    display: flex;
    flex-direction: row;

    .featureItem {
      width: 31.88vw;
      position: relative;
      width: 100%;
      min-height: 360px;
      max-height: 360px;
      overflow-y: scroll;
      padding: 2.5vw;
      border-radius: 16px;
      background-color: ${color.featureItemBgColor};
      display: flex;
      justify-content: center;
      align-items: center;

      &:nth-child(2) {
        margin-left: 2.5vw;
      }
    }
  }
`;
