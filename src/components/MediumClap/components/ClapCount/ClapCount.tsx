import React from "react";
// style:
import { ClapCountContainer } from "./style";
type Props = {
  count: number;
};
const ClapCount = ({ count }: Props): JSX.Element => {
  return <ClapCountContainer>+{count}</ClapCountContainer>;
};

export default ClapCount;
