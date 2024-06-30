import style from "./Card.module.scss";
import { useState } from "react";

export default function Card({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <div className={style.card}>
        <h3>{data[0].english}</h3>
        <p>{data[0].transcription}</p>
        {isFlipped ? (
          <p className={style.translation}>{data[0].russian}</p>
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
