import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
  const setIsActive = ({ isActive }) => {
    return isActive ? s.active : "";
  };
  return (
    <nav className={s.navigation}>
      <ul className={s.navigationList}>
        <li className={s.navigationItem}>
          <NavLink className={setIsActive} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.navigationItem}>
          <NavLink className={setIsActive} to="contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
