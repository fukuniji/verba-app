import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { store, StoreContext } from "./Context/StoreContext";
import { StoreProvider } from "./Context/StoreContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StoreContext.Provider value={store}> */}
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
    {/* </StoreContext.Provider> */}
  </React.StrictMode>
);
