import { createContext, useState, useEffect } from "react";
import { getWords } from "../Services/getWords";
import Loader from "../components/Loader/Loader";

export const WordsContext = createContext();

export function WordsProvider({ children }) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const value = { words, setWords };

  useEffect(() => {
    getWords().then((data) => {
      setWords(data);
    });
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
  );
}
