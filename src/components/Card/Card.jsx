import style from "./Card.module.scss";

export default function Card({ data }) {
  return (
    <>
      <div className={style.card}>
        <h3>{data[0].english}</h3>
        <p>{data[0].transcription}</p>
        <div>Посмотреть</div>
        {/* <p>{data[0].russian}</p> */}
      </div>
    </>
  );
}
