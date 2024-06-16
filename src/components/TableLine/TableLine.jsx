import style from "./TableLine.module.scss";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/trash.svg";
import TableLineEdit from "../TableLineEdit/TableLineEdit";

export default function TableLine(props) {
  const editing = false;
  // const editing = true;

  return (
    <>
      {!editing ? (
        <div className={style.line}>
          <div className={style.line_word}>{props.word}</div>
          <div className={style.line_transl}>{props.transl}</div>
          <div className={style.line_transc}>{props.transc}</div>
          <div className={style.line_theme}>{props.theme}</div>
          <div className={style.line_edit}>
            <button className={`${style.button_edit} ${style.button}`}>
              <img src={editIcon} alt="Edit" title="Редактировать" />
            </button>
            <button className={`${style.button_delete} ${style.button}`}>
              <img src={deleteIcon} alt="Delete" title="Удалить" />
            </button>
          </div>
        </div>
      ) : (
        <TableLineEdit
          word={props.word}
          transl={props.transl}
          transc={props.transc}
          theme={props.theme}
        ></TableLineEdit>
      )}
    </>
  );
}
