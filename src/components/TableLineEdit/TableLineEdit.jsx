import style from "./TableLineEdit.module.scss";
import { useState } from "react";

export default function TableLineEdit(props) {
  const [editedWord, setEditedWord] = useState(props.word);
  const [editedTransl, setEditedTransl] = useState(props.transl);
  const [editedTransc, setEditedTransc] = useState(props.transc);
  const [editedTheme, setEditedTheme] = useState(props.theme);

  const saveLine = (e) => {
    e.preventDefault();
    console.log(
      "Изменения сохранены:",
      "Word:",
      editedWord,
      "Transl:",
      editedTransl,
      "Transc:",
      editedTransc,
      "Theme:",
      editedTheme
    );
    props.setEditing(false);
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    setEditedWord(props.word);
    setEditedTransl(props.transl);
    setEditedTransc(props.transc);
    setEditedTheme(props.theme);
    props.setEditing(false);
  };

  return (
    <>
      <form className={style.line_editing}>
        <input
          type="text"
          className={style.input}
          value={editedWord}
          onChange={(e) => setEditedWord(e.target.value)}
        />
        <input
          type="text"
          className={style.input}
          value={editedTransl}
          onChange={(e) => setEditedTransl(e.target.value)}
        />
        <input
          type="text"
          className={style.input}
          value={editedTransc}
          onChange={(e) => setEditedTransc(e.target.value)}
        />
        <input
          type="text"
          className={style.input}
          value={editedTheme}
          onChange={(e) => setEditedTheme(e.target.value)}
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
