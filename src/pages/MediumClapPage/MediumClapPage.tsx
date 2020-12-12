import React from "react";
//components:
import Page from "../Page";
import MediumClap from "../../components/MediumClap";
// style:
import { MediumClapPageContainer } from "./style";

const MediumClapPage = () => {
  return (
    <MediumClapPageContainer>
      <Page
        heading="Medium Clap 👏"
        childOne={<MediumClap />}
        childTwo={<MediumClap />}
      />
    </MediumClapPageContainer>
  );
};

export default MediumClapPage;
