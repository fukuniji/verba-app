import style from "./Card.module.scss";
import { useEffect, useState } from "react";

export default function Card({ word, handleLearnedWord }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false); // Сбрасываем состояние переворота при смене слова
  }, [word]);

  const handleClick = () => {
    handleLearnedWord(); // Увеличиваем счетчик изученных слов
    setIsFlipped(true);
  };

  return (
    <>
      <div className={style.card}>
        <h3>{word.english}</h3>
        <p>{word.transcription}</p>
        {isFlipped ? (
          <p className={style.translation}>{word.russian}</p>
        ) : (
          <button
            onClick={handleClick}
            className={`${style.button_flip} ${style.button}`}
          >
            Посмотреть
          </button>
        )}
      </div>
    </>
  );
}
