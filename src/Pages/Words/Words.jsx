import Table from "../../components/Table/Table";
import Row from "../../components/Row/Row";
import style from "./Words.module.scss";

export default function Words({ stateWords }) {
  return (
    <>
      <h2>Список слов</h2>
      <Table />
      {/* <div className={style.table}>
        {stateWords.words.map((word) => {
          return <Row id={word.id} word={word} key={word.id} />;
        })}
      </div> */}
    </>
  );
}
