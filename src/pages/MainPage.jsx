import { useLoaderData } from "react-router";
import DescriptionItem from "../components/DescriptionItem/DescriptionItem";
import MainDescr from "../components/MainDescr/MainDescr";
import s from "./MainPage.module.scss";
import sourceIcon from "../assets/source-icon.svg";

const MainPage = () => {
   const word = useLoaderData();

   if (!word[0]) {
      return <div>Loading</div>;
   }

   return (
      <div>
         <MainDescr word={word[0]} />
         {word[0].meanings.map((meanings, i) => (
            <DescriptionItem key={i} meanings={meanings} />
         ))}
         <div className={s.sources}>
            <h4 className={s.sourcesTitle}>Source</h4>
            <a href={word[0].sourceUrls} className={s.sourcesLink}>
               {word[0].sourceUrls}{" "}
               <span>
                  <img src={sourceIcon} alt="" />
               </span>
            </a>
         </div>
      </div>
   );
};

const wordLoader = async ({ request, params }) => {
   const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${params.word}`
   );
   if (!res.ok) {
      const error = await res.json();
      throw new Response("", { statusText: JSON.stringify(error) });
   }
   return await res.json();
};

export { MainPage, wordLoader };
