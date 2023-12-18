// import { useState } from 'react'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import style from "./App.module.scss";

function App() {
  return (
    <>
      <div className={style.container}>
        <h1>Verba</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
