import Card from "../Card/Card";
import Table from "../Table/Table";

import style from "./Main.module.scss";

export default function Main() {
  return (
    <>
      <main className={style.container}>
        <Card />
        <Table />
      </main>
    </>
  );
}
