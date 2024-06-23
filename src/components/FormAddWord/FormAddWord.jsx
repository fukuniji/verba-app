import style from "./FormAddWord.module.scss";

export default function FormAddWord() {
  return (
    <div className={style.container}>
      <h2 id="addSection">Добавление нового слова</h2>
      <form className={style.word_adding}>
        <input type="text" className={style.input} placeholder="Слово" />
        <input type="text" className={style.input} placeholder="Перевод" />
        <input type="text" className={style.input} placeholder="Транскрипция" />
        <input type="text" className={style.input} placeholder="Тема" />
        <div className={style.add_word_btn}>
          <button
            type="submit"
            className={`${style.button_save} ${style.button}`}
          >
            Добавить
          </button>
          <button
            type="reset"
            className={`${style.button_cancel} ${style.button}`}
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}
