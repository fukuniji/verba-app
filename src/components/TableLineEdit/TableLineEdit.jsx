import style from "./TableLineEdit.module.scss";

export default function TableLine(props) {
  const saveLine = (e) => {
    e.preventDefault();
    console.log("Изменения сохранены:");
  };

  return (
    <>
      <form className={style.line_editing}>
        <input type="text" className={style.input} value={props.word} />
        <input type="text" className={style.input} value={props.transl} />
        <input type="text" className={style.input} value={props.transc} />
        <input type="text" className={style.input} value={props.theme} />
        <div className={style.edit_cell}>
          <button
            type="submit"
            onClick={saveLine}
            className={`${style.button_save} ${style.button}`}
          >
            Сохранить
          </button>
          <button className={`${style.button_cancel} ${style.button}`}>
            Отменить
          </button>
        </div>
      </form>
    </>
  );
}
