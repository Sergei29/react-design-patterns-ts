import React from "react";
import { NavLink } from "react-router-dom";
import { navLinksList } from "./navLinksList";

//styles:
import { NavigationContainer } from "./style";

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      {navLinksList.map((objLink) => (
        <NavLink key={objLink.name} to={objLink.path} exact={objLink.exact}>
          {objLink.name}
        </NavLink>
      ))}
    </NavigationContainer>
  );
};

export default Navigation;
