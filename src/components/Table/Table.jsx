import TableLine from "../TableLine/TableLine";

import style from "./Table.module.scss";
import { useContext } from "react";
import { WordsContext } from "../../Context/WordsContext";

export default function Table() {
  const { words } = useContext(WordsContext);

  return (
    <>
      <div className={style.container}>
        <h2 className={style.title}>Список слов</h2>
        <div className={style.table_wrapper}>
          <div className={style.table_header_wrapper}>
            <div className={style.table_heading}>Слово</div>
            <div className={style.table_heading}>Перевод</div>
            <div className={style.table_heading}>Транскрипция</div>
            <div className={style.table_heading}>Тема</div>
            <div className={style.table_heading}>Изменить</div>
          </div>
          {words.map((item) => {
            return <TableLine key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}
