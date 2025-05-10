import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export const AuthNav = () => {
  const setIsActive = ({ isActive }) => {
    return isActive ? s.active : "";
  };
  return (
    <div className={s.customer}>
      <ul className={s.customerList}>
        <li className={s.customerItem}>
          <NavLink className={setIsActive} to="login">
            Log In
          </NavLink>
        </li>
        <li className={s.customerItem}>
          <NavLink className={setIsActive} to="register">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
