import React from "react";
import { Switch, Route } from "react-router-dom";

//components:
import Main from "../Main";
import SideBar from "../SideBar";
import Navigation from "../../components/Navigation";
import Homepage from "../../pages/Homepage";
import MediumClapPage from "../../pages/MediumClapPage";

//styles:
import { GlobalStyle } from "./GlobalStyle";
import { AppContainer } from "./style";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <SideBar>
          <Navigation />
        </SideBar>
        <Main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/medium-clap" component={MediumClapPage} />
          </Switch>
        </Main>
      </AppContainer>
    </>
  );
};

export default App;
