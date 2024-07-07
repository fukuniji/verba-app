import style from "./Card.module.scss";
import { useEffect, useState } from "react";

export default function Card({ word }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [word]);

  return (
    <>
      <div className={style.card}>
        <h3>{word.english}</h3>
        <p>{word.transcription}</p>
        {isFlipped ? (
          <p className={style.translation}>{word.russian}</p>
        ) : (
          <button
            onClick={() => {
              setIsFlipped(true);
            }}
            className={`${style.button_flip} ${style.button}`}
          >
            Посмотреть
          </button>
        )}
      </div>
    </>
  );
}
