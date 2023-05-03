import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
// import MainPage from "./pages/MainPage";
import { useUserTheme } from "./hooks/useUserThemeHook";

function App() {
   const [selected, setSelected] = useState("sans-serif");
   const [search, setSearch] = useState("");
   const { theme, toggleTheme } = useUserTheme("light");
  

   useEffect(() => {
      document.body.setAttribute("data-font", selected);
   }, [selected]);

   return (
      // <div className="App">
         <div className="container">
            <Header
               setSelected={setSelected}
               theme={theme}
               toggleTheme={toggleTheme}
            />
            <SearchBar search={search} setSearch={setSearch} theme={theme} />
            <Outlet className="outlet" context={{ setSearch }} />
         </div>
      // </div>
   );
}

export default App;
