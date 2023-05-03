import { useLoaderData } from "react-router";
import DescriptionItem from "../components/DescriptionItem/DescriptionItem";
import MainDescr from "../components/MainDescr/MainDescr";

const MainPage = () => {

   const word = useLoaderData();

   if (!word[0]) {
      return <div>Loading</div>;
   }

   return (
      <div>
         <div>
            <MainDescr word={word[0]} />
            {word[0].meanings.map((meanings, i) => (
               <DescriptionItem
                  key={i}
                  meanings={meanings}
               />
            ))}
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
