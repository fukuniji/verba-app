import { createContext, useState, useEffect } from "react";
import { getWords } from "../Services/getWords";
import Loader from "../components/Loader/Loader";

export const WordsContext = createContext();

export function WordsProvider({ children }) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const value = { words, setWords };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getWords();
        setWords(data);
      } catch (error) {
        console.error("Error fetching words:", error);
        setError("Не удалось загрузить слова. Пожалуйста, попробуйте позднее.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div style={{ marginTop: "45vh", textAlign: "center" }}>{error}</div>
    );
  }
  return (
    <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
  );
}
