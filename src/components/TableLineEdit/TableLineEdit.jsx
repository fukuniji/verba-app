import style from "./TableLineEdit.module.scss";

export default function TableLineEdit(props) {
  const {
    word,
    transl,
    transc,
    theme,
    setWord,
    setTransl,
    setTransc,
    setTheme,
    setEditing,
    cancelEdit,
  } = props;

  const saveLine = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <>
      <form className={style.line_editing}>
        <input
          type="text"
          className={style.input}
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <input
          type="text"
          className={style.input}
          value={transl}
          onChange={(e) => setTransl(e.target.value)}
        />
        <input
          type="text"
          className={style.input}
          value={transc}
          onChange={(e) => setTransc(e.target.value)}
        />
        <input
          type="text"
          className={style.input}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
        <div className={style.edit_cell}>
          <button
            type="submit"
            onClick={saveLine}
            className={`${style.button_save} ${style.button}`}
          >
            Сохранить
          </button>
          <button
            onClick={cancelEdit}
            className={`${style.button_cancel} ${style.button}`}
          >
            Отменить
          </button>
        </div>
      </form>
    </>
  );
}
