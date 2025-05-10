import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import s from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <AppBar />
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
