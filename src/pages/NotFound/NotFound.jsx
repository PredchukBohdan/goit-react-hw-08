import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

import React from "react";

export const NotFound = () => {
  return (
    <>
      <h1 className={s.title}>404</h1>
      <p className={s.text}>This page not found</p>
      <button className={s.button}>
        <Link to="/">Go Home</Link>
      </button>
    </>
  );
};
