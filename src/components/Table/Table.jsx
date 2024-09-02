import TableLine from "../TableLine/TableLine";

import style from "./Table.module.scss";

export default function Table({ data }) {
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
