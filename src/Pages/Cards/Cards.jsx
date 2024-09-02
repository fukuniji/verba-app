import Slider from "../../components/Slider/Slider";
import Card from "../../components/Card/Card";
import style from "./Cards.module.scss";

export default function Cards({ data }) {
  return (
    <section className={style.card_section}>
      <h2>Карточки</h2>
      <Slider data={data}>{(word) => <Card word={word} />}</Slider>
    </section>
  );
}
