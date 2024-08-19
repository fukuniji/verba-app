// import { useState } from 'react'
import { Home, Cards, Words, ErrorPage } from "../../Pages";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import style from "./App.module.scss";
import "../../style/index.scss";
import data from "../../data.json";
// import { useEffect } from "react";
// import { observer } from "mobx-react-lite";
// import { useStores } from "../../hooks/useStores";

// const App = observer(() => {
const App = () => {
  // const { wordsStore } = useStores();

  // useEffect(() => {
  //   wordsStore.getData(); // Получаем данные при монтировании компонента
  // }, [wordsStore]);

  return (
    <div className={style.container}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards data={data} />} />
          <Route path="/words" element={<Words data={data} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
// });

export default App;
