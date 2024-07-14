import FormAddWord from "../../components/FormAddWord/FormAddWord";
import Table from "../../components/Table/Table";
import style from "./Words.module.scss";

export default function Words({ data }) {
  return (
    <section className={style.words_section}>
      <FormAddWord />
      <Table data={data} />
    </section>
  );
}
