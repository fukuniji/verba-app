import Slider from "../../components/Slider/Slider";
import Card from "../../components/Card/Card";
import style from "./Cards.module.scss";
import { useState } from "react";

export default function Cards({ data }) {
  const [learnedWords, setLearnedWords] = useState(new Set());

  const handleLearnedWord = (word) => {
    setLearnedWords((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.add(word.id); // Метод add добавит новый элемент, если в newSet ещё нет элемента с таким же значением
      // У каждого слова есть уникальный id
      return newSet;
    });
  };

  return (
    <section className={style.card_section}>
      <h2>Карточки</h2>
      <Slider data={data}>
        {(word) => (
          <Card word={word} handleLearnedWord={() => handleLearnedWord(word)} />
        )}
      </Slider>
      <p className={style.learned}>
        Изучено слов: {learnedWords.size} из {data.length}
      </p>
    </section>
  );
}
