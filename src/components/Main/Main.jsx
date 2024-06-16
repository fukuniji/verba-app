import Slider from "../Slider/Slider";
import Card from "../Card/Card";
import FormAddWord from "../FormAddWord/FormAddWord";
import Table from "../Table/Table";

import style from "./Main.module.scss";

export default function Main({ data }) {
  return (
    <>
      <main className={style.container}>
        <section className={style.intro_section}>
          <p>
            <span>Verba</span> поможет пополнить ваш словарный запас!
          </p>
          <p>Учите новые слова с помощью карточек...</p>
        </section>
        <section className={style.card_section}>
          <h2>Карточки</h2>
          <Slider>
            <Card data={data} />
          </Slider>
        </section>
        <FormAddWord />
        <Table data={data} />
      </main>
    </>
  );
}
