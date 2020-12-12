import styled from "styled-components";
import { color, spacing } from "../../constants/styleVariables";

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 2.5vw;
  a {
    text-decoration: none;
    display: block;
    margin-right: ${spacing.unit(2)};
    margin-bottom: 7px;
    border-radius: 10px;
    padding-left: 1.25vw;
    padding-top: 0.8333333333333334vw;
    padding-bottom: 0.8333333333333334vw;
    color: ${color.font};
  }
  .active {
    padding-left: 1.25vw;
    border-radius: 10px;
    background: ${color.activeNavLink};
  }
`;
