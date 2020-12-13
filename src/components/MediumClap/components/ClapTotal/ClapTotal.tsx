import React from "react";
// styles:
import { ClapTotalContainer } from "./style";

type Props = {
  countTotal: number;
};
const ClapTotal = ({ countTotal }: Props): JSX.Element => {
  return <ClapTotalContainer>{countTotal}</ClapTotalContainer>;
};

export default ClapTotal;
