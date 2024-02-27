import { useState } from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { Home, Cards, Words, ErrorPage } from "../../Pages";

import wordsJson from "../../data/words.json";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import style from "./App.module.scss";

function App() {
  const [words, setWords] = useState(wordsJson);
  const stateWords = { words, setWords };

  return (
    <>
      <div className={style.container}>
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/words" element={<Words />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes> */}
        <Main stateWords={stateWords} />
        <Footer />
      </div>
    </>
  );
}

export default App;
