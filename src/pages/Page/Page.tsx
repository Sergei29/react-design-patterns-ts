import React from "react";
//style:
import { PageContainer } from "./style";

type Props = {
  heading: React.ReactNode;
  childOne?: React.ReactNode;
  childTwo?: React.ReactNode;
};

const Page = ({
  heading,
  childOne = <p>Component one</p>,
  childTwo = <p>Component two</p>,
}: Props): JSX.Element => {
  return (
    <PageContainer>
      <h2 className="heading">{heading}</h2>
      <div className="features">
        <div className="featureItem">{childOne}</div>
        <div className="featureItem">{childTwo}</div>
      </div>
    </PageContainer>
  );
};

export default Page;
