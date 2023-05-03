import s from "./SearchBar.module.css";
import searchIcon from "../../assets/search-icon.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = ({ theme, setSearch }) => {
   const [termValue, settermValue] = useState("");
   const navigate = useNavigate();

   const onKeyHandler = (e) => {
      if (e.key === "Enter") {
         setSearch(termValue);
         settermValue("");
         navigate(`/${termValue}`)
      }
   };

   const onSearch = () => {
      setSearch(termValue);
      settermValue("");
   };

   return (
      <div className={s.searchBar}>
         <input
            onKeyDown={onKeyHandler}
            onChange={(e) => settermValue(e.target.value)}
            value={termValue}
            type="text"
            className={
               theme === "light"
                  ? s.searchInput
                  : `${s.searchInput} ${s.searchInputDark}`
            }
            placeholder="Search for any word…"
         />
         <Link to={`/${termValue}`} className={s.search} onClick={onSearch}>
            <img src={searchIcon} alt="search" />
         </Link>
      </div>
   );
};
export default SearchBar;
