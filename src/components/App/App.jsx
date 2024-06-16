// import { useState } from 'react'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import style from "./App.module.scss";
import "../../style/index.scss";
import data from "../../data.json";

function App() {
  return (
    <>
      <div className={style.container}>
        <h1>Verba</h1>
        <Header />
        <Main data={data} />
        <Footer />
      </div>
    </>
  );
}

export default App;
