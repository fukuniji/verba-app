import { createContext, useState, useEffect } from "react";
import { getWords } from "../Services/getWords";
import Loader from "../components/Loader/Loader";

export const WordsContext = createContext();

export function WordsProvider({ children }) {
  const [words, setWords] = useState([]);
  const value = { words, setWords };

  useEffect(() => {
    getWords().then((data) => {
      setWords(data);
    });
  }, []);

  if (words.length === 0) {
    return <Loader />;
  }
  return (
    <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
  );
}
