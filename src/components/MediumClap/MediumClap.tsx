import React from "react";
import { ClapCount, ClapIcon, ClapTotal } from "./components";

const MediumClap = (): JSX.Element => {
  return (
    <div>
      <ClapCount />
      <ClapIcon />
      <ClapTotal />
    </div>
  );
};

export default MediumClap;
