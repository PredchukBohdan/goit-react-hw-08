import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.userMenu}>
      <p className={s.user}>Hello, {user.name}</p>
      <button onClick={() => dispatch(logout())} className={s.logout}>
        Log Out
      </button>
    </div>
  );
};
