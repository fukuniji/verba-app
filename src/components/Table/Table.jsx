import TableLine from "../TableLine/TableLine";
import style from "./Table.module.scss";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../hooks/useStores";

const Table = observer(() => {
  const { wordsStore } = useStores();

  useEffect(() => {
    wordsStore.getData(); // Получаем данные при монтировании компонента
  }, [wordsStore]);

  const words = wordsStore.words;

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
});

export default Table;
