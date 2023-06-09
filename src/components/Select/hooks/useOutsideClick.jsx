import { useEffect } from "react";

const useOutsideClick = (
  ref,
  callback
) => {
  const listener = (event) => {
    if (!ref.current || ref.current.contains(event.target)) return;
    callback(event);
  };

  useEffect(() => {
    document.addEventListener("click", listener);

    return () => document.removeEventListener("click", listener);
    // eslint-disable-next-line
  }, []);
};

export default useOutsideClick;
