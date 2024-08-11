import FormAddWord from "../../components/FormAddWord/FormAddWord";
import Table from "../../components/Table/Table";
import style from "./Words.module.scss";

export default function Words() {
  return (
    <section className={style.words_section}>
      <FormAddWord />
      <Table />
    </section>
  );
}
