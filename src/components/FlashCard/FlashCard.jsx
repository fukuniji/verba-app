import style from "./FlashCard.module.scss";

export default function FlashCard() {
  return (
    <>
      <div className={style.flashcard_wrapper}>
        <div className="front"></div>
        <div className="back"></div>
      </div>
    </>
  );
}
