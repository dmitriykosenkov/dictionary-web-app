import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import { useUserTheme } from "./components/ThemeSwitcher/hooks/useUserThemeHook";
import "./App.scss";

function App() {
   const [selected, setSelected] = useState("sans-serif");
   const [search, setSearch] = useState("");
   const { theme, toggleTheme } = useUserTheme("light");

   useEffect(() => {
      document.body.setAttribute("data-font", selected);
   }, [selected]);

   return (
      <div className="container">
         <Header
            setSelected={setSelected}
            theme={theme}
            toggleTheme={toggleTheme}
         />
         <SearchBar search={search} setSearch={setSearch} theme={theme} />
         <Outlet className="outlet" context={{ setSearch }} />
      </div>
   );
}

export default App;
