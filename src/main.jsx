import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { WordsProvider } from "./Context/WordsContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WordsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WordsProvider>
  </React.StrictMode>
);
