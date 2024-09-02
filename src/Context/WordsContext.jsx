import { createContext, useState, useEffect } from "react";
import { getWords } from "../Services/getWords";
import { addNewWord } from "../Services/add";
import { deleteWordById } from "../Services/delete";
import Loader from "../components/Loader/Loader";

export const WordsContext = createContext();

export function WordsProvider({ children }) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const addWord = async (newWord) => {
    try {
      const result = await addNewWord(newWord);
      if (result) {
        console.log("Added:", result);
      }
      setWords([...words, result]);
    } catch (error) {
      console.error(`Failed to add new word`, error);
    }
  };

  const deleteWord = async (id) => {
    try {
      const result = await deleteWordById(id);
      if (result) {
        console.log("Deleted on the server:", result);
      }
      setWords(words.filter((word) => word.id !== id));
    } catch (error) {
      console.error(`Failed to delete word (id ${id}):`, error);
    }
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div style={{ marginTop: "45vh", textAlign: "center" }}>{error}</div>
    );
  }

  const value = { words, setWords, addWord, deleteWord };

  return (
    <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
  );
}
