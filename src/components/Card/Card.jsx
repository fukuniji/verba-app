import style from "./Card.module.scss";
import { useEffect, useState, useRef } from "react";

export default function Card({ word, handleLearnedWord, focus }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const btnRef = useRef(null);

  useEffect(() => {
    if (focus && btnRef.current) {
      btnRef.current.focus();
    }
  }, [focus]);

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
            ref={btnRef}
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
