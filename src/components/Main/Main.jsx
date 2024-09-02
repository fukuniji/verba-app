import style from "./Main.module.scss";

export default function Main() {
  return (
    <section className={style.intro_section}>
      <p>
        <span>Verba</span> поможет пополнить ваш словарный запас!
      </p>
      <p>Учите новые слова с помощью карточек...</p>
    </section>
  );
}
