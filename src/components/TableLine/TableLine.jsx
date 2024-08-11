import style from "./TableLine.module.scss";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/trash.svg";
import TableLineEdit from "../TableLineEdit/TableLineEdit";
import { useState } from "react";

export default function TableLine(props) {
  const [editing, setEditing] = useState(false);
  const [word, setWord] = useState(props.english);
  const [transl, setTransl] = useState(props.russian);
  const [transc, setTransc] = useState(props.transcription);
  const [theme, setTheme] = useState(props.tags);

  const cancelEdit = (e) => {
    e.preventDefault();
    setWord(props.english);
    setTransl(props.russian);
    setTransc(props.transcription);
    setTheme(props.tags);
    setEditing(false);
  };

  return (
    <>
      {!editing ? (
        <div className={style.line}>
          <div className={style.line_word}>{word}</div>
          <div className={style.line_transl}>{transl}</div>
          <div className={style.line_transc}>{transc}</div>
          <div className={style.line_theme}>{theme}</div>
          <div className={style.line_edit}>
            <button
              className={`${style.button_edit} ${style.button}`}
              onClick={() => setEditing(true)}
            >
              <img src={editIcon} alt="Edit" title="Редактировать" />
            </button>
            <button className={`${style.button_delete} ${style.button}`}>
              <img src={deleteIcon} alt="Delete" title="Удалить" />
            </button>
          </div>
        </div>
      ) : (
        <TableLineEdit
          word={word}
          transl={transl}
          transc={transc}
          theme={theme}
          setWord={setWord}
          setTransl={setTransl}
          setTransc={setTransc}
          setTheme={setTheme}
          setEditing={setEditing}
          cancelEdit={cancelEdit}
        />
      )}
    </>
  );
}
