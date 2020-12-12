import React from "react";
//style:
import { MainContainer } from "./style";

type Props = {
  children: React.ReactNode;
};
const Main = ({ children }: Props): JSX.Element => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
