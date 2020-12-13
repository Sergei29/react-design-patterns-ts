import React from "react";
import { ClapCount, ClapIcon, ClapTotal } from "./components";
// styles:
import { MediumClapContainer } from "./style";

const MediumClap = (): JSX.Element => {
  const count = 0;
  const countTotal = 227;
  return (
    <MediumClapContainer>
      <ClapCount count={count} />
      <ClapIcon />
      <ClapTotal countTotal={countTotal} />
    </MediumClapContainer>
  );
};

export default MediumClap;
