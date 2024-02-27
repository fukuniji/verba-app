// import Card from "../Card/Card";
// import Table from "../Table/Table";
import { Routes, Route } from "react-router-dom";
import { Home, Cards, Words, ErrorPage } from "../../Pages";

import style from "./Main.module.scss";

export default function Main({ stateWords }) {
  return (
    <>
      <main className={style.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards stateWords={stateWords} />} />
          <Route path="/words" element={<Words stateWords={stateWords} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Card /> */}
        {/* <Table /> */}
      </main>
    </>
  );
}
