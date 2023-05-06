import s from "./Index.module.scss";

export default function Index() {
   return (
      <div className={s.body}>
         <p className={s.title}>This is an English dictionary app.</p>
         <p className={s.subtitle}>
            Check out{" "}
            <a href="https://dictionaryapi.dev">
               the docs at dictionaryapi.dev
            </a>
         </p>
      </div>
   );
}
