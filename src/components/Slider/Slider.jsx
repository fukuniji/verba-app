import style from "./Slider.module.scss";
import back from "../../assets/back.svg";
import forward from "../../assets/forward.svg";
import { useState } from "react";

export default function Slider({ children, data = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [focus, setFocus] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    setFocus(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
    setFocus(true);
  };

  const isEndOfDeck = currentIndex === data.length - 1;

  return (
    <div className={style.container}>
      <div className={style.slider_wrapper}>
        <button className={style.slider_btn} onClick={handlePrev}>
          <img
            className={style.slider_arrow}
            src={back}
            alt="back"
            title="Назад"
          />
        </button>
        {children(data[currentIndex], focus)}
        {/* {!isEndOfDeck && (
          <button className={style.slider_btn} onClick={handleNext}>
            <img
              className={style.slider_arrow}
              src={forward}
              alt="forward"
              title="Вперед"
            />
          </button>
        )} */}
        <button
          className={isEndOfDeck ? style.slider_btn_disabled : style.slider_btn}
          onClick={handleNext}
          disabled={isEndOfDeck}
        >
          <img
            className={style.slider_arrow}
            src={forward}
            alt="forward"
            title="Вперед"
          />
        </button>
      </div>
      <div className={style.counter}>
        {currentIndex + 1}/{data.length}
      </div>
    </div>
  );
}
