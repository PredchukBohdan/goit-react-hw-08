import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";

export const AppBar = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <div className={clsx("container", s.headerContainer)}>
      <Navigation />
      {!isLogged && <AuthNav />}
      {isLogged && <UserMenu />}
    </div>
  );
};
