import React from "react";

//style:
import { SideBarContainer } from "./style";

type Props = {
  children: React.ReactNode;
};
const SideBar = ({ children }: Props): JSX.Element => {
  return <SideBarContainer>{children}</SideBarContainer>;
};

export default SideBar;
