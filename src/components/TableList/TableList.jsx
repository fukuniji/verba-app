import style from "./TableList.module.scss";
import data from "../../data.json";
import TableLine from "../TableLine/TableLine";

export default function TableList() {
  return (
    <>
      <div className={style.container}>
        <h3 className={style.title}>Список слов</h3>
        <div className={style.table_wrapper}>
          <div className={style.table_header_wrapper}>
            <div className={style.table_heading}>Слово</div>
            <div className={style.table_heading}>Перевод</div>
            <div className={style.table_heading}>Транскрипция</div>
            <div className={style.table_heading}>Тема</div>
            <div className={style.table_heading}>Изменить</div>
          </div>
          {data.map((item) => {
            return (
              <TableLine
                key={item.id}
                word={item.english}
                transl={item.russian}
                transc={item.transcription}
                theme={item.tags}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
