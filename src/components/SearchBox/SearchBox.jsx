import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleSetFilter = (value) => {
    dispatch(changeFilter(value));
  };
  return (
    <div className={s.searchBox}>
      <label className={s.searchLabel}>
        <span>Find contacts by name</span>
        <input
          className={s.searchInput}
          type="text"
          name="search"
          value={filter}
          onChange={(e) => handleSetFilter(e.target.value)}
        />
      </label>
    </div>
  );
};
