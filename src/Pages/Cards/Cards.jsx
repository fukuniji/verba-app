import { useState } from "react";
import back from "../../assets/back.svg";
import forward from "../../assets/forward.svg";
import Card from "../../components/Card/Card";

export default function Cards({ stateWords }) {
  const [countSlide, setCountSlide] = useState(0);
  // countSlide -- это индекс

  function nextSlide() {
    setCountSlide((prevCount) => prevCount + 1);
  }

  function prevSlide() {
    setCountSlide((prevCount) => prevCount - 1);
  }

  return (
    <>
      <h2>Карточки (колода)</h2>

      <div>
        <button onClick={prevSlide}>
          prev
          <img src={back} alt="back" title="Назад" />
        </button>
        <Card word={stateWords.words[countSlide]} />
        <button onClick={nextSlide}>
          next
          <img src={forward} alt="forward" title="Вперед" />
        </button>
      </div>
    </>
  );
}
