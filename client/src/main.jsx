import React from "react";
import ReactDOM from "react-dom/client";
// import { ReactProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// const router = createBrowserRouter([

// ])
import { store, persistedStore} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
      
    </Provider>
  </>
);
