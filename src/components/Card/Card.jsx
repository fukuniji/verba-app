import style from "./Card.module.scss";
import FlashCard from "../FlashCard/FlashCard";
import { useEffect, useState } from "react";
// import back from "../../assets/back.svg";
// import forward from "../../assets/forward.svg";
// import data from "../../data.json";

export default function Card({ word }) {
  const [flagFlip, setFlip] = useState(false);

  useEffect(() => {
    setFlip(false);
  }, [word]);

  return (
    <>
      <div className={style.card}>
        <h3>{word.english}</h3>
        <p>{word.transcription}</p>

        {flagFlip ? (
          <div>
            back <p>{word.russian}</p>
          </div>
        ) : (
          <div
            onClick={() => {
              setFlip(true);
            }}
          >
            front <p>Посмотреть</p>
            <span>{word.id}</span>
          </div>
        )}
        {/* <FlashCard /> */}
      </div>
    </>
  );
}
