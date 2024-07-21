import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<HelmetProvider>
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </PersistGate>
</Provider>
</HelmetProvider>,
);
